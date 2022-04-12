import Head from 'next/head'
import Image from 'next/image'
import TensorFlowExample from '../Components/TensorFlowExample';

import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Center
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      {/* The main code starts from here so please read line by line */}
      <SimpleGrid minChildWidth='250px' spacing="5" paddingLeft="5%" paddingRight="5%">
        <Box border={"1px"}>

          <TensorFlowExample />
        </Box>
      </SimpleGrid>
      {/* The main code starts from here so please read line by line */}
    </Box>
  )
}
