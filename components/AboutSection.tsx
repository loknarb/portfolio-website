import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import MeGraph from './UI/MeGraph';
import ParagraphSimple from './UI/ParagraphSimple';

const AboutSection = () => {
  return (
    <>
      <div className='items-center w-full tablet:flex-row-reverse tablet:flex tablet:justify-evenly'>
        <div className='tablet:mx-4'>
          <H2Simple className='tablet:left-80 tablet:relative'>about</H2Simple>
          <FullLine className='tablet:w-40 tablet:left-60 tablet:relative' />
          <ParagraphSimple className='py-5 tablet:w-96 tablet:text-right'>
            <span className='break-words whitespace-normal text-zinc-300'>
              Hey my name is <span className='font-semibold text-zinc-50'> Sebastien</span>, an
              intrigued developer, particularly when it involves solving problems, or figuring out a
              balance between creative design and meeting deadlines.
            </span>
          </ParagraphSimple>
        </div>
        <MeGraph className='mx-auto tablet:mx-0 tablet:h-[500px] tablet:w-[500px]' />
      </div>
    </>
  );
};

export default AboutSection;
