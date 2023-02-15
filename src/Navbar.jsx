import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Image,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import Logo from "./assets/BlackLogo.svg"
  import CartIcon from './CartIcon'
  export const Navbar= () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
        <Box
        as="section"
        pb={{
          base: '1',
          md: '3',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow="sm" >
          <Container
          maxW="100%"
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="10" justify="space-between">
                   {isDesktop ? (
                <Flex justify="space-between" flex="2">
                  <Image src={Logo} alt="Tara Logo" opacity={"70%"} w={{base:"0%", md:"50px"}} h={{base:"0%", md:"50px"}}></Image>
                  <ButtonGroup variant="link"  spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item} style={{textDecoration: 'none'}}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button bg="gray.200">Sign in</Button>
                    <CartIcon></CartIcon>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
    </Box>
    )
  }

  export default Navbar;