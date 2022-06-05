import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import MeGraph from './UI/MeGraph';
import ParagraphSimple from './UI/ParagraphSimple';

const AboutSection = () => {
  return (
    <>
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
    </>
  );
};

export default AboutSection;
