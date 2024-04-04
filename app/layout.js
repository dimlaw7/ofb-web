import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Basket",
  description: "Ticket to abundant holiday meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-openSans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
