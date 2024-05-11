const DashboardServices = () => {
  return (
    <section>
      <h4>What will you like to do?</h4>
      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="card mb-4 min-h-32 w-full rounded bg-purple-200 px-4 py-5 lg:mr-8 lg:w-60">
          <h4 className="text-sm font-semibold text-[#232834]">
            Save To Wallet
          </h4>
          <div className="mt-4 text-sm">
            <p className="mb-4">Deposit your monthly saving.</p>
            <button className="float-right rounded-full bg-slate-900 px-4 py-2 text-xs text-white">
              Click here
            </button>
          </div>
        </div>
        <div className="card mb-4 min-h-32 w-full rounded bg-yellow-100 px-4 py-5 lg:mr-8 lg:w-60">
          <h4 className="text-sm font-semibold text-[#232834]">
            Save To Wallet
          </h4>
          <div className="mt-4 text-sm">
            <p className="mb-4">Deposit your monthly saving.</p>
            <button className="float-right rounded-full bg-slate-900 px-4 py-2 text-xs text-white">
              Click here
            </button>
          </div>
        </div>
        <div className="card mb-4 min-h-32 w-full rounded bg-lime-100 px-4 py-5 lg:mr-8 lg:w-60">
          <h4 className="text-sm font-semibold text-[#232834]">
            Save To Wallet
          </h4>
          <div className="mt-4 text-sm">
            <p className="mb-4">Deposit your monthly saving.</p>
            <button className="float-right rounded-full bg-slate-900 px-4 py-2 text-xs text-white">
              Click here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardServices;
