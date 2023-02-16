/*eslint-disable*/
import React from 'react';
import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  let textColor = useColorModeValue('gray.400', 'white');
  let linkColor = useColorModeValue({ base: 'gray.400', lg: 'white' }, 'white');
  return (
    <Text
      color={textColor}
      textAlign={{
        base: 'center',
        xl: 'start',
      }}
      mb={{ base: '20px', lg: '0px' }}
    >
      {' '}
      &copy; {1900 + new Date().getYear()},
      <Text as='span' fontWeight='500' ms='4px'>
        <Link mx='3px' color={textColor} href='http://localhost:3000' fontWeight='600'>
          colloHQ
        </Link>
      </Text>
    </Text>
  );
}
