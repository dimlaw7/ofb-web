import Image from "next/image";
import { testimonies } from "@/const";

export const metadata = {
  title: "Testimonies From Members of FoodBasket",
  description: "Get inspired with testimonies from Members",
};

const page = () => {
  return (
    <>
      <section>
        <div className="hero relative flex h-[80vh] items-center bg-hero-testimonies before:absolute before:left-0 before:right-0 before:h-full before:bg-[#00000080] lg:h-[620px]">
          <div className="hero-data relative z-10 flex flex-col gap-2 bg-white px-8 py-4 lg:ml-44 lg:w-[636px]">
            <h1 className="text-2xl font-extrabold lg:text-4xl lg:leading-[70px]">
              Get inspired with testimonies from Members
            </h1>
            <p className="text-sm">
              Download OFB app on Google Playstore or App Store to create your
              account
            </p>
          </div>
        </div>
      </section>
      <main className="px-8 py-8 lg:px-0">
        <div className="container mx-auto">
          <div className="card-wrapper grid gap-x-10 gap-y-16 lg:grid-cols-3">
            {testimonies.map((item, index) => (
              <div className="card flex flex-col items-center gap-8 rounded-3xl border border-light px-8 py-24 shadow-md">
                <div className="dp flex h-[100px] w-[100px] items-center justify-center rounded-full border shadow-md">
                  <Image
                    src="/icons/profile-circle-fill.svg"
                    width={50}
                    height={50}
                  />
                </div>
                <h6 className="font-bold">{item.name}</h6>
                <p className="text-center text-[#00000080]">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
