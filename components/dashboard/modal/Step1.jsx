import { bankInfo } from "@/const";

const Step1 = ({ depositValue, submitDeposit, loader }) => {
  return !loader ? (
    <div className="acct-details">
      <h1 className="text-xl font-semibold leading-normal text-[#232834]">
        Pay With Transfer
      </h1>
      <p className="mt-2 text-center text-sm">
        Transfer {depositValue.amount} to Food Basket
      </p>
      <div className="bank-info mt-4 bg-gray-100 p-2">
        {bankInfo.map((data, index) => (
          <div key={index} className="text-gray-800">
            <span className="inline-block text-xs">{data.title}</span>
            <p className="pb-8 text-sm font-semibold">{data.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={submitDeposit}
          type="submit"
          className="w-full rounded bg-purp py-2 text-sm text-white"
        >
          I've sent the money
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Step1;
