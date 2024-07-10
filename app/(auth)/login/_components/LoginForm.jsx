"use client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

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

    const response = await fetch("api/v1/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        pass: data.pass,
      }),
    });
    const apiData = await response.json();

    apiData.status === "error"
      ? Swal.fire({
          icon: "error",
          iconColor: "#DC3545",
          title: "Login Error",
          text: apiData.msg,
          confirmButtonColor: "#DC3545",
        })
      : router.push("/dashboard");
    setLoader((current) => !current); //Hide Loader After Response
  };

  return (
    <form className="pt-8" onSubmit={handleForm}>
      <label htmlFor="email">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        required
        type="email"
        name="email"
        id="email"
        value={data.email}
        className="w-full border border-purple-300 text-base"
        placeholder="Email"
        onInput={(evt) => {
          const { name, value } = evt.target;
          setData({
            ...data,
            [name]: value,
          });
        }}
      />
      <label htmlFor="pass">
        Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          required
          type={showPassword}
          name="pass"
          id="pass"
          value={data.pass}
          className="w-full border border-purple-300 text-base"
          placeholder="Password"
          onInput={(evt) => {
            const { name, value } = evt.target;
            setData({
              ...data,
              [name]: value,
            });
          }}
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
