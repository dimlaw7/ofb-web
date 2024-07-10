"use client";
import { useState } from "react";
import useRadix from "@/hooks/useRadix";
import TopupModal from "./modal/TopupModal";
import { Button } from "@/components/ui/button";

const WalletOverview = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);
  const [wallet] = useRadix(userData.wallet);

  return (
    <>
      <div className="ballance relative h-44 w-full rounded bg-[#280151] p-4 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-package-design lg:min-w-72">
        <h1 className="mb-2 text-sm">Wallet Balance</h1>
        <h1 className="text-lg font-semibold">₦{wallet}</h1>
        <div onClick={() => setShowModal(true)} className="relative mt-8">
          <Button className="bg-[#0F172A]">Quick Save</Button>
        </div>
      </div>
      {showModal && <TopupModal closeModal={setShowModal} />}
    </>
  );
};

export default WalletOverview;
