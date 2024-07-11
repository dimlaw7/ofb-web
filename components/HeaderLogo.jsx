import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ css }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/foodbasket.png" width={70} height={74} alt="Logo" />
    </Link>
  );
};

export default HeaderLogo;
