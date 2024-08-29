import React from 'react'
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from './NavMenu';

const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box onClick={onOpen}>
    <RxHamburgerMenu size={30}/>
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton outline={'none'} border={'none'}/>

            <DrawerBody>
                <NavMenu/>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </Box>
    </>
  )
}

export default MobileNav