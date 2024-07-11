"use client";
import { useState } from "react";
const Form2 = ({ data, setData, setActiveForm }) => {
  const [loader, setLoader] = useState(false);

  const handleChange = (evt) => {
    evt.preventDefault();
    setLoader((current) => !current);
    setTimeout(() => {
      setLoader((current) => !current);
      console.log(data);
      setActiveForm((current) => current + 1);
    }, 1500);
  };

  return (
    <form className="pt-8" onSubmit={handleChange}>
      <label htmlFor="email">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name=""
        id="email"
        value={data.email}
        className="w-full border border-purple-300"
        disabled
      />
      <label htmlFor="verify">
        Verification Code <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name=""
        id="verify"
        className="w-full border border-purple-300"
      />
      <button className="w-full bg-purp px-8 py-2 text-sm text-white hover:bg-purple-900 disabled:bg-light">
        <span className={loader ? "" : "hidden"}>...</span>Continue
      </button>
    </form>
  );
};

export default Form2;
