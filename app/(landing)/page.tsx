import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductSection from "./components/home/products";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <CategoriesSection/>
      <ProductSection/>
    </main>
  );
}
