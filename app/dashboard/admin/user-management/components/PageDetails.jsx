const PageDetails = () => {
  return (
    <div className="page-details justify-between py-8 lg:flex">
      <div>
        <h2 className="font-semibold">User Management</h2>
        <p className="text-grey-txt text-sm">
          Dashboard &raquo; User Management
        </p>
      </div>
      <div className="mt-4 flex lg:mt-0">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search User"
            className="mb-0 h-full w-60 rounded-md border border-purp-60"
          />
        </div>
        <button className="rank-user text-purp-black ml-4 rounded-md bg-yellow-400 p-2 text-sm font-medium lg:min-w-32">
          Rank User
        </button>
      </div>
    </div>
  );
};

export default PageDetails;
