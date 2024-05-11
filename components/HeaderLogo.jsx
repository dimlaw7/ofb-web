import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ css }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/food-basket.png" width={40} height={42} alt="Logo" />
      <h6 className={`${css}`}>FoodBasket</h6>
    </Link>
  );
};

export default HeaderLogo;
