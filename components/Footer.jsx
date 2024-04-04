import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-purple-50 px-8 py-16 lg:px-0">
      <div className=" container mx-auto flex flex-col justify-between lg:flex-row">
        <div className="company max-sm:mb-16 lg:w-3/12">
          <div className="mb-4 flex items-center">
            <Image src="/images/food-basket.png" width={40} height={43} />
            <h6 className="font-pacifico text-2xl text-purp">FoodBasket</h6>
          </div>
          <p className="leading-6 lg:max-w-[261px]">
            FoodBasket helps you save money all year long, so you can feast with
            quality and quantity during the festive season
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:w-6/12 lg:grid-cols-3">
          <div className="foot-col">
            <h6>Company</h6>
            <a href="http://">About Us</a>
            <a href="http://">Privacy Policy</a>
            <a href="http://">Terms and Conditions</a>
          </div>
          <div className="foot-col">
            <h6>Partners</h6>
            <a href="http://">Erister Furnitures</a>
            <a href="http://">LFC</a>
          </div>
          <div className="foot-col">
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
