import Products from "@/components/Products/Products";
import BrandCategory from "@/modules/BrandCategory";
import Brands from "@/modules/Brands/index";
import Header from "@/modules/Header";
import Hero from "@/modules/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>     
      <Hero/>
      <Brands/>
      <Products api="/products" title="Most popular product"/>
      <Products api="/products" title="Product"/>
      <Products api="/products" title="Sale product"/>
      <BrandCategory/>
      <Products api="/products" title="Aksiyadagi tovarlar"/>
      
      <Products api=".products" title="Oxirgi ko’rgan mahsulotlar"/>
    </>
  );
}
