import React from 'react';
import { useTranslation } from 'next-i18next';
import PrimaryButton from './UI/PrimaryButton';

const ResumeLink = () => {
  const { t } = useTranslation('common');
  return (
    <PrimaryButton className='justify-center border-0 tablet:border'>
      {/* TODO change resume based on language */}
      <a href='Resume_2022_en.pdf' target={'_blank'}>
        {t('header.resume')}
      </a>
    </PrimaryButton>
  );
};

export default ResumeLink;
