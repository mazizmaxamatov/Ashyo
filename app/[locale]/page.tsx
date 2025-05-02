import Products from "@/components/Products/Products";
import BrandCategory from "@/modules/BrandCategory";
import Brands from "@/modules/Brands/index";

import Hero from "@/modules/Hero";
import Naushnik from "@/modules/Naushnik";


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
      <Naushnik/>
      <Products api=".products" title="Oxirgi ko’rgan mahsulotlar"/>
    </>
  );
}
