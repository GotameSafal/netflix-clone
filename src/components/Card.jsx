import { Image } from '@chakra-ui/react';
import React from 'react';

const Card = ({ imgSrc }) => {
  return (
    <Image
      _hover={{ transform: 'translateY(-12px)' }}
      transition="transform 0.5s"
      src={imgSrc}
      minW="200px"
      me={3}
    />
  );
};

export default Card;
