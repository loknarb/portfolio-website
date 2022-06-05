import React, { useEffect, useState } from 'react';
import AtLogo from './UI/AtLogo';
import CuteButtons from './UI/CuteButtons';
import FullLine from './UI/FullLine';
import GithubLogo from './UI/GithubLogo';
import LinkedInLogo from './UI/LinkedInLogo';
import PrefixCode from './UI/Prefix';

const CodeBlockSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const y = getComputedStyle(document.body).getPropertyValue('--typewriterSpeed');
    const typeWriterSpeed = parseInt(y.split('ms')[0]);
    const finalSlide = 3 * (10 * typeWriterSpeed);
    // const final = finalSlide.toString().concat('ms');
    const timerSlider = setTimeout(() => {
      setAnimate(true);
    }, finalSlide);
    return () => clearTimeout(timerSlider);
  }, []);
  // tablet:justify-around tablet:flex tablet:w-full tablet:flex-1 tablet:p-8
  return (
    <div className='tablet:grid tablet:grid-cols-[3fr,_2fr] tablet:gap-5 phone:m-auto '>
      <div className='flex flex-col items-center'>
        <h1 className='p-8 text-4xl font-bold text-center tablet:text-6xl font-body -tracking-wider'>
          Web
          <br />
          Developer
          <span className='flex'>
            <FullLine className='w-20 border-yellow-200' />
            <FullLine className='w-20 border-pink-300' />
            <FullLine className='w-20 border-green-300' />
          </span>
        </h1>
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
      </div>
      <div
        className={`max-w-md px-1 mt-6 mx-auto tablet:mx-0 tablet:mr-auto transition-all duration-700 delay-300 tablet:w-full tablet:flex-1 ${
          animate ? 'mb-8' : 'mb-72'
        } border rounded shadow-md bg-zinc-800 h-72 shadow-zinc-800 border-zinc-700`}>
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
              <span className='italic'>yarn</span> <span className='mr-1 text-green-300'>dev</span>
            </span>
          </PrefixCode>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockSection;
