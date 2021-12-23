import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import  React from 'react'
import NavBar from '../navbar'
import {NextRouter} from'next/router'

type Props = {
  children: JSX.Element,
  router:NextRouter
};

const Main = ({ children,  router }:Props) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gordon's homepage" />
        <meta name="author" content="Ho Yin Tse" />
        <meta name="author" content="GordonTse0922" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Gordon Tse's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Gordon Tse - Homepage</title>
      </Head>


      <NavBar path={router.asPath}/>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
