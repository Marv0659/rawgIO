import { HStack,Text, Image, Switch } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
