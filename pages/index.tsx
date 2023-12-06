import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Main from '../components/Main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = { [key: string]: any };
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className='bg-backgroundNoise tablet:pb-20'>
      <Head>
        <title>{t('home.title')}</title>
        <meta name='description' content='created with love by s-brum' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      {/* TODO TRANSITION header disapear */}
      <Main />
    </div>
  );
};

export default Home;
