import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../themes/theme'
import LayOut from '../components/layouts/main'
import { ReactElement } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Canvas from '../themes/mouseTrail'

type Props={
  Component:any,
  pageProps:any,
}
function MyApp({ Component, pageProps }:Props):ReactElement {
  const router:NextRouter=useRouter();
  return (
    <ChakraProvider theme={theme}>
    <LayOut router={router}>
      <Component {...pageProps} />
    </LayOut>
    </ChakraProvider>
  )
}

export default MyApp
