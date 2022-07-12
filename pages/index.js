import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import CategoryCarousel from '../components/CategoryCarousel/CategoryCarousel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'swiper/css';
import ProductCardContainer from '../components/ProductCardContainer/ProductCardContainer';
import { mockBannerImages, categories, products } from '../config/mockData';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box mt={10} maxWidth={1100} mx='auto'>
        <ImageCarousel slidesPerView={4} images={mockBannerImages} />
      </Box>
      <Box mt={10} maxWidth={1100} mx='auto'>
        <Typography variant='h4'>Popular Categories</Typography>
        <Box mt={2}>
          <CategoryCarousel slidesPerView={4} categories={categories} />
        </Box>
      </Box>
      <Box mt={10} maxWidth={1100} mx='auto'>
        <ProductCardContainer products={products} />
      </Box>
      <Footer />
    </>
  );
}
