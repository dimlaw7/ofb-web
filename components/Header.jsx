import Image from "next/image";
import { navLinks } from "@/const";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#EAE1F3] px-8 py-4">
      <a href="/" className="flex items-center">
        <Image src="/images/food-basket.png" width={40} height={43} />
        <h6 className="font-pacifico text-2xl text-purp">FoodBasket</h6>
      </a>
      <div className="flex gap-8">
        {navLinks.map((item, index) => (
          <a
            href={item.url}
            className="font-jost text-purp hover:underline"
            key={index}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex gap-11">
        <a href="">
          <button className="rounded-full border border-purp px-8 py-4 text-sm font-semibold text-purp hover:shadow-lg">
            Login
          </button>
        </a>
        <a href="">
          <button className="rounded-full bg-purp px-8 py-4 text-sm font-semibold text-white hover:bg-purple-900">
            Register
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
