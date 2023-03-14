import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Image,
    Stack,
    Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

import Logo from "../assets/BlackLogo.svg"


  export const Footer = () => {

    const navi = useNavigate();

    return (

    <Container
    role="contentinfo"
    maxW="100%"
    mt="12vh">
        <Divider boxShadow={"dark"} />
        <Stack
        direction={{
        base: 'column',
        md: 'row'}}
        justify="space-between"
        pt="10">
            <Stack
            pb="3%"
            mx={{ base: '1', lg: '20' }}
            justify={"space-between"}
            direction={{base: 'column-reverse',md: 'column',lg: 'row'}}
            spacing={{base: '6',md: '8',lg: '6'}}>
                <Image
                src={Logo} 
                alt="Tara Logo"
                opacity={"80%"} 
                w={{base:"0%", lg:"10%"}}>
                </Image>
                <Stack
                direction="row"
                spacing="8">
                    <Stack
                    spacing="4"
                    minW="36"
                    flex="1" >
                        <Text
                        fontSize="lg"
                        fontFamily="RobotoMonoBold"
                        color="subtle"
                            >Shop
                        </Text>
                        <Stack
                        spacing="3"
                        shouldWrapChildren>
                            <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop')}>Home</Button>
                            <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop/catalog')}>Catalog</Button>
                        </Stack>
                    </Stack>
                    <Stack
                    spacing="4"
                    minW="36"
                    flex="1">
                        <Text
                        fontSize="lg"
                        fontFamily="RobotoMonoBold"
                        color="subtle"
                            >Support
                        </Text>
                        <Stack
                        spacing="3"
                        shouldWrapChildren>
                            <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop/about')}>About us</Button>
                            <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/tarawebshop/contact')}>Contact</Button>
                        </Stack>
                    </Stack>
                </Stack>
                <ButtonGroup
                variant="ghost"
                opacity={{base:"0%", lg:"100%"}}>
                    <IconButton
                    color="gray.700"
                    as="a"
                    href="https://instagram.com/"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram"
                    icon={<FaInstagramSquare fontSize="1.25rem" />}
                    _hover={{backgroundColor:"transparent", color:"#833AB4"}}
                    />
                    <IconButton
                    as="a"
                    href="https://facebook.com/"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Facebook"
                    icon={<FaFacebook fontSize="1.25rem" />}
                    _hover={{backgroundColor:"transparent", color:"#4267B2"}}
                    />
                    <IconButton
                    as="a"
                    href="https://twitter.com/"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Twitter"
                    icon={<FaTwitter fontSize="1.25rem" />}
                    _hover={{backgroundColor:"transparent", color:"#1DA1F2"}}
                    />
                </ButtonGroup>
            </Stack>
        </Stack>
        <Divider />
        <Text
        fontSize="sm"
        color="#8252e36"
        py="2">
            &copy; {new Date().getFullYear()} Tara Fashion Inc. All rights reserved.
        </Text>
    </Container>
  )
}
  export default Footer;