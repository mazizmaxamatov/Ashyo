import Products from '@/components/Products/Products';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const About = () => {
    const t = useTranslations("AbputCantent")
    return (
        <div className="">
            <div className="containers">
                <div className="flex gap-[15px] mt-[11px] mb-[50px]">
                    <div className="flex gap-[10px] items-center">
                        <Link href={"/"} className='text-[#B6BABF] text-[14px] font-normal Bosh sahifa'>{t("about1")}</Link>
                        <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                    </div>
                    <div className=" flex gap-[10px] items-center">
                        <Link href={"/"} className='text-[#B6BABF] text-[14px] font-normal '>{t("about2")}</Link>
                        <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                    </div>
                </div>
                <div className=" flex justify-between ">
                    <div className="w-[374px] bg-[#EBEFF3] rounded-[8px] mb-[87px]">
                        <div className=" mt-[8px] flex flex-col gap-[8px]">
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[36px] mb-[10px]  '>{t("about2")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[36px] mb-[40px]'>{t("about3")}</p>
                            </div>
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[36px] mb-[10px]  '>{t("about4")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[36px] mb-[40px]'>{t("about5")}</p>
                            </div>
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[36px] mb-[10px]  '>{t("about6")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[36px] mb-[40px]'>{t("about7")}</p>
                            </div>
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[-8px] mb-[10px]  '>{t("about8")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[-8px]  mb-[40px]'>{t("about9")}</p>
                            </div>
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[36px] mb-[10px]  '>{t("about10")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[36px] mb-[40px]'>{t("about11")}</p>
                            </div>
                            <div className="max-w-[358px] mx-auto ">
                                <h3 className='text-[#0A1729] font-bold text-[18px] mt-[30px] ml-[36px] mb-[10px]  '>{("about12")}</h3>
                                <p className='text-[14px] font-normal text-[#545D6A] ml-[36px] mb-[80px]'>{t("about13")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[742px] ">
                        <div className="mb-[44px] ">
                            <h1 className='text-[#06172D] font-bold text-[32px] mb-[14px] mt-[-15px]'>{t("about2")}</h1>
                            <div className="max-w-[778px] bg-[#6F73EE] rounded-[10px] flex items-center justify-center">
                                <h3 className='text-[#FFFFFF] text-[150px] font-black pt-[50px] pb-[55px] pl-[171px] pr-[180px]  '>{t("about14")}</h3>
                            </div>
                        </div>
                        <div className="max-w-[742px] mx-auto ">
                            <p className='text-[18px] font-normal text-[#515D6C] pl-[10px]'>{t("about15")}</p>
                            <p className='text-[18px] font-normal text-[#515D6C] pl-[10px] mt-[20px]'>{t("about16")}</p>
                            <p className='text-[18px] font-normal text-[#515D6C] pl-[10px] mt-[20px]'>{t("about17")}
                            </p>
                            <p className='text-[18px] font-normal text-[#515D6C] pl-[10px] mt-[20px]'>{t("about18")}</p>
                        </div>
                        <div className="flex gap-[30px] mt-[31px]">
                            <Image className='w-[24px] h-[24px]' src={"/images/Shareit.png"} alt='Shareit' width={24} height={24} property='' />
                            <Image className='w-[24px] h-[24px]' src={"/images/Print.png"} alt='Print' width={24} height={24} property='' />
                        </div>
                    </div>
                </div>
            </div>
            <Products api=".products" title={t("about19")}/>
        </div>
    )
}

export default About



