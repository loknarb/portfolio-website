import '../styles/globals.css';
import '../lib/i18n';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/UI/Layout';
import { spaceMono, josefinSlab, titilliumWeb } from '../lib/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spaceMono.variable} ${josefinSlab.variable} ${titilliumWeb.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(MyApp);
