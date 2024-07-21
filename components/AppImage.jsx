import Image from "next/image";

const AppImage = () => {
  return (
    <div className="app-image absolute right-0 top-16 -z-10 flex h-full w-10/12 justify-center">
      <Image
        src="/images/App-Mockup.png"
        width={226}
        height={462}
        className="absolute right-36 top-36 z-20 hidden lg:block"
      />
      <div className="send-icon ofb-shadow absolute left-[60%] top-[70%] hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-tertiary lg:flex">
        <Image src="/icons/send.svg" width={25} height={25} />
      </div>
      <div className="user-icon ofb-shadow absolute left-[90%] top-[40%] hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-yel lg:flex">
        <Image src="/icons/add-user.svg" width={25} height={25} />
      </div>
    </div>
  );
};

export default AppImage;
