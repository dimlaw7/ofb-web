"use client";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { useState } from "react";
const Form1 = ({ data, setData, setActiveForm }) => {
  const [loader, setLoader] = useState(false);

  const handleChange = async (e) => {
    e.preventDefault();
    setLoader((current) => !current); //Show Loader During Request

    const apiResponse = await fetch("api/v1/user/register/verify_email", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    });
    const response = await apiResponse.json();

    setLoader((current) => !current); //Hide Loader After Response
    response.status === "error"
      ? Swal.fire({
          icon: "error",
          iconColor: "#DC3545",
          title: "Error",
          text: response.msg,
          confirmButtonColor: "#DC3545",
        })
      : setActiveForm((current) => current + 2); //Move to Next Form on Success
  };

  return (
    <form className="pt-8" onSubmit={handleChange}>
      <label htmlFor="email">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.email}
        className="w-full border border-purple-300"
        onChange={(evt) =>
          setData({
            ...data,
            email: evt.target.value,
          })
        }
        required
      />
      <button
        type="submit"
        disabled={data.email ? "" : "disabled"}
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

export default Form1;
