import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardContainer = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((prod, i) => (
        <Grid item xs={1} sm={2} md={3} lg={3} key={prod._id}>
          <ProductCard product={prod}/>
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductCardContainer