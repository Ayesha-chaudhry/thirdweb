import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Design = () => {
  return (
    <Box
     h={{sm:'700px', lg:'1000', 'xl':'1325px'}}
     >
      <Image src={'/images/svg.png'} alt='line-img' w={{sm:'full', lg:'full'}} h={{lg:'402px'}}/>
      <Box>
        <Text mt={{sm:'50px'}} color={'rgba(255, 255, 255, 255)'} fontFamily={'Inter'} fontSize={{sm:'30px', lg:'90px'}}  lineHeight={{lg:'80px'}} w={{lg:'666px', 'xl':'full'}} h={{lg:'238px'}} px={{sm: '20px', lg:'50px', xl:'130px'}}>How we can help grow</Text>
      </Box>
      <Box h={{'xl':'288px'}} px={{'xl':'115px'}} display={{sm:'block', lg:'flex'}} gap={{'xl':'16px'}}>
        <Box display={{lg:'flex'}} flexDir={'column'} gap={{sm:'10px', md:'20px', 'xl':'25px'}}>
        <Text color={'rgba(255, 255, 255, 255)'} px={{sm:'80px', lg:'20px'}} fontFamily={'Inter'} fontSize={{sm:'20px',lg:'36px'}}  lineHeight={{sm:'30px',lg:'54px'}}>Product clarity</Text>
        <Box display={'flex'} flexDir={'column'} gap={{'xl':'50px'}}>
        <Text px={{sm:'80px',lg:'20px'}} color={'rgba(255, 255, 255, 0.6)'} fontFamily={'Inter'} fontSize={{lg:'26px', 'xl':'35px'}}  lineHeight={{'xl':'54px'}} >UX/UI design</Text>
        <Text px={{sm:'80px',lg:'20px'}} color={'rgba(255, 255, 255, 0.6)'} fontFamily={'Inter'} fontSize={{lg:'26px','xl':'35px'}}  lineHeight={{'xl':'54px'}} >Maintain process</Text>
        </Box>
        </Box>
        <Box w={{'xl':'795px'}} display={{md:'flex'}}  gap={{sm:'80px' ,'xl':'80px'}} mx={{sm:'40px'}}>
        <Image src={'/images/help.png'} alt='help-img' w={{lg:'317px'}} h={{lg:'222px'}}/>
        <Box display={{md:'flex'}} flexDir={'column'} gap={{sm:'30px','xl':'43px'}}>
        <Text pt={{sm:'30px',lg:'0px'}} px={{sm:'20px',lg:'0px'}} color={'rgba(255, 255, 255, 255)'} fontFamily={'Inter'} fontSize={{sm:'20px','xl':'26px'} } lineHeight={{sm:'20px', md:'30px', lg:'32px'}} w={{md:'300px', lg:'200px', 'xl':'387.29px'}}>Are you at the idea stage? We will help you identify the critical MVP product scope.</Text>
        <Text px={{sm:'20px',lg:'0px', 'xl':'20px'}} color={'rgba(255, 255, 255, 0.6)'} fontFamily={'Inter'} fontSize={{lg:'26px'}}  lineHeight={{lg:'32px'}} w={{lg:'387.29px'}}>product goal & vision <br/> brand voice <br/>product positionong</Text>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Design