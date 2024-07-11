import LoginForm from "@/app/(auth)/_components/LoginForm";
import Sidebar from "@/app/(auth)/_components/Sidebar";
import ReturnHome from "@/components/ReturnHome";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginHeaderLogo from "../_components/LoginHeaderLogo";
import RegisterLink from "../_components/RegisterLink";

export const metadata = {
  title: "FoodBasket | Login",
  description: "Login with your account to access FoodBasket Dashboard.",
};

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    // Render login form if token is not present
    return (
      <div className="flex h-screen items-center justify-center">
        <ReturnHome />
        <div className="left max-h-screen overflow-y-auto px-8 py-8 lg:w-4/12 lg:px-16">
          <LoginHeaderLogo
            title="Account Login"
            desc="Welcome back! Sign In to continue"
          />
          <LoginForm />
          <RegisterLink />
        </div>
        <Sidebar
          icon="/icons/profile-white.svg"
          title="Jump Right Back In"
          paragraph="You are one click away from your profile"
        />
      </div>
    );
  } else {
    // Redirect to dashboard if token is present
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    } catch (err) {
      return (
        <div className="flex items-center">
          <ReturnHome />
          <ReturnHome />
          <div className="left max-h-screen overflow-y-auto px-8 py-8 lg:w-4/12 lg:px-16">
            <LoginHeaderLogo />
            <LoginForm />
            <RegisterLink />
          </div>
          <Sidebar
            icon="/icons/profile-white.svg"
            title="Jump Right Back In"
            paragraph="You are one click away from your profile"
          />
        </div>
      );
    } finally {
      redirect(`/dashboard`);
    }
  }
};

export default page;
