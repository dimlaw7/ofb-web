import { formatDate } from "@/const/dateTimeNow";
import { CornerRightDown, CornerRightUp, OctagonPause } from "lucide-react";

const ActivitySlip = ({ type, date, amount, status }) => {
  return (
    <div className="slip mt-4 flex w-full items-center justify-between rounded-xl border bg-white p-2 shadow">
      <div className="slip-det flex items-center gap-2 text-sm">
        <div className="icon flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
          {type == "Deposit" ? (
            <CornerRightUp color="#14532d" size={20} />
          ) : type == "Deposit" ? (
            <OctagonPause color="#14532d" size={20} />
          ) : (
            <CornerRightDown color="#14532d" size={20} />
          )}
        </div>
        <div className="">
          <h4 className="font-semibold">{type}</h4>
          <span
            className={`text-xs text-slate-400 ${status == "Pending" ? "text-amber-500" : ""}`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="amount flex flex-col items-center text-sm">
        <span className="font-semibold text-green-900">
          +₦{amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className="text-xs text-slate-400">
          {formatDate(date).datestamp}
        </span>
      </div>
    </div>
  );
};
export default ActivitySlip;
