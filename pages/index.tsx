import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import FullLine from '../components/UI/FullLine';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = { [key: string]: any };
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const [sidebar, setSidebar] = useState<boolean>(true);
  return (
    <div className='bg-backgroundNoise'>
      <Head>
        <title>{t('home.title')}</title>
        <meta name='description' content='created with love by s-brum' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      {/* TODO TRANSITION header disapear */}
      <Header sideBar={sidebar} setSidebar={setSidebar} />
      <FullLine className='opacity-10' />
      <Main sideBar={sidebar} setSidebar={setSidebar} />
      <Footer />
    </div>
  );
};

export default Home;
