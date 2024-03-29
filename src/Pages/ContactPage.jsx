import React, {useState} from 'react';
import { Box, Heading, Grid, Text, Input, Textarea, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

function ContactPage() {

  const redirect = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Please enter your email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!message) {
      errors.message = 'Please enter a message.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      redirect('/tarawebshop/success');
    }
  };

  return (
    <Box
    as={motion.div}
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 1} }}
    exit={{opacity:0, transition: {duration: 1} }}>
      <Grid
      templateRows={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
      justifyContent="cenetr"
      mx={{ base: '5', lg: '20' }}
      >
        <Heading
        py="12vh"
        h="fit-content"
        textAlign={"left"}
        w="100%"
        fontSize="8vw"
        color="#3F524A"
          >CONTACT US
        </Heading>
        <Box px={{base:"5%",md:"15%",lg:"25%"}}>
          <form onSubmit={handleSubmit}>
            <Input
            placeholder="Your name"
            _placeholder={{color:"gray.600"}}
            value={name}
            onBlur={() => {
                if (!name) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: "Please enter your name.",
                  }));
                }
              }}
            onChange={(event) => setName(event.target.value)}
            mb="4"/>
            {errors.name && <Text fontSize="sm" mt="-2" mb="2"color="red.500">{errors.name}</Text>}
            <Input
            placeholder="Your email"
            _placeholder={{color:"gray.600"}}
            mb="4"
            value={email}
            onBlur={() => {
                if (!email) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "Please enter your email.",
                  }));
                }
              }}
            onChange={(event) => setEmail(event.target.value)} />
            {errors.email && <Text fontSize="sm" mt="-2" mb="2" color="red.500">{errors.email}</Text>}
            <Textarea
            placeholder="Your message"
            _placeholder={{color:"gray.600"}}
            mb="8"
            value={message} 
            onBlur={() => {
                if (!message) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    message: "Please enter a message.",
                  }));
                }
              }}
            onChange={(event) => setMessage(event.target.value)} />
            {errors.message && <Text fontSize="sm" mt="-2" mb="2" color="red.500">{errors.message}</Text>}
            <Button
            bg="#3e5249"
            textColor="#81968C"
            type="submit"
              >Send Message
            </Button>
          </form>
        </Box>
      </Grid>
      <Text fontSize="sm" pt="6vh" px={{ base: '10', md: '40' }}>© 2023 All Rights Reserved. TARA is a registered trademark of TrFashion B.V. Chamber of Commerce number: 12345678. VAT number: NL123456789B01. This website is operated by Random B.V., a company registered in the Netherlands. By accessing this website, you agree to be bound by our terms and conditions and privacy policy. All content on this website, including text, images, graphics, and software, is the property of TrFashion B.V. and is protected by Dutch and international copyright laws.</Text>
    </Box>
  );
}

export default ContactPage;