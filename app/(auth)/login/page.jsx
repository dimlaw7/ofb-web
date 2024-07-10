import LoginForm from "@/app/(auth)/login/_components/LoginForm";
import Sidebar from "@/components/auth/Sidebar";
import ReturnHome from "@/components/ReturnHome";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

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
          <div className="flex justify-center">
            <Image
              src="/images/ofb.jpg"
              height={100}
              width={100}
              alt="Image Logo"
            />
          </div>
          <h1 className="text-center text-2xl font-extrabold leading-[70px] sm:text-4xl sm:leading-[70px]">
            Account Login
          </h1>
          <p className="text-center text-sm text-[#00000080] lg:text-base">
            Welcome back! Sign In to continue
          </p>
          <LoginForm />
          <div className="mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="font-bold text-purp">
                Register
              </Link>
            </p>
          </div>
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
          <div className="left max-h-screen w-4/12 overflow-y-auto px-16 py-8">
            <h1 className="text-center text-4xl font-extrabold leading-[70px]">
              Account Login
            </h1>
            <p className="text-center text-[#00000080]">
              Welcome back! Sign In to continue {err.message}
            </p>
            <LoginForm />
            <div className="mt-4">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="font-bold text-purp">
                  Register
                </Link>
              </p>
            </div>
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
