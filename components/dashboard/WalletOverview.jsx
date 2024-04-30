const WalletOverview = ({ userData }) => {
  return (
    <section className="wallet my-8 flex w-full justify-between">
      <div className="cards flex">
        <div className="ballance h-44 w-56 rounded bg-purp p-4 text-white">
          <h1 className="mb-4 font-bold opacity-80">FoodBasket Wallet</h1>
          <h1 className="text-2xl font-extrabold">₦{userData.wallet}</h1>
        </div>
        <div className="package relative -ml-1 flex h-44 w-96 justify-between rounded bg-[#1565C0] p-4 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-package-design">
          <div className="details">
            <h1 className="text-xl font-medium">Package Type</h1>
            <div className="mt-14 opacity-80">
              <h2 className="font-bold">Tier 1</h2>
              <h3 className="mt-1">₦5000/month</h3>
            </div>
          </div>
          <button className="flex min-h-8 min-w-24 items-center justify-around self-end rounded bg-white p-1 text-purple-800">
            <span className="text-xs">Upgrade</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 6.49902H6.5V9.49903H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z"
                fill="#6420AA"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="quick-actions flex h-44 w-56 flex-col items-center justify-around rounded  bg-[#280151] p-4 text-white">
        <button className="flex min-h-8 min-w-24 items-center justify-around rounded bg-white p-1 text-purple-800">
          <span className="text-xs">Upgrade</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 6.49902H6.5V9.49903H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z"
              fill="#6420AA"
            />
          </svg>
        </button>
        <button className="flex min-h-8 min-w-24 items-center justify-around rounded bg-white p-1 text-purple-800">
          <span className="text-xs">Upgrade</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 6.49902H6.5V9.49903H5.5V6.49902H2.5V5.49902H5.5V2.49902H6.5V5.49902H9.5V6.49902Z"
              fill="#6420AA"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default WalletOverview;
