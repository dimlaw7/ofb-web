"use client";
import { useState } from "react";
import Form1 from "@/components/auth/Form1";
import Form2 from "@/components/auth/Form2";
import Form3 from "@/components/auth/Form3";
import Sidebar from "@/components/auth/Sidebar";
import ReturnHome from "@/components/ReturnHome";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const [activeForm, setActiveForm] = useState(0);
  const [data, setData] = useState({
    email: "",
    otp: "",
    fname: "",
    lname: "",
    uname: "",
    pass: "",
    pass2: "",
  });

  const formElements = [
    <Form1 data={data} setData={setData} setActiveForm={setActiveForm} />,
    <Form2 data={data} setData={setData} setActiveForm={setActiveForm} />,
    <Form3 data={data} setData={setData} />,
  ];
  return (
    <div className="flex h-screen items-center justify-center">
      <ReturnHome />
      <div className="left max-h-screen overflow-y-auto px-8 py-8 lg:w-4/12 lg:px-16">
        <div className="flex justify-center">
          <Image
            src="/images/ofb.jpg"
            height={100}
            width={100}
            alt="Image Logo"
          />
        </div>
        <h1 className="text-center text-2xl font-extrabold leading-[70px] sm:text-4xl sm:leading-[70px]">
          Create Account
        </h1>
        <p className="text-center text-sm text-[#00000080] lg:text-base">
          Create an account in few seconds
        </p>
        {formElements[activeForm]}
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-purp">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Sidebar
        icon="/icons/profile-white.svg"
        title="Create A Free Account"
        paragraph="Create an account in few seconds"
      />
    </div>
  );
};

export default page;
