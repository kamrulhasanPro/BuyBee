import BestProducts from "@/components/sections/Home/BestProducts";
import ElectronicBrands from "@/components/sections/Home/ElectronicBrands";
import Hero from "@/components/sections/Home/Hero";
import NewArrivals from "@/components/sections/Home/NewArrivals";
import OurProducts from "@/components/sections/Home/OurtProduct";
import TopCategory from "@/components/sections/Home/TopCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategory />
      <ElectronicBrands />
      <BestProducts />
      <NewArrivals />
      <OurProducts />
    </>
  );
}
