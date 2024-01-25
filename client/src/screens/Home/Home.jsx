import React from 'react'
import {Tag,Flex,Avatar,TagLabel,Stack} from '@chakra-ui/react'
import { HiOutlineBellAlert } from "react-icons/hi2";

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
         <HiOutlineBellAlert size={15} color='black'/>
       </Flex>

     </Stack>
  )
}

export default Home