import React, {useContext} from 'react'
import {
    Heading,
    Divider,
    CardFooter,
    Button,
    Card,
    Img,
    Text,
    CardBody,
    Stack,
    Grid} from '@chakra-ui/react'
import { CartContext } from '../App';

function CatalogTemplate({infos}) {

    const { cartnum, setCartnum } = useContext(CartContext);

  const add = () => {
    setCartnum(cartnum + 1);
  };

return (
    <Grid 
    templateColumns={{base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    xl: "repeat(4, 1fr)"}}
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
                    <Stack mt='6' spacing='3' align="space-between" maxH="100%">
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
                        onClick={add}
                        bg="gray.200"
                        maxWidth={{ base: "100%", md: "80%" }}>
                        Add to cart
                        </Button>
                </CardFooter>
            </Card>
        ))}
    </Grid>
    )
}

export default CatalogTemplate