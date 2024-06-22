"use client";
import PageDetails from "@/components/dashboard/PageDetails";
import ProfileSettingsModal from "@/components/dashboard/ProfileSettingsModal";
import { useState } from "react";

const Main = ({ sqlData }) => {
  const [profileSettingsModal, setProfileSettingsModal] = useState(false);

  return (
    <>
      <section>
        <PageDetails title="My Account" />
        <div className="mx-4 bg-white p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-purp-60"></div>
            <h2 className="text-2xl font-semibold">{sqlData[0].name}</h2>
            <p>{sqlData[0].email}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2">
            <div className="inline-flex h-32 flex-col items-center justify-center border-2">
              <span>₦0</span>
              <span>Referrals: 0</span>
            </div>
            <div className="inline-flex h-32 flex-col items-center justify-center border-2">
              <span>₦0</span>
              <span>Referrals: 0</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-2">
            <button
              onClick={() => setProfileSettingsModal(true)}
              className="inline-flex flex-col items-center justify-center rounded-lg border-2 py-4 hover:bg-purp-60"
            >
              Account Settings
            </button>
            <a className="inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 py-4 hover:bg-purp-60">
              Change Password
            </a>
            <a className="inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 py-4 hover:bg-purp-60">
              Deposit
            </a>
            <a className="inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 py-4 hover:bg-purp-60">
              Contact Us
            </a>
            <a className="inline-flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 py-4 hover:bg-purp-60">
              Log Out
            </a>
          </div>
        </div>
      </section>
      {profileSettingsModal && (
        <ProfileSettingsModal visibility={setProfileSettingsModal} />
      )}
    </>
  );
};

export default Main;
