import { Box, Text, Image, Hide } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box display={{sm:'reverse-column', lg:'flex'}} px={{sm:'40px', 'xl':'80px'}} gap={{'xl':'115px'}}>
        {/* Left */}
        <Box>
        <Image src='/images/about01.png' alt='men' w={'230px'} h={'344.77px'}/>
        </Box>
        {/* Center */}
        <Box display={'flex'} flexDir={'column'}>
        <Box w={{lg:'500px', 'xl':'550px'}}>
            <Text color={'rgba(255, 255, 255, 255)'} fontFamily={'Inter'} fontSize={{sm:'60px', 'xl':'115px'}} lineHeight={{lg:'80px', 'xl':'144px'}}>About</Text>
            <Text color={'rgba(255, 255, 255, 0.6)'} fontFamily={'Inter'} fontSize={{sm:'20px', 'xl':'26px'}} lineHeight={{lg:'36px'}}>Team of product and brand designers that are really passionate about blockchain technology and good design. We are not just UI freaks! We advocate users for better product experience and common sense.</Text>
            <Box display={'flex'} justifyContent={'start'} alignItems={'center'} gap={'11px'}>
            <Text color={'rgba(255, 255, 255, 255)'} fontFamily={'Inter'} fontSize={{lg:'26px'}} lineHeight={'39px'}>More about us</Text>
            <Image src='/images/i.png' alt='arrow' w={{sm:'20px', lg:'38px'}} h={{lg:'40px'}}/>
            </Box>
        </Box>
        <Box pt={{sm: '20px',lg:'103px'}}>
        
        <Image src='/images/about02.png' alt='men' w={'288px'} h={'191.56px'}/>
        
        </Box>
        </Box>
        {/* Right */}
        <Box pt={{sm:'90px', lg:'235px'}}>
        <Image src='/images/about03.png' alt='men' w={'230px'} h={'343.16px'}/>
        </Box>

    </Box>
  )
}

export default About

