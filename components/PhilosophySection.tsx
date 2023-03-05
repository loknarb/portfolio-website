import React from 'react';
import H2Simple from './UI/H2Simple';
import LineGroup from './UI/LineGroup';
import ParagraphSimple from './UI/ParagraphSimple';
import { useTranslation } from 'next-i18next';

const PhilosophySection = () => {
  const { t } = useTranslation('common');
  return (
    <div className='max-w-xl p-6 rounded tablet:mx-auto bg-foregroundNoise '>
      <H2Simple className='text-center'>{t('philosophy.title')}</H2Simple>
      <div className='flex mx-auto w-60'>
        <LineGroup length='w-20' />
      </div>

      <ParagraphSimple className='p-5 text-zinc-200'>{t('philosophy.text')}</ParagraphSimple>
    </div>
  );
};

export default PhilosophySection;
