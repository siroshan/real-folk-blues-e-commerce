import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { mockImages } from '../../config/mockData';

const ProductCard = ({ product }) => {
  return (
    <article
      itemProp='itemListElement'
      itemScope
      itemType='https://schema.org/Product'
      className='productCardWrap'
    >
      <Link href='/'>
        <a>
          <Image
            itemProp='image'
            priority
            objectFit='cover'
            objectPosition='center'
            layout='responsive'
            width='100%'
            height='100%'
            src={product.image}
            alt={product.name}
          />
        </a>
      </Link>
      <Stack direction='column' mt={1}>
        <Typography variant='h6' noWrap>
          {product.name}
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='subtitle2' color='textSecondary' noWrap>
            {product.brand}
          </Typography>
          <Button startIcon={<ShoppingCartIcon />}>
            {`USD ${product.price}`}
          </Button>
        </Stack>
      </Stack>
    </article>
  );
};

export default ProductCard;
