import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiggyBank } from "lucide-react";
import { months } from "@/const";
import pool from "@/db";

const SavingsCard = async ({ userData }) => {
  const { username } = userData;

  let connection;
  try {
    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT c.month_number, p.id FROM contributions c INNER JOIN profiles p ON c.profile_id = p.id WHERE p.user = ? ORDER BY c.month_number",
      [username],
    );
    sqlData.length > 0 ? console.log(sqlData) : console.log("No data");

    return (
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-lg">Savings Card</CardTitle>
          <CardDescription className="text-sm">
            This is an overview of your savings progress
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-2">
          {months.map((item, index) => (
            <div
              key={index}
              className={`text-am flex flex-col items-center gap-0.5 rounded-sm border p-0.5 ${sqlData.length > 0 ? "bg-purple-800 text-white" : "bg-purple-100"} `}
            >
              <h3 className="text-xs font-semibold">{item.slice(0, 3)}</h3>
              <PiggyBank color="#fbbf24" />
              <h3 className="text-xs font-semibold">5000</h3>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  } catch (error) {}
};

export default SavingsCard;
