import React from "react";

const PackageType = () => {
  return (
    <div className="package relative hidden h-44 justify-between rounded bg-[#1565C0] p-4 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-package-design lg:-ml-1 lg:flex lg:w-full">
      <div className="details">
        <h1 className="text-lg font-medium">Package Type</h1>
        <div className="mt-14">
          <h2 className="text-sm">Tier 1</h2>
          <h3 className="mt-1">₦5000/month</h3>
        </div>
      </div>
    </div>
  );
};

export default PackageType;
