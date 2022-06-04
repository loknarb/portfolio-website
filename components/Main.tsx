import React from 'react';
import Image from 'next/image';
import Test from '../public/news-gallery-project.png';
import Test2 from '../public/state-management.png';
import Test3 from '../public/black_desktop.svg';
import MeGraph from './UI/MeGraph';
import BlackDesktop from './UI/BlackDesktop';
import ParagraphSimple from './UI/ParagraphSimple';
import H2Simple from './UI/H2Simple';
import FullLine from './UI/FullLine';
import CuteButtons from './UI/CuteButtons';
import PrefixCode from './UI/Prefix';
import AtLogo from './UI/AtLogo';
import GithubLogo from './UI/GithubLogo';
import LinkedInLogo from './UI/LinkedInLogo';
const Main = () => {
  return (
    <main className='pt-10 px-14'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-center font-body -tracking-wider'>
          Web
          <br />
          Developer
        </h1>
        <div className='flex flex-1 my-4 justify-evenly w-full px-8'>
          <a href='https://www.linkedin.com/in/sebastien-brumbaugh-9306861a9/ ' target={'_blank'}>
            <LinkedInLogo />
          </a>
          <a href='https://github.com/loknarb' target={'_blank'}>
            <GithubLogo />
          </a>
          <a href='mailto:contact@s-brum.com' target={'_blank'}>
            <AtLogo />
          </a>
        </div>
      </div>
      <div className='max-w-2xl px-1 my-6 -mx-8 border rounded shadow-md bg-zinc-800 h-64 shadow-zinc-800 border-zinc-700'>
        <CuteButtons type='close' />
        <CuteButtons type='minimize' />
        <CuteButtons type='zoom' />
        <div className='mx-5 my-2 font-mono text-sm'>
          <PrefixCode id='line1' type='$'>
            <span className='text-yellow-200'>mkdir</span>{' '}
            <span className='italic'>portfolio-website</span>{' '}
          </PrefixCode>
          <PrefixCode id='line2' type='$'>
            <span className='text-yellow-200'>cd</span>{' '}
            <span className='italic'>portfolio-website</span>{' '}
          </PrefixCode>
          <PrefixCode id='line3' type='$'>
            <span className='italic'>yarn</span> <span className='text-green-300'>add</span>
            <span className='font-bold'> react react-dom next</span>
          </PrefixCode>
          <PrefixCode id='line4' type='$'>
            <span className='italic'>yarn</span> <span className='text-green-300'>add</span>{' '}
            <span className='italic'>-D</span> <span className='font-bold'>@types/packages</span>
          </PrefixCode>
          <PrefixCode type=' ' id='line5'>
            <span className='font-bold'>typescript eslint prettier</span>
          </PrefixCode>
          <PrefixCode type=' ' id='line6'>
            <span className='font-bold'>postcss tailwindcss</span>
          </PrefixCode>
          <PrefixCode type=' ' id='line7'>
            <span className='font-bold tracking-wide'>autoprefixer</span>
          </PrefixCode>
          <PrefixCode id='line8' type='>' className='text-pink-300 opacity-50'>
            <span className='text-pink-300'>installing...</span>
          </PrefixCode>
          <PrefixCode id='line9' type='>' className='text-green-300 opacity-50'>
            <span className='text-green-300'>Done!</span>
          </PrefixCode>
          <PrefixCode id='line10' type='$'>
            <span>
              <span className='italic'>yarn</span> <span className='text-green-300'>dev</span>
            </span>
          </PrefixCode>
        </div>
      </div>
      <H2Simple>about</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5'>
        <span className='text-zinc-300'>
          Hey my name is <span className='font-semibold text-zinc-50'> Sebastien</span>, an
          intrigued developer, particularly when it involves solving problems, or figuring out a
          balance between creative design and meeting deadlines.
        </span>
      </ParagraphSimple>
      <MeGraph />
      <ParagraphSimple className='py-5 text-zinc-200'>
        I'm currently focused on using<span className='font-semibold'> React </span>with
        <span className='font-semibold'> Typescript </span>
        to actualize great ideas. A couple of my everyday tasks include writing reusable components,
        building{' '}
        <a
          href='https://www.educative.io/edpresso/what-is-server-side-rendering'
          className='underline text-zinc-50'
          target={'_blank'}>
          SSR
        </a>{' '}
        /{' '}
        <a
          href='https://developer.mozilla.org/en-US/docs/Glossary/SPA'
          className='underline text-zinc-50'
          target={'_blank'}>
          SPA
        </a>{' '}
        /{' '}
        <a
          href='https://www.freecodecamp.org/news/static-site-generation-with-nextjs/#what-happens-during-static-generation'
          className='underline text-zinc-50'
          target={'_blank'}>
          SSG
        </a>{' '}
        , managing the clients state, writing tests to ensure the{' '}
        <a
          className='underline text-zinc-50'
          href='https://memegenerator.net/img/instances/74108412/one-does-not-simply-center-a-div.jpg'
          target={'_blank'}>
          div stays centered
        </a>
        , and communicating with the Backend via REST, and Websocket API calls.
      </ParagraphSimple>
      <H2Simple>my philosophy</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5 text-zinc-200'>
        I believe that when finding true mastery, you have to always seek and explore new ideas and
        not be afraid to experiment! That's why I'm eager with any challenge brought to me.
      </ParagraphSimple>
      {/* <BlackDesktop /> */}
      <H2Simple>projects</H2Simple>
      <FullLine />

      <div className='py-10'>
        <Image src={Test} />
      </div>
      {/* <div>
        <Image src={Test2} />
      </div> */}
    </main>
  );
};

export default Main;
