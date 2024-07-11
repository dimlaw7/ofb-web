import Link from "next/link";

const RegisterLink = () => {
  return (
    <div className="mt-4">
      <p className="text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="font-bold text-purp">
          Register
        </Link>
      </p>
    </div>
  );
};

export default RegisterLink;
