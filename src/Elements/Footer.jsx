import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Image,
    Stack,
    Text,
    VStack
  } from '@chakra-ui/react'
  import { useNavigate } from "react-router-dom";
  import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
  import Logo from "../assets/BlackLogo.svg"


  export const Footer = () => {
    const navi = useNavigate();

    return (

    <Container  role="contentinfo" maxW="100%"   >
        <Divider boxShadow={"dark"} mt="5"/>
        <Stack
        direction={{
        base: 'column',
        md: 'row',
        }}
        justify="space-between"
        pt="10" >

            <Stack
            pb="3%"
            mx={{ base: '1', lg: '20' }}
            justify={"space-between"}
            direction={{
                base: 'column-reverse',
                md: 'column',
                lg: 'row',
            }}
            spacing={{
                base: '6',
                md: '8',
                lg: '6',
            }}
            >
                <Image src={Logo} 
                alt="Tara Logo"
                opacity={"80%"} 
                w={{base:"0%", lg:"10%"}} 
                >
                </Image>
                <Stack direction="row" spacing="8">
                    <Stack spacing="4" minW="36" flex="1" >
                    <Text fontSize="lg" fontFamily="RobotoMonoBold" color="subtle">
                        Shop
                    </Text>
                    <Stack  spacing="3" shouldWrapChildren >
                        <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/taraWebshop')}>Home</Button>
                        <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/catalog')}>Catalog</Button>
                    </Stack>
                    </Stack>
                    <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="lg" fontFamily="RobotoMonoBold" color="subtle">
                        Support
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                        <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/about')}>About us</Button>
                        <Button color="#252e36" variant="link" style={{textDecoration: 'none'}} onClick={() => navi('/contact')}>Contact</Button>
                    </Stack>
                    </Stack>
                </Stack>
                <ButtonGroup variant="ghost" opacity={{base:"0%", lg:"100%"}} >
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Instagram"
                            icon={<FaInstagramSquare fontSize="1.25rem" />}
                        />
                        <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
                    </ButtonGroup>
            </Stack>
        </Stack>
      <Divider />
    <Text fontSize="sm" color="#8252e36" py="2">
        &copy; {new Date().getFullYear()} Tara Fashion Inc. All rights reserved.
    </Text>
    </Container>
  )
}
  export default Footer;