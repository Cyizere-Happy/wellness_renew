import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import CustomizeMassage from "@/components/sections/CustomizeMassage";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CustomizeMassage />
        <ServicesCarousel />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
