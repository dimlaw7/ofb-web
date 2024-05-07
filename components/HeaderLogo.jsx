import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ css }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/food-basket.png" width={40} height={43} alt="Logo" />
      <h6 className={`font-pacifico ${css}`}>FoodBasket</h6>
    </Link>
  );
};

export default HeaderLogo;
