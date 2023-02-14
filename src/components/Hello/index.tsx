import { Container, Flex } from '@chakra-ui/react';

import { Details } from './details';
import { Cart } from './cart';
import Banner from '../reusable/menu/MainMenu';
//import { AppleLogo } from '../reusable/icons/Icons';

const Hello = () => {
  return (
    <Container maxW='container.xl' p={0}>
      <Banner />
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Hello;
