"use client"
import { Link } from '@/i18n/navigation';
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderButtomType';

import React from 'react'

const HeaderBottom = () => {

  const { data: categories, isLoading, isError } = getCategories();



  return (
    <div className="containers flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-4 py-4">
      {isLoading ? (
        "Loading..."
      ) : (
        categories.map((item: HeaderCategoriesType) => (
          <Link
            key={item.id}
            href="/"
            className="text-[#545D6A] text-[16px] hover:text-[#134E9B] duration-300"
          >
            {item.name}
          </Link>
        ))
      )}
    </div>
  )
}

export default HeaderBottom




// <div className='flex items-center justify-between containers '>
//   {isLoading ? "Lodding..." : categories.map((item:HeaderCategoriesType) => <Link className='text-[#545D6A] text-[16px] hover:text-[#134E9B] duration-300' key={item.id} href={'/'}>{item.name}</Link>)}
// </div>