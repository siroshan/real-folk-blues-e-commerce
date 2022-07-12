import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageCarousel = ({slidesPerView, images}) => {
  return (
    <div className='imgCarouselWrap'>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView? slidesPerView: 1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              priority
              objectFit='cover'
              objectPosition='center'
              layout='responsive'
              width='100%'
              height='100%'
              src={image}
              alt='instrument images'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel