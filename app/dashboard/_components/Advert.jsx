import Image from "next/image";

const Advert = () => {
  return (
    <div className="ads flex justify-center rounded-sm">
      <Image
        src="/images/ofb-ad.jpg"
        width={320}
        height={320}
        alt="ofb-advert"
        className="rounded-sm"
      />
    </div>
  );
};

export default Advert;
