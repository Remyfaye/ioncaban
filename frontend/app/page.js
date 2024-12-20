import Explore from "@/components/home/Explore";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Second from "@/components/home/Second";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Second />
      <Explore />
      <FAQ />
      <Footer />
    </div>
  );
}
