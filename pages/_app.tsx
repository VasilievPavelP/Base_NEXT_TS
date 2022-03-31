import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { PageType } from '@types';

type MyAppProps = AppProps & {
  Component: PageType;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
