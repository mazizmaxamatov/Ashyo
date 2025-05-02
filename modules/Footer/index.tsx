import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='containers'>
      <div className="mt-[71px] flex justify-between !md:flex-col">
        <div className="mb-[70px]">
          <h3 className='text-[20px] font-bold text-[#000000B2] '>Bizning ijtimoiy tarmoqlarda</h3>
          <div className="flex items-center gap-[10px] mt-[21px] mb-[39.33px]">
            <Image className='w-[44px] h-[40px] ' src={"/images/facebook.png"} alt='f' width={44} height={40} priority />
            <Image className='w-[44px] h-[40px] ' src={"/images/yutube.png"} alt='y' width={44} height={40} priority />
            <Image className='w-[44px] h-[40px] ' src={"/images/telegram.png"} alt='tg' width={44} height={40} priority />
            <Image className='w-[44px] h-[40px] ' src={"/images/twitter.png"} alt='t' width={44} height={40} priority />
            <Image className='w-[44px] h-[40px] ' src={"/images/instagram.png"} alt='i' width={44} height={40} priority />
          </div>
          <h4 className='text-[20px] font-bold text-[#000000B2] mb-[12px]'>Mobil ilovani yuklab oling</h4>
          <div className="flex gap-[12px] mb-[57px]">
            <Image className='w-[188px] h-[66px] ' src={"/images/app.png"} alt='a' width={188} height={66} priority />
            <Image className='w-[204px] h-[66.25px] ' src={"/images/google.png"} alt='g' width={204} height={66.25} priority />
          </div>
          <span className='text-[#00000066] font-normal text-[12px]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</span>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[4px] mb-[18px] '>Menyu</h3>
          <div className="flex-col jus">
            <p className='text-[#000000B2] font-normal text-[16px] '>Ashyo haqida</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Foydalanish shartlari</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Maxfiylik va hafsizlik siyosati</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Mahsulotlarni va tovarlarni <br /> qaytarish siyosati</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Biz bilan aloqa</p>
          </div>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[8px] mb-[13px]'>Aloqa</h3>
          <h2 className='text-[#06172D] font-bold text-[24px] mb-[32px]'>+998 (71) 123-45-67</h2>
          <p className='ml-[4px] text-[#000000B2] font-normal text-[16px]'>Savolingiz bormi?</p>
         
        </div>
      </div>
    </div>
  )
}

export default Footer