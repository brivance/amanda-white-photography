import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { SessionProvider } from 'next-auth/react';

// Import Tailwind CSS globally

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ParallaxProvider>
  );
}