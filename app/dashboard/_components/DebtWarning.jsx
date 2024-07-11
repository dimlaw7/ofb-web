import pool from "@/db";

const DebtWarning = async ({ userData }) => {
  const { username } = userData;
  const date = new Date();
  const month = date.getMonth() + 1; // Get current month

  let connection;
  try {
    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT c.month_number, p.id FROM contributions c INNER JOIN profiles p ON c.profile_id = p.id WHERE p.user = ? ORDER BY c.month_number",
      [username],
    );
    // Create the array of months contributed
    const arrOfMonthsContributed = sqlData.map((item) => item.month_number);
    const monthsDefaulted = month - arrOfMonthsContributed.length;

    if (monthsDefaulted > 0) {
      return (
        <div className="news mx-4 mt-4 overflow-hidden rounded bg-red-600 p-2 text-sm font-light text-white">
          <span className="text whitespace-nowrap">
            You have missed contribution deadlines for {monthsDefaulted}{" "}
            month(s)! Check your savings card for details.
          </span>
        </div>
      );
    } else {
      return null; // No contribution data
    }
  } catch (error) {
    console.error("Error fetching contribution data:", error);
    return null;
  } finally {
    if (connection) connection.release(); //Release connection to DB
  }
};

export default DebtWarning;
