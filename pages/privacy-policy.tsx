import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import PrimaryCard from '../components/UI/PrimaryCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
type Props = { [key: string]: any };
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
        <h1 className='pt-4 text-3xl'>{t('privacy.headline')}</h1>
        <p className='px-8'>{t('privacy.headline_text')}</p>
        <h2 className='text-2xl'>{t('privacy.collection_headline')}</h2>
        <p className='px-8'>{t('privacy.collection_text')}</p>
        <h2 className='text-2xl'>{t('privacy.cookies_headline')}</h2>
        <p className='px-8'>{t('privacy.cookies_text')}</p>
        <h2 className='text-xl text-center'>{t('privacy.advertising_headline')}</h2>
        <p className='px-8 '>
          <Trans i18nKey={'privacy.advertising_text'}>
            Advertising partners and other third parties may use cookies, scripts and/or web beacons
            to track visitors activities on this website in order to display advertisements and
            other useful information. Such tracking is done directly by the third parties through
            their own servers and is subject to their own privacy policies. This website has no
            access or control over these cookies, scripts and/or web beacons that may be used by
            third parties. Learn how to
            <a href='http://www.google.com/privacy_ads.html' className='underline text-zinc-50'>
              opt out of Google's cookie usage.
            </a>
          </Trans>
        </p>
        <h2 className='text-2xl'>{t('privacy.security_headline')}</h2>
        <p className='px-8'>{t('privacy.security_text')}</p>
        <h2 className='text-2xl text-center'>{t('privacy.changes_headline')}</h2>
        <p className='px-8'>{t('privacy.changes_text')}</p>
        <h2 className='text-2xl'>{t('privacy.contact_headline')}</h2>
        <p className='px-8'>
          <Trans i18nKey={'privacy.contact_text'}>
            For any questions or concerns regarding the privacy policy, please send me an email at
            <a href='mailto:email@s-brum.com' target={'_blank'} className='underline text-zinc-50'>
              email@s-brum.com
            </a>
            .
          </Trans>
        </p>
      </PrimaryCard>
    </div>
  );
};
export default PrivacyPolicy;
