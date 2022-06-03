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
const Main = () => {
  return (
    <main className='pt-10 px-14'>
      <h1 className='text-4xl font-bold text-center font-body -tracking-wider'>
        Web
        <br />
        Developer
      </h1>
      <div className='max-w-2xl px-1 my-6 -mx-8 border rounded shadow-md bg-zinc-800 h-60 shadow-zinc-800 border-zinc-700'>
        <CuteButtons type='close' />
        <CuteButtons type='minimize' />
        <CuteButtons type='zoom' />
        <div className='mx-5 my-2 font-mono text-sm'>
          <div>Test</div>
          <div>
            <span className='italic font-bold'> Test Subject</span>
          </div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>
      </div>
      <H2Simple>about</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5'>
        Hey my name is <span className='font-semibold'> Sebastien </span>, an intrigued developer
        when it comes to solving problems, and coming up with creative and timely solutions.
      </ParagraphSimple>
      <MeGraph />
      <ParagraphSimple className='py-5'>
        I'm currently focused on using<span className='font-semibold'> React </span>with
        <span className='font-semibold'> Typescript </span>
        to actualize great ideas. A couple of my everyday tasks include writing reusable components,
        building{' '}
        <a
          href='https://www.educative.io/edpresso/what-is-server-side-rendering'
          className='underline'>
          SSR
        </a>{' '}
        /{' '}
        <a href='https://developer.mozilla.org/en-US/docs/Glossary/SPA' className='underline'>
          SPA
        </a>{' '}
        /{' '}
        <a
          href='https://www.freecodecamp.org/news/static-site-generation-with-nextjs/#what-happens-during-static-generation'
          className='underline'>
          SSG
        </a>{' '}
        , managing the clients state, writing tests to ensure the code doesn’t break, and
        communicating with the Backend via REST, and Websocket API calls.
      </ParagraphSimple>
      <H2Simple>my philosophy</H2Simple>
      <FullLine />
      <ParagraphSimple className='py-5'>
        I believe that when finding true happiness in life, one must always seek and explore new
        ideas and not be afraid to experiment! That's why I'm not afraid with any challenge brought
        to me.
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
