"use client"
import { IMG_API } from '@/hooks/getEnv'
import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderButtomType'
import Image from 'next/image'
import React from 'react'
import "./style.css"

const BrandCategory = () => {
    const { data: categories } = getCategories()
    console.log(categories);
    
    return (
        <div className="containers !pb-[101px] brand-category-wrapper">
            {categories.map((item: HeaderCategoriesType) => (
                <div key={item.id} className="brand-category-item">
                    <Image className='w-[343px] h-[254px] ' src={`${IMG_API}/${item.image}`} alt='img' width={343} height={254} priority />
                </div>
            ))}

        </div>
    )
}

export default BrandCategory