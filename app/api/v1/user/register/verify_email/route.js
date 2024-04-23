import pool from "@/db";

export async function GET() {
  return Response.json({ msg: "Hello World!," });
}

export async function POST(request) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const data = await request.json();
  const { email } = data;

  //Return error response if email format is invalid
  if (!emailRegex.test(email)) {
    return Response.json({ status: "error", msg: "Invalid email address" });
  }

  //Return error response If Email is registered
  const [rows, fields] = await pool.query(
    "SELECT * FROM profiles WHERE email = ?",
    [email],
  );
  if (rows.length > 0) {
    return Response.json({
      status: "error",
      msg: "Email Address is registered with another account",
    });
  }

  return Response.json({ status: "ok", msg: "Valid email address" });
}
