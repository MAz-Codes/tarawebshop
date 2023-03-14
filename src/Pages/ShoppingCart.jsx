import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Heading,
  Divider,
  HStack,
  Box,
  Card,
  Img,
  Text,
  CardBody,
  Stack,
  Grid
} from '@chakra-ui/react'

import { ItemContext } from '../App'


function ShoppingCart() {
    const { item, setItem } = useContext(ItemContext);

    const totalSum = () => {
        let sum = 0;
        item.forEach((product) => {
          sum += parseFloat(product.price);
        });
        if (sum== 0){
            return "Your cart is empty!"
        }else{
        return sum.toFixed(2); // returns a string with 2 decimal places
      }
    }
    console.log(item)

  return (

    <Box
    as={motion.div}
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 1} }}
    exit={{opacity:0, transition: {duration: 1} }}
    pt="10"
    mx={{ base: '5', lg: '20' }}
    minH="50vh">
      {totalSum()=="Your cart is empty!" ? (<Heading pt="25vh">{totalSum()}</Heading>):(<></>)}
      <Grid
      pb="10"
      minH="20vh"
      templateColumns={{base: "repeat(2, 50%)",
      md: "repeat(4, 25fr)"}}
      gap={2}>
        {item.map((info) => (
            <Card
            bg="#bed4ca"
            margin={2}
            key= {info.id}
            maxWidth={"auto"}
            minWidth="auto"
            borderRadius="lg"
            boxShadow={"2xl"}
            >
                <CardBody>
                    <Img
                    src={info.url}
                    alt={info.alt}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' align="space-between">
                        <Heading size={{base:"sm", lg:"md"}}>{info.title}</Heading>
                        <Text>
                            {info.body}
                        </Text>
                        <Text color='gray.600' fontSize={{base:"small", lg:"md"}}>
                          {info.price} €
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        ))}
      </Grid>
      {totalSum()!=="Your cart is empty!" ?
        (
          <Stack>
            <Divider/>
            <HStack  justifyContent={"right"}>
              <Text >Your total:</Text>
              <Text fontFamily={"RobotoMonoBold"}>{totalSum()} €</Text>
            </HStack>
          </Stack>
        ):(<></>)}
    </Box>
      )
    }

export default ShoppingCart