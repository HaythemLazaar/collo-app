import { Container, Flex } from '@chakra-ui/react';

import { Details } from './details';
import { Cart } from './cart';

const Hello = () => {
  return (
    <Container maxW='container.xl' p={0}>
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
