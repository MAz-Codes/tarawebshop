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
    console.log(totalSum())
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
      minH="20vh"
      templateColumns={{base: "repeat(5, 20%)",
      md: "repeat(auto, 1fr)"}}
      gap={2}>
        {item.map((info) => (
            <Card
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
                        <Heading size='md'>{info.title}</Heading>
                        <Text>
                            {info.body}
                        </Text>
                        <Text color='gray.600' fontSize='2xl'>
                            € {info.price}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        ))}
      </Grid>
      {totalSum()!=="Your cart is empty!" ?
        (
          <Stack h="20vh" >
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