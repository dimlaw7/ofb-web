import { useRouter } from "next/navigation";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Form3 = ({ data, setData }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  //Function on Form Submit
  const handleChange = async (e) => {
    e.preventDefault();

    //Test input with Regex
    const nameRegex = /^\s*[a-zA-Z]+(?:['-][a-zA-Z]+)*\s*$/;
    const usernameRegex = /^[a-zA-Z0-9_-]*$/;
    if (!nameRegex.test(data.fname)) {
      Swal.fire({
        icon: "error",
        iconColor: "#DC3545",
        title: "Error",
        text: "Firstname contains Invalid Characters",
        confirmButtonColor: "#DC3545",
      });
      return;
    }
    if (!nameRegex.test(data.lname)) {
      Swal.fire({
        icon: "error",
        iconColor: "#DC3545",
        title: "Error",
        text: "Lastname contains Invalid Characters",
        confirmButtonColor: "#DC3545",
      });
      return;
    }
    if (!usernameRegex.test(data.uname)) {
      Swal.fire({
        icon: "error",
        iconColor: "#DC3545",
        title: "Error",
        text: "Username contains Invalid Characters",
        confirmButtonColor: "#DC3545",
      });
      return;
    }

    setLoader((current) => !current); //Show Loader During Request

    const apiResponse = await fetch("api/v1/user/register/biodata", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        uname: data.uname,
        pass: data.pass,
        pass2: data.pass2,
      }),
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
      : Swal.fire({
          icon: "success",
          iconColor: "",
          title: "Registration Complete",
          text: response.msg,
          confirmButtonColor: "#6420AA",
          confirmButtonText: "Go to Dashboard",
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/dashboard");
          }
        });
  };

  return (
    <form className="pt-8" onSubmit={handleChange}>
      <label htmlFor="fname">
        First Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fname"
        id="fname"
        value={data.fname}
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
      <label htmlFor="lname">
        Last Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="lname"
        id="lname"
        value={data.lname}
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
      <label htmlFor="uname">
        Username <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="uname"
        id="uname"
        value={data.uname}
        className="w-full border border-purple-300"
        placeholder="Username"
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
        type="password"
        name="pass"
        id="pass"
        className="w-full border border-purple-300"
        placeholder="Password"
        onInput={(evt) => {
          const { name, value } = evt.target;
          setData({
            ...data,
            [name]: value,
          });
        }}
      />
      <label htmlFor="pass2">
        Confirm Password <span className="text-red-500">*</span>
      </label>
      <input
        type="password"
        name="pass2"
        id="pass2"
        className="w-full border border-purple-300"
        placeholder="Password again"
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

export default Form3;
