import Products from '@/components/Products/Products'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

const Product = () => {
    const t = useTranslations("ProductCantent")
    return (
        <div>
            <div className="containers ">
                <div>
                    <div className="flex gap-[15px] mb-[30px] mt-[12px]">
                        <div className="flex gap-[10px] items-center">
                            <Link href={"/"} className='text-[#B6BABF] text-[14px] font-normal Bosh sahifa'>{t("product1")}</Link>
                            <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                        </div>
                        <div className=" flex gap-[10px] items-center">
                            <Link href={"/Contacts"} className='text-[#B6BABF] text-[14px] font-normal '>{t("product2")}</Link>
                            <span className='text-[#B6BABF] text-[14px] font-normal'>/</span>
                        </div>
                    </div>
                </div>
                <div className="w-72 bg-[#EBEFF3] p-4 rounded-lg space-y-4 mb-[40px]">
                    <div>
                        <p className="font-medium text-[16px] text-[#000000]">{t("product3")} <span className="text-sm">{t("product4")}</span></p>
                        <div className="flex gap-2 mt-2">
                            <div className="flex flex-col mt-[13px]">
                                <span className='text-[12px] font-normal text-[#00000066]'>{t("product5")}</span>
                                <input type="text" placeholder="2 000 000" className="w-[120px] p-2 bg-[#ffffff] text-center py-[10px] mb-[25px] text-[#00000099] font-normal text-[14px] rounded-[5px]" />
                            </div>
                            <div className="flex flex-col mt-[13px]">
                                <span className='text-[12px] font-normal text-[#00000066]'>{t("product6")}</span>
                                <input type="text" placeholder="20 000 000" className="w-[120px] p-2 bg-[#ffffff] text-center py-[10px]  mb-[25px] text-[#00000099] font-normal text-[14px] rounded-[5px]" />

                            </div>
                        </div>
                        <input type="range" className="w-full mt-2" />
                    </div>

                    <div>
                        <p className="font-medium mt-[26px] text-[16px] text-[#000000]">{t("product7")}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Vivo</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Samsung</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Apple</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Tecno</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Nokia</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Oppo</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Xoaimi</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Realmi</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">Huawei</button>
                        </div>
                    </div>

                    <div className='mt-[33px]'>
                        <p className="font-medium text-[16px] text-[#000000]">{t("product8")}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">2 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">3 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">4 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">6 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">8 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">12 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">16 GB</button>
                        </div>
                    </div>

                    <div className='mt-[31px] '>
                        <p className="font-medium text-[16px] text-[#000000]">{t("product9")}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <button className='px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal'>32 GB</button>
                            <button className='px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal'>64 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">128 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">256 GB</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">512 GB</button>
                        </div>
                    </div>

                    <div className='mt-[23px] mb-[90px]'>
                        <p className="font-medium text-[16px] text-[#000000]">{t("product10")}</p>
                        <div className="flex flex-wrap gap-2 mt-2 ">
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">3000 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">3200 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">3600 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">4000 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">4500 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">5000 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">6000 mAh</button>
                            <button className="px-3 py-1 bg-white rounded-[30px] text-[#0A1729] text-[12px] font-normal">7000 mAh</button>
                        </div>
                    </div>
                </div>
            </div>
            <Products api=".products" title={t("product11")}/>
        </div>
    )
}

export default Product