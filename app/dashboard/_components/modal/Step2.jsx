import React from "react";

const Step2 = ({ closeModal }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="icon flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
        Ic
      </div>
      <h1 className="text-xl font-semibold leading-normal text-[#232834]">
        Sent
      </h1>
      <p className="my-4 text-xs">
        We will confirm your transfer and your Food Basket wallet will be
        credited in a few minutes
      </p>
      <button
        onClick={(e) => {
          closeModal(false);
        }}
        className="w-full rounded bg-purp py-2 text-sm text-white"
      >
        Okay
      </button>
    </div>
  );
};

export default Step2;
