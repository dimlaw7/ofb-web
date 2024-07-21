import Advert from "../_components/Advert";
import DashboardHeader from "../_components/DashboardHeader";
import DashboardSubHeader from "../_components/DashboardSubHeader";
import DebtWarning from "../_components/DebtWarning";
import SavingsCard from "../_components/SavingsCard";
import SideNav from "../_components/SideNav";
import Transactions from "../_components/Transactions";

const page = () => {
  return (
    <section className="navigation bg-grey-bg font-Poppins">
      <SideNav userData={decoded} />
      <div className="lg:ml-64">
        <DashboardHeader userData={decoded} />
        <DashboardSubHeader userData={decoded} />
        <DebtWarning userData={decoded} />
        <section className="main mt-6 flex w-full flex-col justify-between gap-4 px-4 lg:flex-row lg:px-8">
          <div className="lt-col lg:w-[700px]">
            <Transactions />
          </div>
          <div className="rt-col flex flex-col gap-4">
            <SavingsCard userData={decoded} />
            <Advert />
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
