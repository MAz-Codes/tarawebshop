import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../App';

function CartIcon() {
  const redirect = useNavigate();
  const { cartnum, setCartnum } = useContext(CartContext);

  return (
    <Flex direction={"row"} align="center"  border="none" >
      <IconButton
      onClick={() => redirect("/tarawebshop/cart")}
      color="#718095"
      border="none" 
      bg={"transparent"}
      aria-label='Shopping Cart'
      fontSize={{base:'20px', md: "25", lg:"30"}}
      _hover={{ bg: "transparent", textColor: "#1a1f2c", fontSize:"33"}}
      _focus={{bg: "transparent", textColor: "black", outline: "none", fontSize:'26px'}}
      icon={< FiShoppingCart/>}
      />

      <Text
      borderRadius={"10"}
      border="none"
      opacity="0.7"
      px={{base:'1', md: "1.5", lg:"1.5"}}
      mx="7"
      bg="white"
      position={"absolute"}
      fontWeight={"bold"}
      fontSize={{base:'9', md: "12", lg:"15"}}
      color="black"
      >{cartnum}</Text>
    </Flex>
  )
}

export default CartIcon