import Image from "next/image";

const LoginHeaderLogo = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src="/images/ofb.jpg"
          height={100}
          width={100}
          alt="Image Logo"
        />
      </div>
      <h1 className="text-center text-2xl font-extrabold leading-[70px] sm:text-4xl sm:leading-[70px]">
        Account Login
      </h1>
      <p className="text-center text-sm text-[#00000080] lg:text-base">
        Welcome back! Sign In to continue
      </p>
    </>
  );
};

export default LoginHeaderLogo;
