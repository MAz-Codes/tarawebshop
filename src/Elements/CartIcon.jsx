import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../App';

function CartIcon() {
  const redirect = useNavigate();
  const { cartnum, setCartnum } = useContext(CartContext);

  return (
    <Flex direction={"row"} align="center">
      <IconButton
      onClick={() => redirect("/cart")}
      color="#718095"
      bg={"transparent"}
      aria-label='Shopping Cart'
      fontSize='20px'
      _hover={{ bg: "transparent", textColor: "#1a1f2c"}}
      icon={< FiShoppingCart />}
      />

      <Text
      borderRadius={"10"}
      opacity="0.7"
      px="1"
      mx="8"
      bg="green.300"
      position={"absolute"}
      fontWeight={"bold"}
      fontSize="9"
      color="black"
      >{cartnum}</Text>
    </Flex>
  )
}

export default CartIcon