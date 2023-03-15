import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import Card from './Card';
const MovieContainer = ({id,title, arr=[]}) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/`
  return (
    <Box id={id} bg="black" p={'1rem'}>
      <Heading as="h1" size={['md', 'lg']}>
        {title}
      </Heading>
      <Box  py={5} overflow={'auto'} style={{"::webkitScrollbar":{display:'none'},scrollbarWidth:'none' }} display={'flex'}>
        {arr.map((elem, ind)=>{
          return <Card key={ind} imgSrc={`${imageUrl}${elem.poster_path}`}/>
        })}
      </Box>
    </Box>
  );
};

export default MovieContainer;
