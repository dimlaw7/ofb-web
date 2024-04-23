import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const ProtectedRoute = ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    return <>{children}</>;
  } catch (error) {
    // return (
    //   <h1>
    //     Access Denied! You don't have the necessary permissions to view this
    //     resource because you provided {error.message}
    //   </h1>
    // );
    redirect(`/login`);
  }
};

export default ProtectedRoute;
