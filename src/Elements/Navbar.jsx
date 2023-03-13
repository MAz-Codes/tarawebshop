import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import Logo from "../assets/icon.jpg"
import CartIcon from './CartIcon'
import { useNavigate } from "react-router-dom";


export const Navbar= () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const navi = useNavigate();

  return (
      <Box
      bg={"#bed4ca"}
      position="sticky"
      top="0"
      zIndex="sticky"
      as="section"
      w="100%"
    >
      <Box as="nav" px="2" py="1vh" boxShadow="base" >
        <Container
        maxW="100%"
       
        >
          <HStack spacing="10" justify="space-between" >
                 {isDesktop ? (
              <Flex justify="space-between" flex="2">
                <Image
                src={Logo}
                onClick={() =>  navi('/taraWebshop')}
                alt="Tara Logo"
                opacity={"1"}
                _hover={{ cursor: 'pointer' }}
                w={{base:"0%", md:"50px", lg:"70px"}}
                h={{base:"0%", md:"50px",lg:"70px"}}
                />
                <ButtonGroup variant="link" spacing="20" pr="2vw">
                  <Button textColor="black"  px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/tarawebshop')}>Home</Button>
                  <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/tarawebshop/catalog')}>Catalog</Button>
                  <Button textColor="black"  borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop/about')} >About us</Button>
                  <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop/contact')}>Contact</Button>
                </ButtonGroup>
                <CartIcon/>
              </Flex>
            ) : (
              <Flex justify={"space-between"} flex="2" mx="3">
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />

                <Image
                   onClick={() =>  navi('/tarawebshop')}
                   _hover={{ cursor: 'pointer' }}
                  src={Logo}
                  alt="Tara Logo"
                  opacity={"90%"}
                  w="10%">
                </Image>

                <CartIcon></CartIcon>
              </Flex>
            )}
          </HStack>
        </Container>
      </Box>
  </Box>
  )
}

export default Navbar;