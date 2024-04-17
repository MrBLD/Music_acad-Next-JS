import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import Image from "next/image";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">NEXT.js Crash-practice</h1> */}
      <HeroSection/>
      <Featured/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}