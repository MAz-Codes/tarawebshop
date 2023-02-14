import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'

  
  export const Navbar= () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
        <Box
        as="section"
        pb={{
          base: '3',
          md: '9',
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
                  <ButtonGroup variant="link"  spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item} style={{textDecoration: 'none'}}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button bg="gray.200">Sign in</Button>
                    <Button bg={"gray.400"}>Sign up</Button>
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