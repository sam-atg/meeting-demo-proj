import { AppShell, createEmotionCache, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Nav } from '~/components/Nav';
import './shiki.css';

const emotionCache = createEmotionCache({ key: 'mantine' });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        emotionCache={emotionCache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
          fontFamilyMonospace:
            'Cascadia Code PL, ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
          // breakpoints: {
          //   xs: 500,
          //   sm: 800,
          //   md: 1000,
          //   lg: 1200,
          //   xl: 1400
          // }
        }}>
        <AppShell navbar={<Nav />}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
