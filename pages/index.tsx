import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Main from '../components/Main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = Record<string, unknown>;
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className='relative tablet:pb-20'>
      <Head>
        <title>{t('home.title')}</title>
        <meta name='description' content='created with love by s-brum' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      {/* Background noise overlay with high priority for LCP optimization */}
      <div className='fixed inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900'>
        <Image
          src='/bg_noise_q15.webp'
          alt=''
          fill
          priority
          quality={15}
          className='object-cover opacity-[0.15] mix-blend-difference'
          sizes='100vw'
        />
      </div>
      {/* TODO TRANSITION header disapear */}
      <Main />
    </div>
  );
};

export default Home;
