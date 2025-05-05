import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Naushnik = () => {
    const t = useTranslations("NaushnikCantent")
  return (
    <div className="mb-[140px] mt-[40px]">
        <div className="containers ">
            <div className="realitive h-[420px]  flex justify-between bg-[#282828]">
                <div className="abcolute ">
                    <Image className='w-[518px] h-[493] ml-[64px] ' src={"/images/Naushni.png"} alt='Naushni img' width={518} height={493}/>
                </div>
                <div className="mt-[90px] mr-[93px]">
                    <h3 className='w-[438px] text-[32px] font-semibold leading-0% text-[#ffffff] md:hidden'>{t("naushkik1")}</h3>
                    <Button  extrStyle='bg-[#ffffff] mt-[21px] font-medium !text-[#111111] text-[16px] ' title={t("naushkik2")}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Naushnik

