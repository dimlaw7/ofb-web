"use client";
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

  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

    if (!data.email || !data.pass) {
      Swal.fire({
        icon: "error",
        iconColor: "#DC3545",
        title: "Error",
        text: "Username or Email Cannot Be Empty",
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

    setLoader((current) => !current); //Hide Loader After Response
    apiData.status === "error"
      ? Swal.fire({
          icon: "error",
          iconColor: "#DC3545",
          title: "Login Error",
          text: apiData.msg,
          confirmButtonColor: "#DC3545",
        })
      : Swal.fire({
          icon: "success",
          iconColor: "",
          title: "Login Successful",
          text: apiData.msg,
          confirmButtonColor: "#6420AA",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/dashboard");
          }
        });
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
        className="w-full border border-purple-300"
        placeholder="First Name"
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
      <input
        required
        type="text"
        name="pass"
        id="pass"
        value={data.pass}
        className="w-full border border-purple-300"
        placeholder="Last Name"
        onInput={(evt) => {
          const { name, value } = evt.target;
          setData({
            ...data,
            [name]: value,
          });
        }}
      />
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
