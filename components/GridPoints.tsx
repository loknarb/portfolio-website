import React from 'react';
import DesignIcon from './UI/DesignIcon';
import H2Simple from './UI/H2Simple';
import PaperIcon from './UI/PaperIcon';
import ParagraphSimple from './UI/ParagraphSimple';
import WebDevIcon from './UI/WebDevIcon';

const GridPoints = () => {
  return (
    <div className='grid grid-cols-3 p-8 rounded gap-28 max-w-7xl w-[90%] mx-auto'>
      <div className='p-4'>
        <WebDevIcon />
        <H2Simple></H2Simple>
        <ParagraphSimple>
          I will develop an scalable and responsive website with tools such as React, Nextjs,
          Express, ...etc.
        </ParagraphSimple>
      </div>
      <div className='p-4'>
        <PaperIcon />
        <H2Simple></H2Simple>
        <ParagraphSimple>
          We will figure out how best to exemplify your brand and push its awareness
        </ParagraphSimple>
      </div>
      <div className='p-4'>
        <DesignIcon />
        <H2Simple></H2Simple>
        <ParagraphSimple>
          You and I will design an aesthetically pleasing website, capable of being scaled.
        </ParagraphSimple>
      </div>
    </div>
  );
};

export default GridPoints;
