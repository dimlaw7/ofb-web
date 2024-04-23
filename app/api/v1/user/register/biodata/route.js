import { NextResponse } from "next/server";
import pool from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const data = await request.json();
  const { email, fname, lname, uname, pass, pass2 } = data;
  const error = [];
  let errorMsg = "";

  //Empty Firstname
  if (!fname) {
    error.push("Firstname cannot be less than 3 characters");
  }
  //Empty Lastname
  if (!lname) {
    error.push("Lastname cannot be less than 3 characters");
  }
  //Empty Username
  if (!uname) {
    error.push("Username is required");
  }
  //Empty Password
  if (!pass) {
    error.push("Password empty or less than required number");
  }
  //Conflicting Password
  if (pass != pass2) {
    error.push("Passwords do not match");
  }
  //Username Already Exist
  try {
    const [checkUsername] = await pool.query(
      "SELECT * FROM `profiles` WHERE `user`=?",
      [uname],
    );
    if (checkUsername.length > 0 && uname == checkUsername[0].user) {
      error.push("Username Already Taken");
    }
  } catch (err) {
    return Response.json({ status: "error", msg: err.message });
  }

  //Error Response
  if (error.length > 0) {
    errorMsg = error[0];
    return Response.json({ status: "error", msg: errorMsg });
  }

  //If no error, Save JWT and Insert Data to DB
  try {
    const token = jwt.sign({ username: uname }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const hashedPassword = await bcrypt.hash(pass, 10);
    const [results, fields] = await pool.query(
      "INSERT INTO `profiles` (`user`, `firstName`, `lastName`, `email`, `security`) VALUES (?, ?, ?, ?, ?)",
      [uname, fname, lname, email, hashedPassword],
    );

    return NextResponse.json(
      {
        status: "ok",
        msg: "Account has been created",
        data: {},
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=3600;`,
        },
      },
    );
  } catch (err) {
    return Response.json({ status: "error", msg: err.message });
  }
}
