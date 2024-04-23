"use client";
import { useState } from "react";
import Form1 from "@/components/auth/Form1";
import Form2 from "@/components/auth/Form2";
import Form3 from "@/components/auth/Form3";
import Sidebar from "@/components/auth/Sidebar";
import ReturnHome from "@/components/ReturnHome";

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
    <div className="flex items-center">
      <ReturnHome />
      <div className="left max-h-screen w-4/12 overflow-y-auto px-16 py-8">
        <h1 className="text-center text-4xl font-extrabold leading-[70px]">
          Create Account
        </h1>
        <p className="text-center text-[#00000080]">
          Create an account in few seconds
        </p>
        {formElements[activeForm]}
        <div className="mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="font-bold text-purp">
              Log In
            </a>
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
