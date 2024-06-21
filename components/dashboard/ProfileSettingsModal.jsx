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
        className="profile-settings-modal absolute right-0 flex h-full w-2/6 flex-col justify-center bg-white p-8"
      >
        <div className="h mb-8 mt-16">
          <h2 className="font text-lg font-semibold">Profile Data</h2>
          <p className="text-xs font-medium">Update your profile data</p>
        </div>
        <div className="mb-8 flex items-center gap-2">
          <div className="h-16 w-16 rounded-full bg-purp-60"></div>
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
          />
        </div>
        <div className="input flex flex-col">
          <label
            htmlFor="firstname"
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
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSettingsModal;
