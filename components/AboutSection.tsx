import React from 'react';
import FullLine from './UI/FullLine';
import H2Simple from './UI/H2Simple';
import MeGraph from './UI/MeGraph';
import ParagraphSimple from './UI/ParagraphSimple';

const AboutSection = () => {
  return (
    <>
      <div className='items-center w-full tablet:flex-row-reverse tablet:flex tablet:justify-evenly desktop:px-44'>
        <div className='flex-1 max-w-2xl p-6 rounded tablet:mx-4 bg-foregroundNoise'>
          <H2Simple className='ml-4 tablet:mr-4 tablet:text-right'>about</H2Simple>
          <FullLine className='' />
          <ParagraphSimple className='py-5 tablet:text-right'>
            <span className='break-words whitespace-normal text-zinc-300'>
              Hey my name is <span className='font-semibold text-zinc-50'> Sebastien</span>, an
              intrigued developer, particularly when it involves solving problems, or figuring out a
              balance between creative design and meeting deadlines.
            </span>
          </ParagraphSimple>
        </div>
        <MeGraph className='mx-auto tablet:flex-1 tablet:flex-shrink-0 tablet:mx-0 tablet:h-[400px] tablet:w-[400px]' />
      </div>
    </>
  );
};

export default AboutSection;