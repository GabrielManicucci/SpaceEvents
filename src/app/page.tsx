import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeadLine from "./components/home/Headline";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full mt-32">
      <HeadLine />
      <About />
      <Contact />
    </main>
  );
}
