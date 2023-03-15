import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
const ImageBox = ({imgSrc}) => {
  return (
    <Stack
      align="center"
      justifyContent={'center'}
      w={['100%', '100%', '50%']}
      h="100%"
      bg="blue"
    >
      <Image h={['150px', '150px', '200px']} src={imgSrc} />
    </Stack>
  );
};

export default ImageBox;
