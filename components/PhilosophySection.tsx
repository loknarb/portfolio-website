import React from 'react';
import H2Simple from './UI/H2Simple';
import LineGroup from './UI/LineGroup';
import ParagraphSimple from './UI/ParagraphSimple';

const PhilosophySection = () => {
  return (
    <div className='max-w-xl p-6 rounded tablet:mx-auto bg-foregroundNoise '>
      <H2Simple className='text-center'>my philosophy</H2Simple>
      <div className='flex mx-auto w-60'>
        <LineGroup length='w-20' />
      </div>

      <ParagraphSimple className='p-5 text-zinc-200'>
        I believe that when finding true mastery, one must always seek and explore new ideas and not
        be afraid to experiment! That's why I'm always eager with any challenge that I face.
      </ParagraphSimple>
    </div>
  );
};

export default PhilosophySection;
