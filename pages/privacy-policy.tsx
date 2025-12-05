import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import PrimaryCard from '../components/UI/PrimaryCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
type Props = Record<string, unknown>;
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const PrivacyPolicy: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className='mx-auto tablet:pt-16 tablet:px-52'>
      <PrimaryCard className='gap-4 pb-12'>
        <h1 className='pt-4 text-3xl text-zinc-900 dark:text-zinc-200'>{t('privacy.headline')}</h1>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>{t('privacy.headline_text')}</p>
        <h2 className='text-2xl text-zinc-900 dark:text-zinc-200'>
          {t('privacy.collection_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>{t('privacy.collection_text')}</p>
        <h2 className='text-2xl text-zinc-900 dark:text-zinc-200'>
          {t('privacy.cookies_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>{t('privacy.cookies_text')}</p>
        <h2 className='text-xl text-center text-zinc-900 dark:text-zinc-200'>
          {t('privacy.advertising_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>
          <Trans
            i18nKey='privacy.advertising_text'
            components={{
              1: (
                <a
                  href='http://www.google.com/privacy_ads.html'
                  className='underline text-zinc-700 dark:text-zinc-300'
                />
              ),
            }}
          />
        </p>
        <h2 className='text-2xl text-zinc-900 dark:text-zinc-200'>
          {t('privacy.security_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>{t('privacy.security_text')}</p>
        <h2 className='text-2xl text-center text-zinc-900 dark:text-zinc-200'>
          {t('privacy.changes_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>{t('privacy.changes_text')}</p>
        <h2 className='text-2xl text-zinc-900 dark:text-zinc-200'>
          {t('privacy.contact_headline')}
        </h2>
        <p className='px-8 text-zinc-800 dark:text-zinc-300'>
          <Trans
            i18nKey='privacy.contact_text'
            components={{
              1: (
                <a
                  href='mailto:email@s-brum.com'
                  target='_blank'
                  className='underline text-zinc-700 dark:text-zinc-300'
                />
              ),
            }}
          />
        </p>
      </PrimaryCard>
    </div>
  );
};
export default PrivacyPolicy;
