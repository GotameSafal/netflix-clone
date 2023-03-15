import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
const ContentsBox = ({ title, content}) => {
  return (
    <Stack
      w={['100%', '100%', '50%']}
      justifyContent="center"
      alignItems={['center', 'center', 'start']}
      h="100%"
      bg="purple"
    >
      <Heading as="h1" size={['lg', 'lg', 'xl']}>
        {title}
      </Heading>
      <Text
        mt={2}
        textAlign={['center', 'center', 'start']}
        fontSize={['md', 'md', 'xl']}
        fontWeight="500"
      >
        {content}
      </Text>
    </Stack>
  );
};

export default ContentsBox;
