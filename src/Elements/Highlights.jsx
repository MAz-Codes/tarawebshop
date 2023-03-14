import React, { useContext }from 'react'
import { Heading,
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

import { CartContext } from '../App';
import { ItemContext } from '../App';

function Highlights() {


  const { cartnum, setCartnum } = useContext(CartContext);
  const { item, setItem } = useContext(ItemContext);

  const add = (infos) => {
    setCartnum(cartnum + 1);
    setItem([...item, { id: infos.id, url: infos.url, title: infos.title, price: infos.price,}]);
  };

  const infos = [
    {id: "dress",
      url: 'https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'dress',
      title: "White Summer Dress",
      body: "A white summer dress can be the perfect addition to your wardrobe. These sustainable fabrics are not only kind to the environment, but also offer breathable and comfortable options for the hot summer months",
      price: "79,99"
    },

    {id: "f21",
      url: 'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      alt: 'Second Hand',
      title: "FL21 Backpack",
      body: "Faux leather backpack made from 100% rececled materials, including PET plastic recovered from the ocean. Made with love under supervised working conditions with fair pay. Available in multiple colors.",
      price: "121,99"
    },

    ]

    return (
      <Box
      pt="5vh"
      mx={{ base: '5', lg: '20' }}>
        <Heading
        textColor={"#3e5249"}
        pt="3vh"
        pb="6vh"
          >SEASON HIGHLIGHTS
        </Heading>
        <Grid
        templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
        gap={2}>
          {infos.map((info) => (
            <Card
            bg="#bed4ca"
            margin={2}
            key= {info.id}
            maxWidth={"auto"}
            minWidth="auto"
            borderRadius="lg"
            boxShadow={"2xl"}>
              <CardBody borderRadius="xl">
                  <Img
                  src={info.url}
                  alt={info.alt}
                  borderRadius='lg'/>
                  <Stack
                  mt='6'
                  spacing='3'
                  align="space-between">
                      <Heading 
                      size='md'
                          >{info.title}
                      </Heading>
                      <Text>
                          {info.body}
                      </Text>
                      <Text
                      color='gray.600'
                      fontSize='2xl'>
                          € {info.price}
                      </Text>
                  </Stack>
              </CardBody>
              <CardFooter justify={"center"}>
                  <Button
                  onClick={()=> add(info)}
                  bg="#81968C"
                  _hover={{ bg: 'gray.300', textColor: "#1a1f2c"}}
                  maxWidth={{ base: "100%", md: "80%" }}
                    >Add to cart
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    )
  }

export default Highlights