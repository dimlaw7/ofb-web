import { Button } from "@/components/ui/button";

const DashboardServices = () => {
  return (
    <section className="border bg-white px-4 py-8">
      <h4 className="font-semibold">What will you like to do?</h4>
      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-purple-200 px-4 py-5 lg:mr-8 lg:w-60">
          <div className="text-sm">
            <h4 className="text-sm font-semibold text-[#232834]">
              Save To Wallet
            </h4>
            <p className="my-4">Deposit your monthly saving.</p>
          </div>
          <Button>Click here</Button>
        </div>
        <div className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-yellow-100 px-4 py-5 lg:mr-8 lg:w-60">
          <div className="text-sm">
            <h4 className="text-sm font-semibold text-[#232834]">
              Check My Budget
            </h4>
            <p className="my-4">
              Take a peek at your budget savings for the year.
            </p>
          </div>
          <Button>Click here</Button>
        </div>
        <div className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-lime-100 px-4 py-5 lg:mr-8 lg:w-60">
          <div className="text-sm">
            <h4 className="text-sm font-semibold text-[#232834]">
              Update Package
            </h4>
            <p className="my-4">Upgrade or Downgrade your savings package</p>
          </div>
          <Button>Click here</Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardServices;
