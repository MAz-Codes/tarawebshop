import { Image, Stack, HStack, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <Box>
        <HStack align={"center"} mx={{ base: '5', lg: '20' }} gap={2} >
            <Stack textAlign={"left"}>
                <Heading pt="12vh" fontSize="8vw" textColor={"#3e5249"}>ABOUT US</Heading>
                <Text lineHeight={"2"} fontSize={"md"} pt="10">Founded in 2001 in the heart of Europe, our company was born out of a passion for sustainability and fashion. Started as a team of two eco-conscious individuals, we set out to make a difference in the fashion industry by creating sustainable and affordable clothing options.

                Our journey began with a small boutique store in a quaint corner of the city, but our vision for sustainable fashion quickly caught on, and our company grew to what it is today. <br/><br/>We believe that fashion should not come at a cost to our planet, and we are proud to offer stylish and sustainable clothing options that don't break the bank.

                As a company, we are dedicated to reducing our environmental impact by using sustainable materials, such as organic cotton and recycled polyester, and minimizing waste by creating clothing that is made to last. <br/><br/>We believe in fair labor practices and work closely with our suppliers to ensure that everyone involved in our production process is treated with respect and dignity.

                <br/><br/>We are not just a fashion brand, but a movement towards a more sustainable future. We believe that every small step counts, and we are committed to making a positive impact on the world, one piece of clothing at a time. We are excited to continue on this journey and look forward to bringing you more sustainable and affordable fashion options in the years to come.
                </Text>
            </Stack>
            <Image borderRadius={5} objectFit="cover" maxW={{base:"0%", md:"50%"}} src="https://images.unsplash.com/photo-1572577892547-18d319fcece6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"></Image>
        </HStack>
    </Box>
  )
}

export default About