import { useTranslation } from 'next-i18next';
import React from 'react';
import DesignIcon from './UI/DesignIcon';
import H2Simple from './UI/H2Simple';
import PaperIcon from './UI/PaperIcon';
import ParagraphSimple from './UI/ParagraphSimple';
import PrimaryCard from './UI/PrimaryCard';
import WebDevIcon from './UI/WebDevIcon';

const GridPoints = () => {
  const { t } = useTranslation('common');
  return (
    <div className='grid tablet:grid-cols-3 tablet:p-8 tablet:gap-14 gap-14 max-w-7xl  mx-auto tablet:bg-foregroundNoise dark dark:text-zinc-200 dark:text-zinc-300 rounded my-4 w-full pt-72'>
      <PrimaryCard>
        <WebDevIcon color='fill-yellow-200' className='fill-yellow-200' />
        <H2Simple className='my-2 font-semibold lowercase'>{t('mission.title')}</H2Simple>
        <ParagraphSimple className='text-center'>{t('mission.text')}</ParagraphSimple>
      </PrimaryCard>
      <PrimaryCard>
        <PaperIcon color='bg-pink-300' className='fill-pink-300' />
        <H2Simple className='my-2 font-semibold lowercase'>{t('brand_strategy.title')}</H2Simple>
        <ParagraphSimple className='text-center'>{t('brand_strategy.text')}</ParagraphSimple>
      </PrimaryCard>
      <PrimaryCard>
        <DesignIcon color='fill-green-300' className='fill-green-300' />
        <H2Simple className='my-2 font-semibold lowercase'>{t('web_design.title')}</H2Simple>
        <ParagraphSimple className='text-center'>{t('web_design.text')}</ParagraphSimple>
      </PrimaryCard>
    </div>
  );
};

export default GridPoints;
