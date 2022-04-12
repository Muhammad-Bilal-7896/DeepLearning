import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <>
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
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
