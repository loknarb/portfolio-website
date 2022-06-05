import React from 'react';
import BlackDesktop from './UI/BlackDesktop';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import PrimaryButton from './UI/PrimaryButton';

const ProjectSection = () => {
  return (
    <>
      <BlackDesktop className='py-5 mx-auto' />
      <H2Simple>projects</H2Simple>
      <FullLine className='tablet:w-60' />
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
    </>
  );
};

export default ProjectSection;
