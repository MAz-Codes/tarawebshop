import React from 'react'
import { useNavigate } from "react-router-dom";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import Logo from "../assets/icon.jpg"
import CartIcon from './CartIcon'


export const Navbar= () => {

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const navi = useNavigate();

  return (
    <Box
    bg="#bed4ca"
    position="sticky"
    top="0"
    zIndex="sticky"
    as="section"
    w="100%"
    >
      <Box
      as="nav"
      px="2"
      py="1vh"
      boxShadow="base">
        <Container maxW="100%">
          <HStack
          spacing="10"
          justify="space-between" >
            {isDesktop ? (
              <Flex
              justify="space-between"
              flex="2">
                <Image
                src={Logo}
                onClick={() =>  navi('/')}
                alt="Tara Logo"
                opacity={"1"}
                _hover={{ cursor: 'pointer' }}
                w={{base:"0%", md:"50px", lg:"70px"}}
                h={{base:"0%", md:"50px",lg:"70px"}}
                />
                <ButtonGroup
                variant="link"
                spacing="20"
                pr="2vw">
                  <Button textColor="black"  px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/')}>Home</Button>
                  <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() =>  navi('/catalog')}>Catalog</Button>
                  <Button textColor="black"  borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() => navi('/about')} >About us</Button>
                  <Button textColor="black" borderRadius={"50px"} px="4" style={{textDecoration: 'none'}} onClick={() => navi('/contact')}>Contact</Button>
                </ButtonGroup>
                <CartIcon/>
              </Flex>
            ) : (
              <Flex
              justify={"space-between"}
              flex="2"
              mx="3">
                <Menu >
                  <MenuButton
                  as={IconButton}
                  aria-label='menu'
                  icon={<FiMenu />}
                  variant='ghost'/>
                  <MenuList bg="#bed4ca">
                    <MenuItem bg="#bed4ca" px="4" _hover={{bg:"white"}} style={{textDecoration: 'none'}} onClick={() =>  navi('/')}>Home</MenuItem>
                    <MenuItem bg="#bed4ca"  px="4" _hover={{bg:"white"}}  style={{textDecoration: 'none'}} onClick={() =>  navi('/catalog')}>Catalog</MenuItem>
                    <MenuItem bg="#bed4ca" px="4"  _hover={{bg:"white"}} style={{textDecoration: 'none'}} onClick={() => navi('/about')} >About us</MenuItem>
                    <MenuItem bg="#bed4ca" px="4"  _hover={{bg:"white"}} style={{textDecoration: 'none'}} onClick={() => navi('/contact')}>Contact</MenuItem>
                  </MenuList>
                </Menu>
                <Image
                  onClick={() =>  navi('/')}
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