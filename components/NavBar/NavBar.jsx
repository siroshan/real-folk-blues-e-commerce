import react from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from '../UI/SearchBar';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

const NavBar = () => {
  return (
    <Box position='sticky' width='100%' zIndex='100' left='0px' top='0px' bgcolor='primary.dark' boxShadow='8'>
      <Box px={4} maxWidth={1100} mx='auto'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box p={1}>
            <Image src='/logo.png' layout='fixed' width='100px' height='50px' />
          </Box>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <SearchBar />
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='user profile'
              sx={{ mr: 2 }}
            >
              <PersonIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
