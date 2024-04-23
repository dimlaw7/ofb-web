import Image from "next/image";
import Link from "next/link";

const ReturnHome = () => {
  return (
    <Link
      href="/"
      className="absolute left-8 top-9 flex h-10 w-10 -rotate-90 items-center justify-center rounded-full border-2"
    >
      <Image src="/icons/arrow_up.svg" width={20} height={20} />
    </Link>
  );
};

export default ReturnHome;
