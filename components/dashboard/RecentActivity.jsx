import Image from "next/image";
import ActivitySlip from "./ActivitySlip";

const RecentActivity = () => {
  return (
    <section className="activity my-8 flex">
      <div className="transactions">
        <h1 className="font-bold">Recent Activities</h1>
        <ActivitySlip type="credit" />
        <ActivitySlip type="credit" />
        <ActivitySlip type="credit" />
      </div>
      <div className="ads my-24 flex w-5/12 items-center justify-center">
        <Image src="/images/ofb-ad.jpg" width={300} height={300} />
      </div>
    </section>
  );
};

export default RecentActivity;
