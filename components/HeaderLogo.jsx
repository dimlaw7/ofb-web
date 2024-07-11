import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ css }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/foodbasket.png" width={40} height={42} alt="Logo" />
    </Link>
  );
};

export default HeaderLogo;
