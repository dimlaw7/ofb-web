const PageDetails = ({ title, children }) => {
  return (
    <div className="page-details justify-between px-4 py-8 lg:flex">
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-grey-txt">Dashboard &raquo; {title}</p>
      </div>
      {children && children}
    </div>
  );
};

export default PageDetails;
