import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import ParagraphSimple from './UI/ParagraphSimple';

const FocusSection = () => {
  return (
    <div className='max-w-4xl p-6 rounded tablet:mx-auto bg-foregroundNoise'>
      <H2Simple className='tablet:relative'>what am i up to?</H2Simple>
      <FullLine className='tablet:w-64 ' />
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
    </div>
  );
};

export default FocusSection;