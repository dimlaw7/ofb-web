import pool from "@/db";
import Image from "next/image";
import ActivitySlip from "./ActivitySlip";
import NoData from "@/public/illustrations/noData.svg";

const Transactions = async ({ userData }) => {
  const { username } = userData;

  let connection;
  try {
    connection = await pool.getConnection();
    const [sqlData] = await connection.query(
      "SELECT t.transaction_type, t.transaction_date, t.transaction_amount, t.transaction_status FROM profiles p INNER JOIN transactions t ON p.id=t.member_id WHERE p.user = ? ORDER BY t.transaction_date DESC",
      [username],
    );
    const data = JSON.parse(JSON.stringify(sqlData));

    if (sqlData.length > 0) {
      return (
        <section className="activity my-8 flex flex-col border bg-white px-4 py-8 lg:mx-0 lg:flex-row">
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
        </section>
      );
    } else {
      return (
        <section className="activity my-16 flex flex-col border bg-white px-4 py-8 lg:mx-0 lg:flex-row">
          <div className="transactions">
            <h1 className="font-bold">Transaction Slips</h1>
            <div className="mt-8 flex flex-col items-center gap-8">
              <NoData className="w-24" />
              <p className="text-center text-sm text-grey-txt">
                You have not made any transaction yet!
              </p>
            </div>
          </div>
        </section>
      );
    }
  } catch (err) {
    <section className="activity my-16 flex flex-col bg-white px-4 py-8 lg:flex-row">
      <div className="transactions">
        <h1 className="font-bold">Transaction Slips</h1>
        <h6>
          An error occured while trying to retrieve transaction from source.
          Kindly refresh!
        </h6>
      </div>
      <div className="ads my-24 hidden w-5/12 items-center justify-center lg:flex">
        <Image
          src="/images/ofb-ad.jpg"
          width={300}
          height={300}
          alt="ofb-advert"
        />
      </div>
    </section>;
  } finally {
    if (connection) connection.release();
  }
};

export default Transactions;
