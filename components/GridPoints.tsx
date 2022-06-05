import React from 'react';
import DesignIcon from './UI/DesignIcon';
import H2Simple from './UI/H2Simple';
import PaperIcon from './UI/PaperIcon';
import ParagraphSimple from './UI/ParagraphSimple';
import PrimaryCard from './UI/PrimaryCard';
import WebDevIcon from './UI/WebDevIcon';

const GridPoints = () => {
  return (
    <div className='grid tablet:grid-cols-3 p-8 tablet:gap-14 gap-14 max-w-7xl w-[90%] mx-auto tablet:bg-foregroundNoise rounded'>
      <PrimaryCard className='bg-foreGroundNoise'>
        <WebDevIcon />
        <H2Simple className='my-2 lowercase'>Web Development</H2Simple>
        <ParagraphSimple className='text-center'>
          I will develop an scalable and responsive website with tools such as React, Nextjs,
          Express, ...etc.
        </ParagraphSimple>
      </PrimaryCard>
      <PrimaryCard className='bg-foreGroundNoise'>
        <PaperIcon />
        <H2Simple className='my-2 lowercase'>Brand Strategy</H2Simple>
        <ParagraphSimple className='text-center'>
          We will figure out how best to exemplify your brand and push its awareness
        </ParagraphSimple>
      </PrimaryCard>
      <PrimaryCard className='bg-foreGroundNoise'>
        <DesignIcon />
        <H2Simple className='my-2 lowercase'>Web Design</H2Simple>
        <ParagraphSimple className='text-center'>
          You and I will design an aesthetically pleasing website, capable of being scaled.
        </ParagraphSimple>
      </PrimaryCard>
    </div>
  );
};

export default GridPoints;
