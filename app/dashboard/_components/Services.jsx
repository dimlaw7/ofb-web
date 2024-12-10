"use client";
import { Button } from "@/components/ui/button";
import { BookUp, PackageOpen } from "lucide-react";
import { useState } from "react";
import TopupModal from "./modal/TopupModal";
import Link from "next/link";

const DashboardServices = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="sm-devices hidden border bg-white px-4 py-8 lg:block">
        <h4 className="font-semibold">What will you like to do?</h4>
        <ul className="mt-8 flex flex-col lg:flex-row">
          <li className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-purple-200 px-4 py-5 lg:mr-8 lg:w-60">
            <div className="text-sm">
              <h4 className="text-sm font-semibold text-[#232834]">
                Save To Wallet
              </h4>
              <p className="my-4">Deposit your monthly saving.</p>
            </div>
            <Button onClick={() => setShowModal(true)}>Click here</Button>
          </li>
          <li className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-yellow-100 px-4 py-5 lg:mr-8 lg:w-60">
            <div className="text-sm">
              <h4 className="text-sm font-semibold text-[#232834]">
                Check My Budget
              </h4>
              <p className="my-4">
                Take a peek at your budget savings for the year.
              </p>
            </div>
            <Button>Click here</Button>
          </li>
          <li className="card mb-4 flex min-h-32 w-full flex-col justify-between rounded bg-lime-100 px-4 py-5 lg:mr-8 lg:w-60">
            <div className="text-sm">
              <h4 className="text-sm font-semibold text-[#232834]">
                Update Package
              </h4>
              <p className="my-4">Upgrade or Downgrade your savings package</p>
            </div>
            <Button>Click here</Button>
          </li>
        </ul>
      </section>
      <section className="services border bg-white px-4 py-6 lg:hidden">
        <h4 className="text-sm font-semibold">What would you like to do?</h4>
        <ul className="mt-6 grid grid-cols-4 gap-4">
          <li
            onClick={() => setShowModal(true)}
            className="quick-save cols flex flex-col items-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
              <BookUp size={15} />
            </div>
            <span className="text-xs font-semibold">Deposit</span>
          </li>
          <li className="packages cols flex flex-col items-center">
            <Link href="/dashboard/packages">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <PackageOpen size={15} />
              </div>
            </Link>
            <span className="text-xs font-semibold">Packages</span>
          </li>
        </ul>
      </section>
      {showModal && <TopupModal closeModal={setShowModal} />}
    </>
  );
};

export default DashboardServices;
