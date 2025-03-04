"use client";
import { AppContext } from "@/AppContext";
import Explore from "@/components/home/Explore";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Second from "@/components/home/Second";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Home() {
  // const router = useRouter();
  // const { login } = useContext(AppContext);

  // if (login === false) {
  //   router.push("/signup");
  // }
  return (
    <div className="pt-[55px]">
      <Hero />
      <Second />
      <Explore />
      <FAQ />
      <Footer />
    </div>
  );
}
