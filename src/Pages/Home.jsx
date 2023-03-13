import { Box } from '@chakra-ui/react'
import '../App.css'
import Hero from '../Elements/Hero'
import Highlights from '../Elements/Highlights'
import { motion } from 'framer-motion'

function Home() {

  return (
    <Box
    as={motion.div}
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 1} }}
    exit={{opacity:0, transition: {duration: 1} }}>
        <Hero />
        <Highlights />
    </Box>
  )
}

export default Home
