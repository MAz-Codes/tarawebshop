import React from 'react'
import { useContext } from 'react'
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
import { motion } from 'framer-motion';

import { CartContext } from '../App';
import { ItemContext } from '../App';

function Catalog() {

    const { cartnum, setCartnum } = useContext(CartContext);
    const { item, setItem } = useContext(ItemContext);

    const add = (infos) => {
        setCartnum(cartnum + 1);
        setItem([...item, { id: infos.id, url: infos.url, title: infos.title, price: infos.price,}]);
    };

    const infos= [
        {id: "1",
        url: 'https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'dress',
        title: "White Summer Dress",
        body: "This white dress made from sustainable fabrics can be the perfect addition to your wardrobe. Ideal for hot summer days.",
        price: "49,99"
        },

        {id: "2",
        url: 'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        alt: 'Second Hand',
        title: "Backpack",
        body: "A Faux leather backpack made from 100% PET plastic with enough space for your belongings. Available in multiple colors.",
        price: "79,99"
        },

        {id: "3",
        url: 'https://images.unsplash.com/photo-1512117245022-861aeca0d689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'recycled scarf',
        title: "Schal",
        body: "A scarf made from sustainable materials such as organic cotton or recycled polyester can be a stylish and eco-conscious accessory.",
        price: "39,79"
        },


        {id: "4",
        url: 'https://images.unsplash.com/photo-1512633611077-51bf3c872a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        alt: 'recycled scarf',
        title: "Boots",
        body: "Boots made from recycled rubber or eco-friendly leather alternatives can be both fashionable and environmentally responsible.",
        price: "121,99"
        },

        {id: "5",
        url: 'https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'red jacket',
        title: "Red Jacket",
        body: "This white dress made from sustainable fabrics can be the perfect addition to your wardrobe. Ideal for hot summer days.",
        price: "69,99"
        },

        {id: "6",
        url: 'https://images.unsplash.com/photo-1517125591588-3a29b2182219?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'hat',
        title: "Sun Cap",
        body: "A Faux leather backpack made from 100% PET plastic with enough space for your belongings. Available in multiple colors.",
        price: "17,99"
        },

        {id: "7",
        url: 'https://images.unsplash.com/photo-1518177172598-e4d9ba89a5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'pullover',
        title: "Shoulder-free Pullover",
        body: "A scarf made from sustainable materials such as organic cotton or recycled polyester can be a stylish and eco-conscious accessory.",
        price: "34,79"
        },


        {id: "8",
        url: 'https://images.unsplash.com/photo-1519995150416-0ae3cc5c6470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        alt: 'Light Jacket',
        title: "Light Jacket",
        body: "Boots made from recycled rubber or eco-friendly leather alternatives can be both fashionable and environmentally responsible.",
        price: "92,99"
        },

        {id: "9",
        url: 'https://images.unsplash.com/photo-1507274301514-7de9f124ff54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'Handmade Skirt',
        title: "Handmade Skirt",
        body: "This white dress made from sustainable fabrics can be the perfect addition to your wardrobe. Ideal for hot summer days.",
        price: "75,99"
        },

        {id: "10",
        url: 'https://images.unsplash.com/photo-1504766475134-f0c0c62a5668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'Skirt',
        title: "Jeans Skirt",
        body: "A Faux leather backpack made from 100% PET plastic with enough space for your belongings. Available in multiple colors.",
        price: "44,99"
        },

        {id: "11",
        url: 'https://images.unsplash.com/photo-1484328489804-80399374c9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'jeans',
        title: "Cropped Jeans",
        body: "A scarf made from sustainable materials such as organic cotton or recycled polyester can be a stylish and eco-conscious accessory.",
        price: "34,89"
        },


        {id: "12",
        url: 'https://images.unsplash.com/photo-1507702553912-a15641e827c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'bag',
        title: "Evening Handbag",
        body: "Boots made from recycled rubber or eco-friendly leather alternatives can be both fashionable and environmentally responsible.",
        price: "54,99"
        },

        {id: "13",
        url: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80',
        alt: 'Sunglasses',
        title: "Sunglasses",
        body: "This white dress made from sustainable fabrics can be the perfect addition to your wardrobe. Ideal for hot summer days.",
        price: "18,99"
        },

        {id: "14",
        url: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'Brown Handbag',
        title: "Brown Handbag",
        body: "A Faux leather backpack made from 100% PET plastic with enough space for your belongings. Available in multiple colors.",
        price: "42,69"
        },

        {id: "15",
        url: 'https://images.unsplash.com/photo-1512032915910-144d53456b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'recycled scarf',
        title: "Earings",
        body: "A scarf made from sustainable materials such as organic cotton or recycled polyester can be a stylish and eco-conscious accessory.",
        price: "14,79"
        },


        {id: "16",
        url: 'https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
        alt: 'recycled scarf',
        title: "Black Handbag",
        body: "Boots made from recycled rubber or eco-friendly leather alternatives can be both fashionable and environmentally responsible.",
        price: "21,99"
        }]

    return (
        <Box
        as={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1, transition: {duration: 1} }}
        exit={{opacity:0, transition: {duration: 1} }}
        mx={{ base: '5', lg: '20' }}>
            <Box mt={"12vh"} >
                <Heading
                textAlign={"left"}
                fontSize={{base:"10vw", lg:"8vw"}}
                pb="6vh"
                textColor={"#3e5249"}
                    >OUR SPRING CATALOG
                </Heading>
            </Box>
            <Grid
            templateColumns={{base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)"}}
            gap={"2vh"}>
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

export default Catalog