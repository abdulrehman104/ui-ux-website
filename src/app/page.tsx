import Footer from "@/components/Footer";
import { Navbar, Hero, Feature, Pricing, Cta } from "@/components/main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto ">
        <Feature />
        <Pricing />
        <Cta />
        <Footer/>
      </div>
    </>
  );
}
