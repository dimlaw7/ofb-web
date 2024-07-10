import { months } from "@/const";

const DepositForm = ({
  step,
  nextPage,
  depositValue,
  handleAmount,
  handleMonth,
  currentMonth,
}) => {
  return (
    <div className={`deposit-form ${step > -1 ? "hidden" : ""}`}>
      <div>
        <h1 className="text-xl font-bold leading-normal text-[#232834]">
          Quick Save
        </h1>
        <p className="text-xs font-light text-greyscale">
          Enter an amount and month to save
        </p>
      </div>
      <form action="" onSubmit={nextPage} className="mt-8">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          id="amount"
          autoComplete="off"
          value={depositValue.amount}
          onChange={handleAmount}
          className="w-full border"
        />
        <label htmlFor="month">Month</label>
        <select
          name="month"
          id="month"
          className="mb-8 w-full border py-2 pl-4 focus:outline-none"
          onChange={handleMonth}
        >
          {months.map((month, index) => {
            return (
              <option
                key={index}
                value={index + 1}
                selected={index + 1 === currentMonth + 1}
              >
                {month}
              </option>
            );
          })}
        </select>
        <button
          onClick={nextPage}
          type="submit"
          className="w-full rounded bg-purp py-2 text-white"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default DepositForm;
