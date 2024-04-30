import { cloneElement, Children } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const ProtectedRoute = ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    return Children.map(children, (child) => {
      console.log(typeof child.type);
      if (typeof child.type === "function") {
        return cloneElement(child, {
          userData: decoded,
        });
      } else {
        return cloneElement(child);
      }
    });
  } catch (error) {
    // Access Denied! You don't have the necessary permissions to view this
    //  resource because you provided
    redirect(`/login`);
  }
};

export default ProtectedRoute;
