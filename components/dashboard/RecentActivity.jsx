import { cookies } from "next/headers";
import Image from "next/image";
import ActivitySlip from "./ActivitySlip";

const RecentActivity = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const response = await fetch(process.env.URL + "/api/v1/user/transactions", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Cookie: `token=${token.value};`,
    },
  });
  const apiData = await response.json();
  const { data } = apiData;
  return (
    <section className="activity my-16 flex flex-col lg:flex-row">
      <div className="transactions">
        <h1 className="font-bold">Recent Activities</h1>
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
