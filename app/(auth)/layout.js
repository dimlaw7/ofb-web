import "@/app/(with-root-layout)/globals.css";

export const metadata = {
  title: "FoodBasket | Create Your Account",
  description:
    "Register for an account on OFB to access exclusive features. Join our community today and get started",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-openSans">{children}</body>
    </html>
  );
}
