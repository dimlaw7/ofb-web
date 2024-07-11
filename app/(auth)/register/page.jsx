"use client";
import Sidebar from "@/app/(auth)/_components/Sidebar";
import Form1 from "@/app/(auth)/register/_components/Form1";
import Form2 from "@/app/(auth)/register/_components/Form2";
import Form3 from "@/app/(auth)/register/_components/Form3";
import ReturnHome from "@/components/ReturnHome";
import Link from "next/link";
import { useState } from "react";
import LoginHeaderLogo from "../_components/LoginHeaderLogo";

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
        <LoginHeaderLogo
          title="Create Account"
          desc="Create an account in few seconds"
        />
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
