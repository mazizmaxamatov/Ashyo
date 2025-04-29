"use client"
import React, { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css";
import { Navigation } from 'swiper/modules';
import { getProducts } from '@/service/getPraducts';
import { ProductType } from '@/types/ProductType';
import ProductItem from './ProductItem';

const Products:FC<{title:string, api:string}> = ({title, api}) => {
  const { data: products, isLoading } = getProducts(api)

  return (
    <div className="products pb-[80px] ">
      <div className="containers !mb-[50px]">
        <h2 className='text-[#000000] text-[32px] font-bold leading-[130%]'>{title}</h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {isLoading ? "Loading..." : products.map((item: ProductType) => <SwiperSlide><ProductItem item={item}/></SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Products