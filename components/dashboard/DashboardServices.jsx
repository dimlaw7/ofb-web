import Image from "next/image";

const DashboardServices = () => {
  return (
    <section>
      <h4>What will you like to do?</h4>
      <div className="mt-8 flex">
        <div className="card mr-8 h-32 w-52 rounded bg-purple-200 px-4 py-5">
          <h4 className="font-bold text-purp">Save To Wallet</h4>
          <div className="mt-4 flex text-sm text-zinc-600">
            <p>Click here to deposit your monthly saving.</p>
            <Image src="/icons/save-to-wallet.svg" width={40} height={40} />
          </div>
        </div>
        <div className="card mr-8 h-32 w-52 rounded bg-purple-200 px-4 py-5">
          <h4 className="font-bold text-purp">Save To Wallet</h4>
          <div className="mt-4 flex text-sm text-zinc-600">
            <p>Click here to deposit your monthly saving.</p>
            <Image src="/icons/save-to-wallet.svg" width={40} height={40} />
          </div>
        </div>
        <div className="card h-32 w-52 rounded bg-purple-200 px-4 py-5">
          <h4 className="font-bold text-purp">Save To Wallet</h4>
          <div className="mt-4 flex text-sm text-zinc-600">
            <p>Click here to deposit your monthly saving.</p>
            <Image src="/icons/save-to-wallet.svg" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardServices;
