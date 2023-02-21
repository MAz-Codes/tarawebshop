import React from 'react'
import { useState } from 'react'
import { Box,
    Heading,
    Spacer,
    Divider
} from '@chakra-ui/react'
import CardTemplate from './CardTemplate'


function Highlights() {
    const [infos, setInfos] = useState([
        {id: "1",
         url: 'https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
         alt: 'dress',
         title: "White Summer Dress",
         body: "A white summer dress can be the perfect addition to your wardrobe. These sustainable fabrics are not only kind to the environment, but also offer breathable and comfortable options for the hot summer months",
         price: "79,99"
        },

        {id: "2",
         url: 'https://images.unsplash.com/photo-1475180429745-7bdddbdf4e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
         alt: 'Second Hand',
         title: "FL21 Backpack",
         body: "Faux leather backpack made from 100% rececled materials, including PET plastic recovered from the ocean. Made with love under supervised working conditions with fair pay. Available in multiple colors.",
         price: "121,99"
        },

     ])

     return (
        <Box
        pt="10"
        mx={{ base: '5', lg: '20' }}
        >
          <Divider boxShadow={"dark-lg"}/>
          <Heading p="6">Season Highlights</Heading>
          <CardTemplate infos={infos}/>
        </Box>
      )
    }

export default Highlights