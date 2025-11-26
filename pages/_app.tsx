import '../styles/globals.css';
import '../lib/i18n';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/UI/Layout';
import { spaceMono, josefinSlab, titilliumWeb } from '../lib/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${spaceMono.variable} ${josefinSlab.variable} ${titilliumWeb.variable}`}>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
