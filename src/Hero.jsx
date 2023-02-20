import React from 'react'
import Video from "./assets/take.mp4"
import { Box, Link, Divider, Heading, Text, Button } from '@chakra-ui/react'

function Hero() {
  return (
    <Box
    bgSize="cover"
    position="relative"
    mx={{ base: '2', lg: '1' }}
    align="center"
    p={6}
    >
  <video
    
    autoPlay
    muted
    loop
    style={{
      borderRadius: "30px",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.5,
      filter: "grayscale(100%)"
    }}
  >
    <source src={Video} type="video/mp4"/>

  </video>
  <Box margin="0 auto" maxW="64rem" py={{ base: '1rem', lg: '8rem' }} position="relative" >
        <Heading as="h2" fontSize={{ base: '2.25rem', lg: '3rem' }}  color="#1a1f2c" maxW={{ base: '100%', md: '45%' }}>
          Taking Sustainable Fashion To The Next Level.
        </Heading>
        <Box
          pr={{ base: 0, lg: 5 }}
          width={{ base: '100%', md: '30%' }}
          mb={{ base: '1rem', lg: '0' }}
        >
          <Text mb="0.5rem" color="#1a1f2c">
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
            rounded="md"
            _hover={{ bg: 'gray.300', textColor: "#1a1f2c",  textDecoration: 'none' }}
          >
            Explore Catalog
          </Button>
        </Box>
      </Box>
  </Box>
  )
}

export default Hero