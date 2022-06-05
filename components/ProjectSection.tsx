import React from 'react';
import BlackDesktop from './UI/BlackDesktop';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import PrimaryButton from './UI/PrimaryButton';

const ProjectSection = () => {
  return (
    <>
      <div className='items-center w-full my-20 tablet:flex-row-reverse tablet:flex tablet:justify-evenly desktop:px-44'>
        <BlackDesktop className='py-5 mx-auto tablet:py-0 tablet:mx-0 tablet:flex-1 tablet:flex-shrink-0 tablet:h-[400px] tablet:w-[400px] w-64 h-64 tablet:ml-8' />
        <div className='max-w-4xl p-4 border rounded border-zinc-600 border-opacity-20 tablet:mx-auto'>
          <H2Simple>projects</H2Simple>
          <FullLine className='tablet:w-60 ' />
          <div className='grid grid-cols-2 gap-2 w-[85%] mx-auto my-4 tablet:grid-cols-3 desktop:gap-20'>
            <PrimaryButton className='hover:border hover:border-zinc-600'>
              <span className='text-lg font-display -tracking-wider'>news-gallery</span>
              <span className='text-sm font-body'>react / typescript </span>
            </PrimaryButton>
            <PrimaryButton className='border rounded hover:border-zinc-600'>
              <span className='text-lg font-display -tracking-wider'>stopwatch</span>
              <span className='text-sm font-body'>python / tkinter </span>
            </PrimaryButton>
            <PrimaryButton className='border rounded hover:border-zinc-600'>
              <span className='text-lg font-display -tracking-wider'>state-comparer</span>
              <span className='text-sm font-body'>react / typescript </span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
