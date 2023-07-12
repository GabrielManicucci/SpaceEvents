import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gaston Eventos",
  description: "Um espaço para vocÊ ser feliz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="w-11/12">
          <Navbar />
        </div>
        <div className="w-11/12">{children}</div>
        <div className="w-11/12">
          <Footer />
        </div>
      </body>
    </html>
  );
}
