import React, { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Heading,
  HStack,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const updateInput = e => {
    const { name, value } = e.target;
    setData(prev => {
      return { ...prev, [name]: value };
    });
  };
  const changeIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Stack className="background" align={'center'} h="88vh">
      <Box py={5} px={12} w={['95vw', '60vw', '60vw', '30vw']} bg="black">
        <Heading py={4} as="h2" size={['md', 'lg', 'xl']}>
          Sign In
        </Heading>
        <form className="form">
          <Box borderRadius={3} bg="purple" className="inputfield">
            <input
              onChange={updateInput}
              name="email"
              type="email"
              placeholder=""
              value={data.email}
            />
            <span className="inputText">Email</span>
          </Box>
          <Box
            display={'flex'}
            borderRadius={3}
            className="inputfield"
            mt={3}
            bg="red"
          >
            <input
              onChange={updateInput}
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder=""
              value={data.password}
            />
            <span className="inputText">Password</span>
            {showPassword ? (
              <AiOutlineEye
                style={{ margin: '0px 8px' }}
                size="25px"
                onClick={changeIcon}
              />
            ) : (
              <AiOutlineEyeInvisible
                style={{ margin: '0px 8px' }}
                size="25px"
                onClick={changeIcon}
              />
            )}
          </Box>
          <Button type='submit' w="100%" mt={8} colorScheme={'red'}>
            Submit
          </Button>
        </form>
        <HStack mt={2} justify={'space-between'}>
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Text _hover={{ textDecoration: 'underline' }}>
            <Link to="/">Need help?</Link>
          </Text>
        </HStack>
        <Stack>
          <Text py={4}>
            New to Netflix?
            <Text
              as={'span'}
              mx={1}
              fontWeight={'600'}
              _hover={{ textDecoration: 'underline' }}
            >
              <Link to="/">Sing up now.</Link>
            </Text>
          </Text>
          <Box fontSize={['sm']}>
            <Text mb={3}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Text
                as={'span'}
                px={1}
                _hover={{ textDecoration: 'underline' }}
                color="blue"
              >
                Learn more
              </Text>
            </Text>
            <Text>
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalized
              advertising by Google).
            </Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
