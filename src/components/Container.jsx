import React from 'react';
import { Heading, Text, Image, Stack } from '@chakra-ui/react';
import Line from './Line';
const Container = ({ dirRow='row', title, content, imgSrc }) => {
  return (
    <>
      <Stack
        direction={['column','column', dirRow]}
        h={['50vh','55vh','50vh', '70vh']}
        px={['1.8rem', '3rem','3rem', '7rem']}
        py={5}
        bg='black'
      >
        <Stack
          w={['100%','100%', '50%']}
          justifyContent="center"
          alignItems={['center','center', 'start']}
          h="100%"
        >
          <Heading as="h1" size={['lg', 'lg','lg', 'xl']}>
            {title}
          </Heading>
          <Text
            mt={2}
            textAlign={['center','center', 'start']}
            fontSize={['md', 'md','md', 'xl']}
            fontWeight="500"
          >
            {content}
          </Text>
        </Stack>

        <Stack
          align="center"
          justifyContent={'center'}
          w={['100%','100%', '50%']}
          h="100%"
        >
          <Image h={['150px','200px','180px', '200px']} src={imgSrc} />
        </Stack>
      </Stack>
      <Line />
    </>
  );
};

export default Container;
