import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Nextjs</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Project starter to work with Nextjs and Styled-Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
