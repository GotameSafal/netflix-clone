import React, { useRef, useState } from 'react';
import { Box, Button} from '@chakra-ui/react';
import { AiOutlineRight } from 'react-icons/ai';

const GetStartedButton = () => {
  const box = useRef();
  const [val, setVal] = useState('');
  const inputField = () => {
    box.current.focus();
  };
  const updateValue = e => {
    setVal(e.target.value);
  };
  const onSubmit = () => {
    if (box.current.value === '') {
      box.current.focus();
    }
  };
  return (
    <Box
      justifyContent={'center'}
      display={'flex'}
      flexDirection={['column', 'row']}
      alignItems="center"
    >
      <Box
        display={'flex'}
        pos={'relative'}
        bg="blackAlpha.700"
        borderRadius={5}
        p={'25px 0px 15px 20px'}
        w={['90vw', '60vw', '50vw', '30vw']}
        className="form"
        onClick={() => inputField()}
        textAlign="center"
        border={'1px solid white'}
      >
        <input
          ref={box}
          placeholder=" "
          type="text"
          name="email"
          value={val}
          onChange={updateValue}
          className="inputbox"
        />
        <label className="input-label">Email address</label>
      </Box>
      <Button
        mt={[2, 0]}
        ms={1}
        fontSize={'lg'}
        h={['40px', '65px']}
        borderRadius={2}
        colorScheme={'red'}
        rightIcon={<AiOutlineRight />}
        onClick={onSubmit}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default GetStartedButton;
