import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SpaceEvents",
  description: "Um espaço para você ser feliz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-[95%] fixed xl:max-w-screen-2xl">
          <Navbar />
        </div>
        <div className="w-[95%] xl:max-w-7xl">{children}</div>
        <div className="w-[95%] xl:max-w-screen-2xl">
          <Footer />
        </div>
      </body>
    </html>
  );
}
