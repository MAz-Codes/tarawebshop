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
  import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
  import Logo from "./assets/BlackLogo.svg"


  export const Footer = () => (
    <Container  role="contentinfo" maxW="100%"   >
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
                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                        Product
                    </Text>
                    <Stack spacing="3" shouldWrapChildren >
                        <Button variant="link">How it works</Button>
                        <Button variant="link">Pricing</Button>
                        <Button variant="link">Use Cases</Button>
                    </Stack>
                    </Stack>
                    <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="sm" fontWeight="semibold" color="subtle">
                        Legal
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                        <Button variant="link">Privacy</Button>
                        <Button variant="link">Terms</Button>
                        <Button variant="link">License</Button>
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
    <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Tara Fashion Inc. All rights reserved.
    </Text>
    </Container>
  )

  export default Footer;