import Products from "@/components/Products/Products";
import BrandCategory from "@/modules/BrandCategory";
import Brands from "@/modules/Brands/index";

import Hero from "@/modules/Hero";
import Naushnik from "@/modules/Naushnik";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("PageCantent")
  
  return (
    <>     
      <Hero/>
      <Brands/>
      <Products api="/products" title={t("page1")}/>
      <Products api="/products" title={t("page2")}/>
      <Products api="/products" title={t("page3")}/>
      <BrandCategory/>
      <Products api="/products" title={t("page4")}/>
      <Naushnik/>
      <Products api=".products" title={t("page5")}/>
    </>
  );
}
