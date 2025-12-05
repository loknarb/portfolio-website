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
        <Trans i18nKey={'focus.text'}>
          I&apos;m currently focused on using<span className='font-semibold'> React </span>with
          <span className='font-semibold'> Typescript </span>
          to actualize great ideas. A couple of my everyday tasks include writing reusable
          components, building
          <a
            href='https://www.educative.io/edpresso/what-is-server-side-rendering'
            className='underline dark:text-zinc-200 dark:text-zinc-300'
            target={'_blank'}>
            SSR
          </a>
          /
          <a
            href='https://developer.mozilla.org/en-US/docs/Glossary/SPA'
            className='underline dark:text-zinc-200 dark:text-zinc-300'
            target={'_blank'}>
            SPA
          </a>
          /
          <a
            href='https://www.freecodecamp.org/news/static-site-generation-with-nextjs/#what-happens-during-static-generation'
            className='underline dark:text-zinc-200 dark:text-zinc-300'
            target={'_blank'}>
            SSG
          </a>
          , managing the clients state, writing tests to ensure the
          <a
            className='underline dark:text-zinc-200 dark:text-zinc-300'
            href='center-div.png'
            target={'_blank'}>
            div stays centered
          </a>
          , and communicating with the Backend via REST, and Websocket API calls.
        </Trans>
      </ParagraphSimple>
    </div>
  );
};

export default FocusSection;
