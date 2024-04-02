import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#EAE1F3] px-8 py-4">
      <div className="flex items-center">
        <Image src="/images/food-basket.png" width={40} height={43} />
        <h6 className="text-purp font-pacifico text-2xl">FoodBasket</h6>
      </div>
      <div className="flex gap-6">
        <a href="" className="text-purp font-jost font-semibold">
          Home
        </a>
        <a href="" className="text-purp font-jost">
          Mission
        </a>
        <a href="" className="text-purp font-jost">
          Food Fund
        </a>
        <a href="" className="text-purp font-jost">
          About
        </a>
      </div>
      <div className="flex gap-11">
        <a href="">
          <button className="border-purp text-purp rounded-full border px-8 py-4 text-sm font-semibold">
            Login
          </button>
        </a>
        <a href="">
          <button className="bg-purp rounded-full px-8 py-4 text-sm font-semibold text-white">
            Register
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
