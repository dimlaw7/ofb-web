import "@/app/(with-root-layout)/globals.css";

export const metadata = {
  title: "Dashboard | FoodBasket",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
