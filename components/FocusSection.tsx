import React from 'react';
import H2Simple from './UI/H2Simple';
import LineGroup from './UI/LineGroup';
import ParagraphSimple from './UI/ParagraphSimple';
import { Trans, useTranslation } from 'next-i18next';

const FocusSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className='max-w-4xl p-6 rounded tablet:mx-auto bg-zinc-800 dark dark:text-zinc-200 dark:text-zinc-300'>
      <H2Simple className='tablet:relative dark:text-zinc-300'>{t('focus.title')}</H2Simple>
      <div className='flex tablet:w-60'>
        <LineGroup length='w-20' />
      </div>
      <ParagraphSimple className='py-5 dark:text-zinc-200'>
        <Trans
          i18nKey='focus.text'
          components={{
            1: <span className='font-semibold' />,
            3: <span className='font-semibold' />,
            5: (
              <a
                href='https://www.educative.io/edpresso/what-is-server-side-rendering'
                className='underline dark:text-zinc-200 dark:text-zinc-300'
                target='_blank'
              />
            ),
            7: (
              <a
                href='https://developer.mozilla.org/en-US/docs/Glossary/SPA'
                className='underline dark:text-zinc-200 dark:text-zinc-300'
                target='_blank'
              />
            ),
            9: (
              <a
                href='https://www.freecodecamp.org/news/static-site-generation-with-nextjs/#what-happens-during-static-generation'
                className='underline dark:text-zinc-200 dark:text-zinc-300'
                target='_blank'
              />
            ),
            11: (
              <a
                className='underline dark:text-zinc-200 dark:text-zinc-300'
                href='center-div.png'
                target='_blank'
              />
            ),
          }}
        />
      </ParagraphSimple>
    </div>
  );
};

export default FocusSection;
