import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../App'
import { Heading,
  Divider,
  Box,
  CardFooter,
  Button,
  Card,
  Img,
  Text,
  CardBody,
  Stack,
  Grid
} from '@chakra-ui/react'


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
  return (

        <Box
        pt="10"
        mx={{ base: '5', lg: '20' }}
        >
          <Divider boxShadow={"dark-lg"}/>
          <Heading p="6">Season Highlights</Heading>
          <Grid
    templateColumns={{base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)"}}
    gap={2}
    >
        <Text>{totalSum()}</Text>
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
                <Divider color={"gray.300"}  />
                <CardFooter justify={"center"}>
                        <Button
                        onClick={()=> add(info)}
                        _hover={{ bg: 'gray.300', textColor: "#1a1f2c"}}
                        bg="gray.200"
                        maxWidth={{ base: "100%", md: "80%" }}>
                        Add to cart
                        </Button>
                </CardFooter>
            </Card>
        ))}
    </Grid>
        </Box>
      )
    }

export default ShoppingCart