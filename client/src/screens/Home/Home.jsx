import React from 'react'
import { HiOutlineBellAlert } from "react-icons/hi2";
import {Tag,Flex,Avatar,TagLabel,Stack} from '@chakra-ui/react'

const Home = () => {
  return (
     <Stack backgroundColor='yellow'>
       <Flex >
       <Tag size='lg' colorScheme='green' borderRadius='8px'>
        <Avatar
            src='https://bit.ly/sage-adebayo'
            size='xs'
            name='Segun Adebayo'
            ml={-1}
            mr={2}
        />
        <TagLabel>Welcome,Vishal</TagLabel>
        </Tag>
        <HiOutlineBellAlert />

       </Flex>

     </Stack>
  )
}

export default Home