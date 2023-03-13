import React from 'react';
import { useTranslation } from 'next-i18next';
import PrimaryButton from './UI/PrimaryButton';
import { useLocaleString } from './hooks/useLocaleString';

const ResumeLink = () => {
  const { t } = useTranslation('common');
  const { locale } = useLocaleString();
  return (
    <PrimaryButton className='justify-center border-0 tablet:border'>
      <a href={`${t('header.resume')}_${locale}.pdf`} target={'_blank'}>
        {t('header.resume')}
      </a>
    </PrimaryButton>
  );
};

export default ResumeLink;
