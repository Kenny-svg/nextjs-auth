import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/app/component/defaultLayout/Footer";
import NavBar from "@/app/component/defaultLayout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
