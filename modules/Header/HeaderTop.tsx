"use client"
import { LocationIcon } from '@/assets/icons'

import React, { useEffect, useState } from 'react'
import { HeaderTopStyle } from './styles'
import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"



const HeaderTop = () => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("HeaderTopContent")
  const [lang, setLang] = useState<"uz" | "ru" | "en" | any>(getCookie("NEXT_LOCALE") || "uz")

  function changeLang(value: string) {
    setLang(value)
    router.push(pathname, { locale: value });
  }
  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE");
    if (locale === "uz" || "ru" || locale === "en") {
      setLang(locale);
    }
  }, [])

  return (
    <HeaderTopStyle>
      <div className="containers header-top flex flex-col md:flex-row items-center justify-between gap-4 py-2">
        <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <Link href="/">
            <div className="flex items-center gap-1">
              <LocationIcon />
              <span>{t("tashkent")}</span>
            </div>
          </Link>
          <Link href="/">{t("about-us")}</Link>
          <Link href="/">{t("products")}</Link>
          <Link href="/">{t("contacts")}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="tel:+998711234567" className="text-[15px]">
            +998 (71) 123-45-67
          </Link>
          <Select onValueChange={changeLang} defaultValue={lang}>
            <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] text-[#545D6A]">
              <SelectValue placeholder="Uz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="rounded-[5px] bg-[#ffffff]">
                <SelectItem value="uz" className="hover:bg-[#134E9B] hover:text-white">Uz</SelectItem>
                <SelectItem value="ru" className="hover:bg-[#134E9B] hover:text-white">Ru</SelectItem>
                <SelectItem value="en" className="hover:bg-[#134E9B] hover:text-white">En</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </HeaderTopStyle>

  )
}

export default HeaderTop







 // <HeaderTopStyle>
    //   <div className="containers header-top">
    //     <nav>
    //       <Link href={"/"}>
    //         <LocationIcon />
    //         <span>{t("tashkent")}</span>
    //       </Link>
    //       <Link href={"/"}>{t("about-us")}</Link>
    //       <Link href={"/"}>{t("products")}</Link>
    //       <Link href={"/"}>{t("contacts")}</Link>
    //     </nav>
    //     <div>
    //       <Link href={'tel:+998711234567'}>+998 (71) 123-45-67</Link>
    //       <Select onValueChange={changeLang} defaultValue={lang}>
    //         <SelectTrigger className="w-[65px] border-none shadow-none placeholder:text-[15px] text-[#545D6A] ">
    //           <SelectValue placeholder="Uz" />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectGroup className='rounded-[5px] bg-[#ffffff]'>
    //             <SelectItem className='hover:bg-[#134E9B] hover:text-[#ffffff]' value="uz">Uz</SelectItem>
    //             <SelectItem className='hover:bg-[#134E9B] hover:text-[#ffffff]'  value="ru">Ru</SelectItem>
    //             <SelectItem className='hover:bg-[#134E9B] hover:text-[#ffffff]'  value="en">En</SelectItem>
    //           </SelectGroup>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //   </div>
    // </HeaderTopStyle>