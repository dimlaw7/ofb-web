import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import Sidebar from "@/components/auth/Sidebar";
import ReturnHome from "@/components/ReturnHome";
import LoginForm from "@/components/auth/LoginForm";

const page = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    // Render login form if token is not present
    return (
      <div className="flex items-center">
        <ReturnHome />
        <div className="left max-h-screen w-4/12 overflow-y-auto px-16 py-8">
          <h1 className="text-center text-4xl font-extrabold leading-[70px]">
            Account Login
          </h1>
          <p className="text-center text-[#00000080]">
            Welcome back! Sign In to continue
          </p>
          <LoginForm />
          <div className="mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/register" className="font-bold text-purp">
                Register
              </a>
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
                <a href="/register" className="font-bold text-purp">
                  Register
                </a>
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
