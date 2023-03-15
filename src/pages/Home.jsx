import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import GetStartedButton from '../components/GetStartedButton';
import Line from '../components/Line';
import Container from '../components/Container';
import Accordion from '../components/Accordion';
import tv from '../assets/tv.png';
const Home = () => {
  return (
    <>
      <Stack
        className="background"
        justifyContent="center"
        alignItems={'center'}
        h={['50vh', '60vh', '85vh']}
      >
        <Box px={4} textAlign={'center'}>
          <Heading as="h1" size={['lg', 'xl', '2xl']}>
            Unlimited movies, TV shows, and more.
          </Heading>
          <Text fontSize={['md', 'lg', '2xl']} my={4}>
            Plans now start at USD2.99/month.
          </Text>
          <Text pb={4} fontSize={['md', 'lg', '2xl']}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
          <GetStartedButton />
        </Box>
      </Stack>
      <Line />
      <Container
        title={`Enjoy on your TV.`}
        content={`Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        imgSrc={tv}
      />
      <Container
        title={`Download your shows to watch offline. TV.`}
        content={`Watch Save your favorites easily and always have something to watch. Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        imgSrc={tv}
        dirRow='row-reverse'
      />
      <Container
        title={`Enjoy on your TV.`}
        content={`Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.`}
        imgSrc={tv}
      />
      <Stack py={4} alignItems={'center'} bg="black" minH={'80vh'}>
        <Heading textAlign={'center'} my={4} as="h1" size={['lg', 'xl', '2xl']}>
          Frequently Asked Questions
        </Heading>
        <Accordion />
        <Text pt={8} textAlign={'center'} fontSize={['md', 'lg']}>
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <GetStartedButton />
      </Stack>
      <Line/>
    </>
  );
};

export default Home;
