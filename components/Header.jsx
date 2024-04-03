import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#EAE1F3] px-8 py-4">
      <div className="flex items-center">
        <Image src="/images/food-basket.png" width={40} height={43} />
        <h6 className="font-pacifico text-2xl text-purp">FoodBasket</h6>
      </div>
      <div className="flex gap-8">
        <a href="" className="font-jost text-purp">
          Home
        </a>
        <a href="" className="font-jost text-purp">
          Mission
        </a>
        <a href="" className="font-jost text-purp">
          Food Fund
        </a>
        <a href="" className="font-jost text-purp">
          About
        </a>
      </div>
      <div className="flex gap-11">
        <a href="">
          <button className="rounded-full border border-purp px-8 py-4 text-sm font-semibold text-purp">
            Login
          </button>
        </a>
        <a href="">
          <button className="rounded-full bg-purp px-8 py-4 text-sm font-semibold text-white">
            Register
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
