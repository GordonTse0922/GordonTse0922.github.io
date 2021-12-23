import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NextRouter } from 'next/router'
import Logo from './logo'
import ThemeToggleButton from './themeButton'
import { useState } from 'react'
import { SunIcon, MoonIcon, Icon } from '@chakra-ui/icons'
import { BsSun, BsLightbulbOff } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { IoMdCodeWorking } from 'react-icons/io'
import { Url } from 'url'
type LinkProps = {
  href: string,
  path: string,
  children: JSX.Element | string
}
const LinkItem = ({ href, path, children, ...props }: LinkProps) => {
  const active: boolean = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

type NavProps = {
  path: string
}
const Navbar = ({ path, ...props }: NavProps) => {

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>


        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem href="/works" path={path}>
            Works
          </LinkItem>


          <LinkItem href="/contact" path={path}>
            Contact Me
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}




export default Navbar
