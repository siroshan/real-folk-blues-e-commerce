import React from 'react';
import Box from '@mui/material/Box';
import CategoryCard from '../Categorycard/CategoryCard';

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const CategoryCaousel = ({ categories, slidesPerView }) => {
  return (
    <Box width='100%'>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView ? slidesPerView : 1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <CategoryCard category={cat}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CategoryCaousel;
