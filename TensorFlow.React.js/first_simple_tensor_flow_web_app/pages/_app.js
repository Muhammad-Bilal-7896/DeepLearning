import Head from "next/head";
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react';

import Fonts from "../Fonts";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '400px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
})

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="DeepLearningWork" />
      <meta name="keywords" content="AI,deeplearning,js,tensorflow" />
      <meta name="author" content="Muhammad-Bilal-7896" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <title>Deep learning with tensorflow</title>
    </Head>
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
}

export default MyApp
