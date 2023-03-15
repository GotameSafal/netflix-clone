import {
  Box,
  Button,
  Image,
  Grid,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
const Header = () => {
  const { pathname } = useLocation();
  const authenticated = true;
  return (
    <Grid
      alignItems={'center'}
      templateColumns={pathname === '/watch' ? '1.5fr 3fr 1fr' : '2fr 2fr 2fr'}
      h={['80px']}
    >
      <Box mx="auto">
        <Image h={['40px', '60px', '80px']} src={logo} />
      </Box>
      {pathname === '/watch' && (
        <UnorderedList
          fontSize={['sm', 'md', 'lg']}
          display={['flex']}
          listStyleType={'none'}
        >
          <ListItem
            _hover={{ color: 'rgb(211, 186, 186)' }}
            mx={[2, 4]}
            fontWeight="bold"
          >
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem
            _hover={{ color: 'rgb(211, 186, 186)' }}
            mx={[2, 3]}
            fontWeight="bold"
          >
            <ChakraLink href="#popular">Popular</ChakraLink>
          </ListItem>
          <ListItem
            _hover={{ color: 'rgb(211, 186, 186)' }}
            mx={[2, 3]}
            fontWeight="bold"
          >
            <ChakraLink href="#upcoming">Upcoming</ChakraLink>
          </ListItem>
        </UnorderedList>
      )}
      <Box gridColumn={'3/4'} mx={'auto'}>
        {/* {authenticated ? (
          <Button size={['sm']} colorScheme={'red'}>
            Logout
          </Button>
        ) : (pathname ==='/login' &&
          <Button size={['sm']} colorScheme={'red'}>
            Sign In
          </Button>
        )} */}
        {pathname !== '/login' &&
          (authenticated ? (
            <Button size={['sm']} colorScheme={'red'}>
              Logout
            </Button>
          ) : (
            <Button size={['sm']} colorScheme={'red'}>
              <Link to="/login">Sign In</Link>
            </Button>
          ))}
      </Box>
    </Grid>
  );
};

export default Header;
