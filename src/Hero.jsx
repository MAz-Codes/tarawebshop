import { Box, Link, Heading, Flex, Text, Button } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1567631643547-67a2dd59f266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      borderRadius={"3xl"}
      p={6}
      mx={{ base: '5', lg: '20' }}
    >

      <Box margin="0 auto" maxW="64rem" py={{ base: '1rem', lg: '8rem' }} >
        <Heading as="h2" fontSize={{ base: '2.25rem', lg: '3rem' }}  color="#fff" maxW={{ base: '100%', md: '45%' }}>
          Taking Sustainable Fashion To The Next Level.
        </Heading>
        <Box
          pr={{ base: 0, lg: 5 }}
          width={{ base: '100%', md: '30%' }}
          mb={{ base: '1rem', lg: '0' }}
        >
          <Text mb="0.5rem" color="#fff">
            Find sustainable and fairtrade fashion
          </Text>
          <Button
            as={Link}
            bg="#fff"
            color="#000000"
            fontWeight="bold"
            px="2.5rem"
            py="1.5rem"
            width="full"
            border="2px solid #fff"
            rounded="md"
            _hover={{ bg: 'gray.300', textDecoration: 'none' }}
          >
            Explore Catalog
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;