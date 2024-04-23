import Image from "next/image";

const Sidebar = ({ icon, title, paragraph }) => {
  return (
    <div className="right flex h-screen w-8/12 flex-col items-center justify-center gap-8 bg-purp text-white">
      <Image src={icon} width={100} height={100} />
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="text-lg font-extrabold">{paragraph}</p>
    </div>
  );
};

export default Sidebar;
