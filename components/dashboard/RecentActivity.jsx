import { cookies } from "next/headers";
import pool from "@/db";
import Image from "next/image";
import ActivitySlip from "./ActivitySlip";

const RecentActivity = async ({ userData }) => {
  const { username } = userData;
  const [sqlData] = await pool.query(
    "SELECT t.transaction_type, t.transaction_date, t.transaction_amount, t.transaction_status FROM profiles p INNER JOIN transactions t ON p.id=t.member_id WHERE p.user = ? ORDER BY t.transaction_date DESC",
    [username],
  );

  const data = JSON.parse(JSON.stringify(sqlData));
  return (
    <section className="activity my-16 flex flex-col lg:flex-row">
      <div className="transactions">
        <h1 className="font-bold">Transaction Slips</h1>
        {data.map((value, index) => (
          <ActivitySlip
            key={index}
            type={value.transaction_type}
            date={value.transaction_date}
            amount={value.transaction_amount}
            status={value.transaction_status}
          />
        ))}
      </div>
      <div className="ads my-24 flex w-5/12 items-center justify-center">
        <Image
          src="/images/ofb-ad.jpg"
          width={300}
          height={300}
          alt="ofb-advert"
        />
      </div>
    </section>
  );
};

export default RecentActivity;
