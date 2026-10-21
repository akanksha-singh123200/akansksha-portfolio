import Image from "next/image";
import Header from "../component/header";
import Banner from "../component/banner";
import About from "@/component/about";
import Skills from "@/component/skills";
import Contact from "@/component/contact";
import Footer from "@/component/footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}
