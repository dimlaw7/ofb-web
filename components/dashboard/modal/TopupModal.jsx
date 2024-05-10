"use client";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import Step1 from "./Step1";
import Step2 from "./Step2";
import DepositForm from "./DepositForm";
import Error from "./Error";

const TopupModal = ({ closeModal }) => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const [depositValue, setDepositValue] = useState({
    amount: "",
    month: currentMonth,
  });
  const [loader, setLoader] = useState(false);
  const [step, setStep] = useState(-1);

  const handleAmount = (e) => {
    // Remove non-digit characters from input
    let inputValue = e.target.value.replace(/[^\d.]+|(?<=\.\d*)\./g, "");

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

  const handleMonth = (e) => {
    const m = e.target.value;
    setDepositValue({ ...depositValue, month: m });
  };

  const nextPage = (e) => {
    e.preventDefault();
    setStep(0);
  };

  const submitDeposit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const response = await fetch("api/v1/user/deposit", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(depositValue),
    });
    const data = await response.json();

    setLoader(false);
    setDepositValue({
      amount: "",
      month: currentMonth,
    });
    data.status == "ok" ? setStep(1) : setStep(2);
  };

  const arrSteps = [
    <Step1
      depositValue={depositValue}
      submitDeposit={submitDeposit}
      loader={loader}
    />,
    <Step2 closeModal={closeModal} />,
    <Error closeModal={closeModal} />,
  ];

  return (
    <section
      onClick={(e) => {
        closeModal(false);
      }}
      className="quick-save-modal fixed bottom-0 left-0 top-0 flex w-full items-center justify-center bg-[#00000080]"
    >
      <div
        className="modal flex w-80 flex-col bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {loader && (
          <Circles
            height="60"
            width="60"
            color="#6420AA"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="self-center"
            visible={true}
          />
        )}
        <DepositForm
          step={step}
          nextPage={nextPage}
          depositValue={depositValue}
          handleAmount={handleAmount}
          handleMonth={handleMonth}
          currentMonth={currentMonth}
        />
        {arrSteps[step]}
      </div>
    </section>
  );
};

export default TopupModal;
