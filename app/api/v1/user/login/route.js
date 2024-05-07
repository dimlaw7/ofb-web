import pool from "@/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const data = await request.json();
  const { email, pass } = data;
  const error = [];
  let errorMsg = "";

  //Empty Email
  if (!email) {
    error.push("Firstname cannot be less than 3 characters");
  }
  //Empty Password
  if (!pass) {
    error.push("Lastname cannot be less than 3 characters");
  }

  //Error Response
  if (error.length > 0) {
    errorMsg = error[0];
    return Response.json({ status: "error", msg: errorMsg });
  }

  //If no error, Save JWT and Insert Data to DB
  try {
    const [results, fields] = await pool.query(
      "SELECT * FROM `profiles` WHERE email = ?",
      [email],
    );

    if (results.length == 0) {
      throw new Error("Email not registered");
    }

    //compare if password matches
    const [user] = results;
    const isPasswordCorrect = await bcrypt.compare(pass, user.security);

    if (!isPasswordCorrect) {
      throw new Error("Password is Incorrect");
    }

    const [sqlData] = results;

    const token = jwt.sign(
      {
        username: sqlData.user,
        firstName: sqlData.firstName,
        lastName: sqlData.LastName,
        wallet: sqlData.Wallet,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    return Response.json(
      { status: "ok", msg: "Login Successful", data: {} },
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
