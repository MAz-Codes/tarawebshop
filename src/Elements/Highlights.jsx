import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
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
import { CartContext } from '../App';

function Highlights() {


  const { cartnum, setCartnum } = useContext(CartContext);

  const add = (item) => {
    setCartnum(cartnum + 1);
    addToCart(item);
  };

    const [infos, setInfos] = useState([
        {id: "1",
         url: 'https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         alt: 'dress',
         title: "White Summer Dress",
         body: "A white summer dress can be the perfect addition to your wardrobe. These sustainable fabrics are not only kind to the environment, but also offer breathable and comfortable options for the hot summer months",
         price: "79,99"
        },

        {id: "2",
         url: 'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
         alt: 'Second Hand',
         title: "FL21 Backpack",
         body: "Faux leather backpack made from 100% rececled materials, including PET plastic recovered from the ocean. Made with love under supervised working conditions with fair pay. Available in multiple colors.",
         price: "121,99"
        },

     ])

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
        {infos.map((info) => (
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

export default Highlights