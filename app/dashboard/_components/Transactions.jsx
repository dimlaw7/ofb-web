"use client";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { Skeleton } from "@/components/ui/skeleton";
import NoData from "@/public/illustrations/noData.svg";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ActivitySlip from "./ActivitySlip";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTransactions = async () => {
    setLoading(true);
    try {
      const response = await GlobalAPI.fetchUserTransactions();
      setTransactions(response.data["data"]);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  if (transactions?.length > 0) {
    return (
      <section className="activity my-8 border bg-white px-4 py-6 lg:mx-0">
        <div className="transactions">
          <h1 className="text-sm font-semibold">Transactions</h1>
          {!loading ? (
            transactions.map((value, index) => (
              <ActivitySlip
                key={index}
                type={value.transaction_type}
                date={value.transaction_date}
                amount={value.transaction_amount}
                status={value.transaction_status}
              />
            ))
          ) : (
            <div className="flex justify-center">
              <Circles
                height="60"
                width="60"
                color="#6420AA"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass="self-center"
                visible={true}
              />
            </div>
          )}
        </div>
      </section>
    );
  } else {
    return (
      <section className="activity my-16 flex flex-col border bg-white px-4 py-8 lg:mx-0">
        <div className="transactions">
          <h1 className="font-bold">Transaction Slips</h1>
          {!loading ? (
            <div className="mt-8 flex flex-col items-center gap-8">
              <NoData className="w-24" />
              <p className="text-center text-sm text-grey-txt">
                You have not made any transaction yet!
              </p>
            </div>
          ) : (
            <div>
              <Skeleton className="mt-4 flex h-[58px] w-full items-center justify-between rounded-xl" />
              <Skeleton className="mt-4 flex h-[58px] w-full items-center justify-between rounded-xl" />
            </div>
          )}
        </div>
      </section>
    );
  }
};
// <section className="activity my-16 flex flex-col bg-white px-4 py-8 lg:flex-row">
//   <div className="transactions">
//     <h1 className="font-bold">Transaction Slips</h1>
//     <h6>
//       An error occured while trying to retrieve transaction from source.
//       Kindly refresh!
//     </h6>
//   </div>
//   <div className="ads my-24 hidden w-5/12 items-center justify-center lg:flex">
//     <Image
//       src="/images/ofb-ad.jpg"
//       width={300}
//       height={300}
//       alt="ofb-advert"
//     />
//   </div>
// </section>

export default Transactions;
