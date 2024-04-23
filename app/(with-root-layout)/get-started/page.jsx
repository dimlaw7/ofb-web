import Image from "next/image";

export const metadata = {
  title: "Get Started With FoodBasket",
  description: "The Quick Way To Start With FoodBasket",
};

const page = () => {
  return (
    <>
      <section className="hero">
        <div className="relative flex h-[60vh] items-center bg-hero-register before:absolute before:left-0 before:right-0 before:h-full before:bg-[#00000080] lg:h-[620px]">
          <div className="hero-data relative z-10 flex flex-col gap-2 bg-white px-8 py-4 lg:ml-44 lg:w-[554px]">
            <h1 className="text-2xl font-extrabold lg:text-4xl lg:leading-[70px]">
              The Quick Way To Start With FoodBasket
            </h1>
            <p className="text-sm">
              Download OFB app on Google Playstore or App Store to create your
              account
            </p>
          </div>
        </div>
      </section>
      <main className="get-started px-8 lg:px-0">
        <div className="container mx-auto grid gap-28 py-16 lg:grid-cols-2">
          <div className="border bg-white px-8 py-8 shadow-sm">
            <h6 className="mb-8 text-2xl font-bold">
              How to create an account
            </h6>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Lorem ipsum dolor sit amet.  consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
          <div className="hidden justify-center border bg-purple-100 px-8 py-8 lg:flex">
            <Image src="/images/register.png" width={222} height={453} />
          </div>
        </div>
        <div className="container mx-auto grid gap-28 py-16 lg:grid-cols-2">
          <div className="hidden justify-center border bg-purple-100 px-8 py-8 lg:flex">
            <Image src="/images/register.png" width={222} height={453} />
          </div>
          <div className="border bg-white px-8 py-8 shadow-sm">
            <h6 className="mb-8 text-2xl font-bold">
              How to create an account
            </h6>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Lorem ipsum dolor sit amet.  consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto grid gap-28 py-16 lg:grid-cols-2">
          <div className="hidden justify-center border bg-purple-100 px-8 py-8 shadow-sm lg:flex">
            <Image src="/images/register.png" width={222} height={453} />
          </div>
          <div className="border bg-white px-8 py-8">
            <h6>How to create an account</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Lorem ipsum dolor sit amet.  consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
