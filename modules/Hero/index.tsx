"use client"

import React, { useState } from 'react';
import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { getBanners } from '@/service/gerBanners';
import { BannersType } from '@/types/BannersType';
import Button from '@/components/Button';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';
import { getCookie } from 'cookies-next';

const Hero = () => {
    const { data: banners } = getBanners();
     const [token, setToken] = useState(getCookie("NEXT_TOKEN") || false)
     console.log(token);
     

    return (
        <div className="bg-[#F3F0F0]">
            <div className="hero containers">
                <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className='mySwiper mt-5'
                >
                    {banners.map((item: BannersType, idx: number) => (
                        <SwiperSlide key={idx}>
                            <div className="w-[60%]">
                                <h2 className='mb-[10px] text-[44px] font-black'>{item.name}</h2>
                                <p className='text-[#545D6A] mb-[22px]'>{item.description}</p>
                                <Button title='Batafsil' />
                            </div>
                            <Image
                                className='absolute w-[500px] h-[600px] bottom-0 object-contain right-0'
                                src={`${IMG_API}/${item.image}`}
                                alt='Render Img'
                                width={500}
                                height={600}
                                priority
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>


    )
}

export default Hero;
