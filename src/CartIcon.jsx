import React from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
function CartIcon() {
  return (
    <Flex direction={"row"} align="center">
        <IconButton
        color="#718095"
        bg={"transparent"}
        aria-label='Shopping Cart'
        fontSize='20px'
        icon={< FiShoppingCart />}
      />
      <Text fontWeight={"bold"} fontSize="13" color="#718095">1</Text>
    </Flex>
  )
}

export default CartIcon