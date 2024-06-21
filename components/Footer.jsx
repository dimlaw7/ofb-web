import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-purple-200 px-8 py-16 lg:px-0">
      <div className=" container mx-auto flex flex-col justify-between lg:flex-row lg:justify-normal">
        <div className="company max-sm:mb-16 lg:w-4/12">
          <div className="mb-4 flex items-center">
            <Image
              src="/images/food-basket.png"
              width={40}
              height={43}
              alt="food-basket"
              style={{ height: "43px", width: "40px" }}
            />
            <h6 className="font-pacifico text-2xl text-purp">FoodBasket</h6>
          </div>
          <p className="text-sm leading-6">
            FoodBasket helps you save money all year long, so you can feast with
            quality and quantity during the festive season
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:ml-8 lg:w-5/12 lg:grid-cols-3">
          <div className="foot-col text-sm">
            <h6>Company</h6>
            <a href="http://">About Us</a>
            <a href="http://">Privacy Policy</a>
            <a href="http://">Terms and Conditions</a>
          </div>
          <div className="foot-col text-sm">
            <h6>Partners</h6>
            <a href="http://">Erister Furnitures</a>
            <a href="http://">LFC</a>
          </div>
          <div className="foot-col text-sm">
            <h6>Meet Us</h6>
            <a href="http://">+234 808 673 0330</a>
            <a href="http://">team@ofb.com.ng</a>
            <a href="http://">33, Charity Street, Lagos, Nigeria.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
