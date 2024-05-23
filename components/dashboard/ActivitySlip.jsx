import { formatDate } from "@/const/dateTimeNow";

const ActivitySlip = ({ type, date, amount, status }) => {
  if (type == "Deposit") {
    return (
      <div className="slip mt-4 flex w-full items-center justify-between rounded-xl bg-white p-2 shadow lg:w-[546px]">
        <div className="slip-det flex items-center text-sm">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.8754 19.4506L23.0235 19.4506C22.2051 19.4506 21.5437 20.112 21.5437 20.9304C21.5437 21.7488 22.2051 22.4102 23.0235 22.4102L27.8228 22.4102L19.884 30.3491C19.3063 30.9267 19.3052 31.8634 19.884 32.4421C20.4627 33.0208 21.3993 33.0198 21.977 32.4421L29.9159 24.5032L29.9159 29.3025C29.9159 29.7107 30.0812 30.0812 30.3491 30.3491C30.617 30.617 30.9875 30.7823 31.3957 30.7823C32.214 30.7823 32.8754 30.1209 32.8754 29.3025L32.8754 19.4506Z"
              fill="#086A00"
            />
          </svg>
          <div className="">
            <h4 className="mb-1">{type}</h4>
            <span
              className={`text-xs ${status == "Pending" ? "text-amber-500" : ""}`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="amount flex flex-col items-center text-sm text-[#086A00]">
          <span>+₦{amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          <span className="text-xs text-zinc-600">
            {formatDate(date).datestamp}
          </span>
        </div>
      </div>
    );
  }
};

export default ActivitySlip;
