"use client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import GlobalAPI from "@/app/_services/GlobalAPI";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleForm = async (data) => {
    setData({ email: data.email, pass: data.pass });
    if (!data.email || !data.pass) {
      Swal.fire({
        icon: "error",
        iconColor: "#DC3545",
        title: "Error",
        text: "Email or Password Cannot Be Empty",
        confirmButtonColor: "#DC3545",
      });
      return;
    }

    setLoader((current) => !current); //Show Loader During Request

    const apiData = await GlobalAPI.AuthenticateUser(data);

    apiData.status === "error"
      ? Swal.fire({
          icon: "error",
          iconColor: "#DC3545",
          title: "Login Error",
          text: apiData.msg,
          confirmButtonColor: "#DC3545",
        })
      : router.push("/dashboard");
    setData({ email: "", pass: "" });
    setLoader((current) => !current); //Hide Loader After Response
  };

  return (
    <form className="pt-8" onSubmit={handleSubmit(handleForm)}>
      <label htmlFor="email">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full border border-purple-300 text-base"
        placeholder="Email"
        defaultValue={data?.email}
        {...register("email")}
      />
      <label htmlFor="pass">
        Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type={showPassword}
          className="w-full border border-purple-300 text-base"
          placeholder="Password"
          defaultValue={data?.pass}
          {...register("pass")}
        />
        {showPassword == "password" ? (
          <div
            onClick={() => setShowPassword("text")}
            className="absolute right-2 top-3 hover:cursor-pointer"
          >
            <EyeOff size={18} color="#A855F7" />
          </div>
        ) : (
          <div
            onClick={() => setShowPassword("password")}
            className="absolute right-2 top-2 hover:cursor-pointer"
          >
            <Eye size={20} color="#A855F7" />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="flex w-full justify-center gap-2 bg-purp px-8 py-2 text-sm text-white hover:bg-purple-900 disabled:bg-light"
      >
        {loader && (
          <Circles
            height="20"
            width="20"
            color="#fff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <span>Submit</span>
      </button>
    </form>
  );
};

export default LoginForm;
