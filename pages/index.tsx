import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import FullLine from '../components/UI/FullLine';
const Home: NextPage = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  console.log('sidebar', sidebar);
  return (
    <div className='bg-backgroundNoise'>
      <Head>
        <title>Portfolio - Homepage</title>
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
