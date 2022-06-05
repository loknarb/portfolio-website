import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import ParagraphSimple from './UI/ParagraphSimple';

const PhilosophySection = () => {
  return (
    <>
      <H2Simple>my philosophy</H2Simple>
      <FullLine className='tablet:w-60' />
      <ParagraphSimple className='py-5 text-zinc-200'>
        I believe that when finding true mastery, you have to always seek and explore new ideas and
        not be afraid to experiment! That's why I'm eager with any challenge brought to me.
      </ParagraphSimple>
    </>
  );
};

export default PhilosophySection;
