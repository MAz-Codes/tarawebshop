import React from 'react'
import Video from "../assets/take.mp4"
import { Box, Link, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function Hero() {

  const navi = useNavigate();

  return (
    <Box
    bgSize="cover"
    position="relative"
    h={{base:"auto",md:"auto", lg:"auto", xl:"94vh"}}
    align="center"
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          filter: "grayscale(100%) blur(10px)",
        }}
      >
        <source src={Video} type="video/mp4"/>
      </video>
      <Box
      mx={{ base: '5', lg: '20' }}
      maxW="100%"
      position="relative">
        <Heading 
        textAlign={"left"}
        w="100%"
        pt="12vh"
        fontSize="8vw"
        color="#3F524A" 
        >SUSTAINABLE<br/>FASHION
        </Heading>
        <Heading 
        textAlign={"left"}
        w="100%"
        py="5vh"
        fontSize="3vw"
        color="#3F524A" 
        >ONE STEP FURTHER.
        </Heading>
        <Box
        width={{ base: '100%', md: '30%' }}
        py="5vh">
          <Button
          as={Link}
          bg="#81968C"
          textColor={"3e5249"}
          fontWeight="bold"
          px="2.5rem"
          py="3vh"
          maxW="70%"
          width="fit-content"
          rounded="md"
          _hover={{ bg: 'gray.300', textColor: "#1a1f2c",  textDecoration: 'none' }}
          onClick={() => navi('/tarawebshop/catalog')}
            >Explore Catalog
          </Button>
        </Box>
      </Box>
  </Box>
  )
}

export default Hero