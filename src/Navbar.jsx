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
import Logo from "./assets/BlackLogo.svg"
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
        as="section"
        w="100%"
        pb={{
          base: '1',
          md: '3',
        }}
      >
        <Box as="nav" bg="bg-surface" px="2" boxShadow="base" >
          <Container
          maxW="100%"
          py={{
            base: '2',
            lg: '3',
          }}
          >
            <HStack spacing="10" justify="space-between">
                   {isDesktop ? (
                <Flex justify="space-between" flex="2">
                  <Image src={Logo} alt="Tara Logo" opacity={"70%"} w={{base:"0%", md:"50px"}} h={{base:"0%", md:"50px"}}></Image>
                  <ButtonGroup variant="link"  spacing="8">
                    <Button textColor="black" borderRadius={"50px"}  px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/')}>Home</Button>
                    <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/catalog')}>Catalog</Button>
                    <Button textColor="black"  borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() => navi('/about')} >About us</Button>
                    <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}}>Contact</Button>
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button borderRadius={"50px"} bg="gray.200">Sign in</Button>
                    <CartIcon></CartIcon>
                  </HStack>
                </Flex>
              ) : (
                <Flex justify={"space-between"} flex="2" mx="3">
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />

                  <Image
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