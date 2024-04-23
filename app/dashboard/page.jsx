import ProtectedRoute from "@/components/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <h1>Welcome To Dashboard</h1>
    </ProtectedRoute>
  );
};

export default page;
