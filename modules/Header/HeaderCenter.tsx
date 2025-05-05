import HeaderForm from '@/components/HeaderForm'
import Image from 'next/image'

import React from 'react'
import HeaderCenterActions from './HeaderCenterActions'
import HeaderPopapCategory from './HeaderPopapCategoriy'
import { Link } from '@/i18n/navigation'

const HeaderCenter = () => {
  return (

    <div className="flex relative items-center justify-between containers !py-[30px] ">
      <Link className='flex items-center translate-x-[-6px]' href={'/'}>
        <Image className='w-[48px] h-[48px] scale-[1.5]' src={'/Logo.svg'} alt='Logo' width={48} height={48} priority />
        <span className='translate-x-[-5px] text-[#134E9B] text-[36px] leading-[100%] font-black'>Ashyo</span>
      </Link>
      <HeaderForm />
      <HeaderCenterActions />
      <HeaderPopapCategory />

    </div>

  )
}

export default HeaderCenter


//<div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 containers !py-[20px] md:py-[30px]">
//   <Link className="flex items-center translate-x-[-6px]" href="/">
//     <Image
//       className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] scale-[1.5]"
//       src="/Logo.svg"
//       alt="Logo"
//       width={48}
//       height={48}
//       priority
//     />
//     <span className="ml-2 text-[#134E9B] text-[28px] md:text-[36px] leading-[100%] font-black">
//       Ashyo
//     </span>
//   </Link>
//   <div className="w-full md:w-auto flex-1">
//     <HeaderForm />
//   </div>
//   <div className="flex gap-2">
//     <HeaderCenterActions />
//     <HeaderPopapCategory />
//   </div>
// </div>