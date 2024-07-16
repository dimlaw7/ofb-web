"use client";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { Button } from "@/components/ui/button";
import useRadix from "@/hooks/useRadix";
import { useEffect, useState } from "react";
import TopupModal from "./modal/TopupModal";

const WalletOverview = ({ token }) => {
  const [showModal, setShowModal] = useState(false);
  const [walletBalance, setWalletBalance] = useState(null);
  useEffect(() => {
    getWalletBalance(token);
  }, [walletBalance]);

  const getWalletBalance = async (token) => {
    try {
      const response = await GlobalAPI.getUserDetails(token);
      setWalletBalance(response.data["data"]["wallet"]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="ballance relative h-44 w-full rounded bg-[#280151] p-4 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-package-design lg:min-w-72">
        <h1 className="mb-2 text-sm">Wallet Balance</h1>
        <h1 className="text-lg font-semibold">
          ₦{walletBalance == null ? "*****" : useRadix(walletBalance)}
        </h1>
        <div onClick={() => setShowModal(true)} className="relative mt-8">
          <Button className="bg-[#0F172A]">Quick Save</Button>
        </div>
      </div>
      {showModal && <TopupModal closeModal={setShowModal} />}
    </>
  );
};

export default WalletOverview;
