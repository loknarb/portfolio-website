import React, { useEffect, useState } from 'react';
import AtLogo from './UI/AtLogo';
import BlackDesktop from './UI/BlackDesktop';
import CuteButtons from './UI/CuteButtons';
import FullLine from './UI/FullLine';
import GithubLogo from './UI/GithubLogo';
import H2Simple from './UI/H2Simple';
import LinkedInLogo from './UI/LinkedInLogo';
import MeGraph from './UI/MeGraph';
import ParagraphSimple from './UI/ParagraphSimple';
import PrefixCode from './UI/Prefix';
import PrimaryButton from './UI/PrimaryButton';

const Body = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const y = getComputedStyle(document.body).getPropertyValue('--typewriterSpeed');
    const typeWriterSpeed = parseInt(y.split('s')[0]);
    const finalSlide = 1000 * (10 * (typeWriterSpeed + 1));
    // const final = finalSlide.toString().concat('ms');
    const timerSlider = setTimeout(() => {
      setAnimate(true);
    }, finalSlide);
    return () => clearTimeout(timerSlider);
  }, []);
  return (
    <>
      <div className='tablet:justify-around tablet:flex tablet:w-full tablet:flex-1 tablet:p-8 phone:m-auto'>
        <div className='flex flex-col items-center tablet:flex-grow '>
          <h1 className='text-4xl font-bold text-center font-body -tracking-wider'>
            Web
            <br />
            Developer
          </h1>
          <div className='flex flex-1 w-64 px-8 my-4 justify-evenly'>
            <a
              href='https://www.linkedin.com/in/sebastien-brumbaugh-9306861a9/ '
              className={'hover:scale-110 transition-transform duration-500'}
              target={'_blank'}>
              <LinkedInLogo />
            </a>
            <a
              href='https://github.com/loknarb'
              className={'hover:scale-110 transition-transform duration-500'}
              target={'_blank'}>
              <GithubLogo />
            </a>
            <a
              href='mailto:contact@s-brum.com'
              className={'hover:scale-110 transition-transform duration-500'}
              target={'_blank'}>
              <AtLogo />
            </a>
          </div>
        </div>
        <div
          className={`max-w-md px-1 mt-6 mx-auto transition-all duration-700 delay-300 tablet:flex-1 ${
            animate ? 'mb-8' : 'mb-72'
          } border rounded shadow-md bg-zinc-800 h-64 shadow-zinc-800 border-zinc-700`}>
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
                <span className='italic'>yarn</span>{' '}
                <span className='mr-1 text-green-300'>dev</span>
              </span>
            </PrefixCode>
          </div>
        </div>
      </div>
      <H2Simple>about</H2Simple>
      <FullLine className='tablet:w-40' />
      <ParagraphSimple className='py-5'>
        <span className='text-zinc-300'>
          Hey my name is <span className='font-semibold text-zinc-50'> Sebastien</span>, an
          intrigued developer, particularly when it involves solving problems, or figuring out a
          balance between creative design and meeting deadlines.
        </span>
      </ParagraphSimple>
      <MeGraph className='mx-auto' />
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
      <FullLine className='tablet:w-60' />
      <ParagraphSimple className='py-5 text-zinc-200'>
        I believe that when finding true mastery, you have to always seek and explore new ideas and
        not be afraid to experiment! That's why I'm eager with any challenge brought to me.
      </ParagraphSimple>
      <H2Simple>projects</H2Simple>
      <FullLine className='tablet:w-60' />
      <BlackDesktop className='py-5 mx-auto' />
      <PrimaryButton>
        <span className='text-lg font-display -tracking-wider'>news-gallery</span>
        <span className='text-sm font-body'>react / typescript </span>
      </PrimaryButton>
      <PrimaryButton>
        <span className='text-lg font-display -tracking-wider'>stopwatch</span>
        <span className='text-sm font-body'>python / tkinter </span>
      </PrimaryButton>
      <PrimaryButton>
        <span className='text-lg font-display -tracking-wider'>state-comparer</span>
        <span className='text-sm font-body'>react / typescript </span>
      </PrimaryButton>
    </>
  );
};

export default Body;
