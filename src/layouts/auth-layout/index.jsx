import React from 'react';
import { NavLink } from 'react-router-dom';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import DefaultAuth from './Default';
// Assets
import illustration from './auth-assets/auth.png';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

function SignIn() {
  // Chakra color mode
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue({ bg: 'gray.200' }, { bg: 'whiteAlpha.300' });
  const googleActive = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.200' });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuth illustrationBackground={illustration}>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w='100%'
        mx={{ base: 'auto', lg: '0px' }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: '20px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '20px', md: '10vh' }}
        flexDirection='column'
      >
        <Box me='auto'>
          <Heading color='brand.50' fontSize='36px' mb='10px'>
            Welcome Back
          </Heading>
          <Text mb='36px' ms='4px' color='brand.500' fontWeight='400' fontSize='md'>
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: '100%', md: '420px' }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: 'auto', lg: 'unset' }}
          me='auto'
          mb={{ base: '20px', md: 'auto' }}
        >
          <Button
            fontSize='sm'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            fontWeight='500'
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Sign in with Google
          </Button>
          <Flex align='center' mb='25px'></Flex>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color='brand.400'
              mb='8px'
            >
              Email<Text color='gray.50'>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              fontSize='sm'
              variant='auth'
              mb='24px'
              ms={{ base: '0px', md: '0px' }}
              type='email'
              placeholder='Your Email Address'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='500' color='brand.400' display='flex'>
              Password<Text color='gray.50'>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Your Password'
                mb='24px'
                size='lg'
                type={show ? 'text' : 'password'}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color='brand.50'
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox id='remember-login' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color='brand.400'
                  fontSize='sm'
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <NavLink to='/auth/forgot-password'>
                <Text color='brand.500' fontSize='sm' w='124px' fontWeight='400'>
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <Button variant='solid' fontWeight='500'>
              SIGN IN
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'
          >
            <Text color='brand.500' fontWeight='400' fontSize='14px'>
              Not registered yet?
              <NavLink to='/auth/sign-up'>
                <Text color='brand.50' as='span' ms='5px' fontWeight='500'>
                  Sign up
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
