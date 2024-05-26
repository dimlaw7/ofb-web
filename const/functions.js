import pool from "@/db";

const isAdmin = async (username) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const [roleData] = await conn.query(
      "SELECT role FROM profiles WHERE user = ?",
      [username],
    );
    if (conn) conn.release();
    if (roleData[0].role < 1) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return;
  }
};

export { isAdmin };
