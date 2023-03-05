import React from 'react';
import H2Simple from './UI/H2Simple';
import LineGroup from './UI/LineGroup';
import MeGraph from './UI/MeGraph';
import ParagraphSimple from './UI/ParagraphSimple';
import { Trans, useTranslation } from 'next-i18next';

const AboutSection = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='items-center w-full tablet:flex-row-reverse tablet:flex tablet:justify-evenly desktop:px-44'>
        <div className='flex-1 max-w-2xl p-6 mb-4 rounded tablet:mx-4 bg-foregroundNoise'>
          <H2Simple className='tablet:mr-4 tablet:text-right'>{t('about.title')}</H2Simple>
          <div className='flex tablet:ml-auto tablet:mr-0 tablet:w-60'>
            <LineGroup length='w-20' />
          </div>
          <ParagraphSimple className='py-5 tablet:text-right'>
            <span className='break-words whitespace-normal text-zinc-300'>
              <Trans i18nKey={'about.text'}>
                Hey my name is <span className='font-semibold text-zinc-50'> Sebastien</span>, an
                intrigued developer, particularly when it involves solving problems, or figuring out
                a balance between creative design and meeting deadlines.
              </Trans>
            </span>
          </ParagraphSimple>
        </div>
        <MeGraph className='mx-auto tablet:flex-1 tablet:flex-shrink-0 tablet:mx-0 tablet:h-[400px] tablet:w-[400px]' />
      </div>
    </>
  );
};

export default AboutSection;
