import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import ParagraphSimple from './UI/ParagraphSimple';

const PhilosophySection = () => {
  return (
    <div className='max-w-xl p-6 rounded tablet:mx-auto bg-foregroundNoise '>
      <H2Simple className='text-center'>my philosophy</H2Simple>
      <div className='flex mx-auto w-60'>
        <FullLine className='w-20 border-yellow-200' />
        <FullLine className='w-20 border-pink-300' />
        <FullLine className='w-20 border-green-300' />
      </div>
      <ParagraphSimple className='p-5 text-zinc-200'>
        I believe that when finding true mastery, one must always seek and explore new ideas and not
        be afraid to experiment! That's why I'm always eager with any challenge that I face.
      </ParagraphSimple>
    </div>
  );
};

export default PhilosophySection;
