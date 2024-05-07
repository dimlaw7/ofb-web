"use client";
import { useState } from "react";
import TopupModal from "./TopupModal";
import QuicksaveBtn from "./QuicksaveBtn";

const WalletOverview = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="news mt-8 rounded bg-red-600 p-2 text-sm font-light text-white">
        <span>
          Your N5000 monthly wallet contribution is due for May. Remember to
          make your payment today!
        </span>
      </div>
      <section className="wallet my-8 flex w-full flex-col justify-between lg:flex-row">
        <div className="cards flex">
          <div className="ballance h-44 w-full rounded bg-purp p-4 text-white lg:w-56">
            <h1 className="mb-4 opacity-80">FoodBasket Wallet</h1>
            <h1 className="text-2xl font-extrabold">₦{userData.wallet}</h1>
            <div className="mt-8 lg:hidden">
              <QuicksaveBtn setShowModal={setShowModal} />
            </div>
          </div>
          <div className="package relative hidden h-44 justify-between rounded bg-[#1565C0] p-4 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-package-design lg:-ml-1 lg:flex lg:w-96">
            <div className="details">
              <h1 className="text-xl font-medium">Package Type</h1>
              <div className="mt-14 opacity-80">
                <h2 className="font-bold">Tier 1</h2>
                <h3 className="mt-1">₦5000/month</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-actions hidden h-44 w-56 flex-col items-center justify-around rounded bg-[#280151]  p-4 text-white lg:flex">
          <QuicksaveBtn setShowModal={setShowModal} />
        </div>
      </section>
      {showModal && <TopupModal closeModal={setShowModal} />}
    </>
  );
};

export default WalletOverview;
