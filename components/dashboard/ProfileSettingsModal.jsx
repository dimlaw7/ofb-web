import CancelIcon from "@/public/icons/cancel_icon.svg";
import Image from "next/image";

const ProfileSettingsModal = ({ visibility }) => {
  return (
    <section
      onClick={() => {
        visibility(false);
      }}
      className="fixed bottom-0 left-0 right-0 top-0 bg-[#00000080] shadow-lg"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="profile-settings-modal fixed flex h-screen w-full flex-col overflow-y-scroll bg-white p-8 lg:right-0 lg:w-2/6"
      >
        <div className="h mb-8">
          <div
            className="cancel-icon flex justify-end text-purple-800 hover:cursor-pointer"
            onClick={() => {
              visibility(false);
            }}
          >
            <CancelIcon />
          </div>
          <h2 className="font mt-8 text-lg font-semibold">Profile Data</h2>
          <p className="text-xs font-medium">Update your profile data</p>
        </div>
        <div className="avatar mb-8 flex items-center gap-2 hover:cursor-pointer">
          <div className="h-16 w-16 rounded-full bg-purp-60">
            <Image
              src="/icons/profile_account.svg"
              width={64}
              height={64}
              alt="My DP"
            />
          </div>
          <p className="text-xs">Tap to change avatar</p>
        </div>
        <div className="input flex flex-col">
          <label
            htmlFor="firstname"
            className="text-xs font-semibold text-gray-700"
          >
            Firstname
          </label>
          <input
            type="text"
            className="rounded-md bg-gray-200 py-3 pl-3 pr-2 text-gray-900 outline-none"
            name="firstname"
            id="firstname"
            value="Oladimeji"
            disabled
          />
        </div>
        <div className="input flex flex-col">
          <label
            htmlFor="lastname"
            className="text-xs font-semibold text-gray-700"
          >
            Lastname
          </label>
          <input
            type="text"
            className="rounded-md bg-gray-200 py-3 pl-3 pr-2 text-gray-900 outline-none"
            name="lastname"
            id="lastname"
            value="Lawal"
            disabled
          />
        </div>
        <div className="input flex flex-col">
          <label htmlFor="mail" className="text-xs font-semibold text-gray-700">
            E-mail
          </label>
          <input
            type="text"
            className="rounded-md bg-gray-200 py-3 pl-3 pr-2 text-gray-900 outline-none"
            name="mail"
            id="mail"
            value="Dimlaw7@gmail.com"
            disabled
          />
        </div>
        <div className="input flex flex-col">
          <label
            htmlFor="phone"
            className="text-xs font-semibold text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            className="rounded-md bg-gray-200 py-3 pl-3 pr-2 text-gray-900 outline-none"
            name="phone"
            id="phone"
            value="09015491581"
            disabled
          />
        </div>
        <div>
          <p className="text-xs text-green-600">
            You can only change your picture with this form. To change your
            account information please send an email to customer service.
          </p>
          <button
            className="my-5 block h-10 w-full rounded-xl bg-purp text-sm font-semibold text-white hover:bg-purple-900 disabled:cursor-not-allowed disabled:opacity-75"
            disabled
          >
            Update Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettingsModal;
