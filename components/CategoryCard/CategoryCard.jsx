import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <Box
      position='relative'
      sx={{
        backgroundImage: `url(${category.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      width='250px'
      height='250px'
      borderRadius='5px'
    >
      <Box bgcolor='rgba(0,0,0, 0.5)' width='100%' height='100%'>
        <Box position='absolute' top='10px' right='10px'>
          <Typography display='block' variant='h5' color='primary.main'>
            {category.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCard;
