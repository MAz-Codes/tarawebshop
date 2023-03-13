import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../App'
import { Heading,
  Divider,
  Box,
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
        


          <Grid
          templateColumns={{base: "repeat(5, 20%)",
          md: "repeat(auto, 1fr)"}}
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
                </Card>
            ))}
    </Grid>
        </Box>
      )
    }

export default ShoppingCart