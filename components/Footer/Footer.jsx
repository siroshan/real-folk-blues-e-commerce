import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box width='100%' bgcolor='primary.dark'>
      <Box mt={10} maxWidth={1100} p={5} mx='auto'>
        <Stack direction='row' alignItems='flex-start'  justifyContent='space-evenly' spacing={4}>

            <Image
              src='/logo.png'
              layout='fixed'
              width='400px'
              height='200px'
            />

          <Stack direction='column' spacing={2}>
            <Typography variant='h6'>About Us</Typography>
            <Typography variant='h6'>Services</Typography>
            <Typography variant='h6'>Shipping Information</Typography>
            <Typography variant='h6'>FAQ</Typography>
          </Stack>

          <Stack direction='column' spacing={2}>
            <Typography variant='h6'>Contact Us</Typography>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CallIcon color='primary' />
              <Typography variant='h6'>Telephone</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <EmailIcon color='primary' />
              <Typography variant='h6'>E-mail</Typography>
            </Stack>
          </Stack>

        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
