import React from 'react';
import AtLogo from './UI/AtLogo';
import FullLine from './UI/FullLine';
import GithubLogo from './UI/GithubLogo';
import LinkedInLogo from './UI/LinkedInLogo';

const Footer = () => {
  return (
    <>
      <div className='flex mt-20'>
        <FullLine className='w-1/3 border-yellow-200' />
        <FullLine className='w-1/3 border-pink-300' />
        <FullLine className='w-1/3 border-green-300' />
      </div>
      <div className='flex flex-row bg-transparent h-44'>
        <div className='flex-auto flex-grow-[35] w-[35%] flex items-center p-4'>
          <h2 className='font-mono text-2xl tablet:text-4xl -tracking-wide'>still curious?</h2>
        </div>
        <div className='flex-auto flex-grow-[65] w-[65%] flex flex-col items-center justify-center  text-zinc-900px-2 '>
          <h2 className='py-2 font-mono text-2xl tablet:text-4xl -tracking-wide'>lets talk</h2>
          <div className='flex w-48 mx-auto'>
            <FullLine className='w-1/3 border-yellow-200' />
            <FullLine className='w-1/3 border-pink-300' />
            <FullLine className='w-1/3 border-green-300' />
          </div>
          <p className='text-sm tablet:text-lg font-body'>
            <div className='flex flex-1 w-64 px-8 my-4 justify-evenly'>
              <a
                href='https://www.linkedin.com/in/sebastien-brumbaugh-9306861a9/ '
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <LinkedInLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
              <a
                href='https://github.com/loknarb'
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <GithubLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
              <a
                href='mailto:contact@s-brum.com'
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <AtLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
            </div>
          </p>
        </div>
      </div>
      <div className='py-4 mx-auto w-[50%]'>
        <small className='font-sm'>
          © 2022 — Built & Designed with ♡. Made with NextJS, TailwindCSS, and React. Hosted on
          Vercel.
        </small>
      </div>
    </>
  );
};

export default Footer;
