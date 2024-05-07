"use client";
import { useState } from "react";

const TopupModal = ({ closeModal }) => {
  const [depositValue, setDepositValue] = useState({ amount: "", month: "" });
  const [displayValue, setDDisplayValue] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleInputChange = (event) => {
    // Remove non-digit characters from input
    let inputValue = event.target.value.replace(/[^\d.]+|(?<=\.\d*)\./g, "");

    // Split the input value into integer and decimal parts
    let [integerPart, decimalPart] = inputValue.split(".");
    // Format the integer part with commas for thousands separators
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (/\./.test(inputValue)) {
      inputValue = decimalPart
        ? `${integerPart}.${decimalPart}`
        : `${integerPart}.`;
    } else {
      // Reassemble the input value with the formatted integer part and the original decimal part
      inputValue = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
    }

    setDepositValue({ ...depositValue, amount: inputValue });
  };

  const submitDeposit = async (event) => {
    const response = await fetch("api/v1/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(depositValue),
    });
  };

  return (
    <section
      onClick={(e) => {
        closeModal(false);
      }}
      className="quick-save-modal fixed bottom-0 left-0 top-0 flex w-full items-center justify-center bg-[#00000080]"
    >
      <div
        className="modal w-80 bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1 className="text-xl font-bold leading-normal text-[#232834]">
            Quick Save
          </h1>
          <p className="text-xs font-light text-greyscale">
            Enter an amount and month to save
          </p>
        </div>
        <div className="mt-8">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            autoComplete="off"
            value={depositValue.amount}
            onChange={handleInputChange}
            className="w-full border"
          />
          <label htmlFor="month">Month</label>
          <select
            name="month"
            id="month"
            className="mb-8 w-full border py-2 pl-4 focus:outline-none"
          >
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <button
            onClick={submitDeposit}
            className="w-full rounded bg-purp py-2 text-white"
          >
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopupModal;
