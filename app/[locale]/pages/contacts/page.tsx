import Products from '@/components/Products/Products'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

const Contacts = () => {
    const t =useTranslations("ContactCantent")
    return (
        <div>
            <div className="containers">
                <div className="flex gap-[15px] mb-[30px] mt-[12px]">
                    <div className="flex gap-[10px] items-center">
                        <Link href={"/"} className='text-[#B6BABF] text-[14px] font-normal Bosh sahifa'>{t("contact1")}</Link>
                        <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                    </div>
                    <div className=" flex gap-[10px] items-center">
                        <Link href={"/Contacts"} className='text-[#B6BABF] text-[14px] font-normal '>{t("contact2")}</Link>
                        <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#0A1729] font-bold text-[32px] mb-[16px]'>{t("contact2")}</h1>
                    <p className='max-w-[771px] text-[#545D6A] font-normal text-[16px] mb-[35px]'>{t("contact3")}</p>
                </div>
                <div>
                    <form>
                        <div className="flex gap-[30px]">
                            <div className="left">
                                <label className='flex flex-col'>
                                    <span className='text-[12px] font-normal text-[#848B93] ml-[12px] mb-[4px]'>{t("contact4")}</span>
                                    <input className='bg-[#EBEFF3] w-[330px] h-[56px] rounded-[6px] mb-[30px]' type="text" />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-[12px] font-normal text-[#848B93] ml-[12px] mb-[4px]'>{t("contact5")}</span>
                                    <input className='bg-[#EBEFF3] w-[330px] h-[56px] rounded-[6px]' type="text" />
                                </label>
                            </div>
                            <div className="right">
                                <label className='flex flex-col'>
                                    <span className='text-[12px] font-normal text-[#848B93] ml-[12px] mb-[4px]'>{t("contact6")}</span>
                                    <input className='bg-[#EBEFF3] w-[330px] h-[56px] rounded-[6px] mb-[30px]' type="tel" />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-[12px] font-normal text-[#848B93] ml-[12px] mb-[4px]'>{t("contact7")}</span>
                                    <input className='bg-[#EBEFF3] w-[330px] h-[56px] rounded-[6px]' type="email" />
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <label className='mt-[30px] flex flex-col'>
                                <span className='text-[12px] font-normal text-[#848B93] ml-[9px] mb-[5px]'>{t("contact8")}</span>
                                <input className='w-[690px] h-[130px] bg-[#EBEFF3]' type="text" />
                            </label>
                            <button className='text-[#ffffff] font-normal text-[16px] bg-[#15509E] py-[18px] px-[313.5px] mt-[30px] mb-[114px] rounded-[6px] '>{t("contact9")}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Products api=".products" title={t("contact10")}/>
        </div>
    )
}

export default Contacts