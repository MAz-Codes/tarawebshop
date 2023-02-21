import React from 'react'
import { Box,
    Wrap,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Card,
    Img,
    Text,
    CardBody,
    Spacer,
    Stack,
    HStack,
    Flex,
    Grid} from '@chakra-ui/react'

function CardTemplate({infos}) {



  return (
    <Grid 
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)"}}
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
                <Divider />
                <CardFooter justify={"center"}>
                        <Button bg="gray.200" maxWidth={{ base: "100%", md: "80%" }}>
                            Add to cart
                        </Button>
                </CardFooter>
            </Card>
        ))}
    </Grid>
  )
}

export default CardTemplate