import React from 'react';
import { useTranslation } from 'next-i18next';
import PrimaryButton from './UI/PrimaryButton';
import { useLocaleString } from './hooks/useLocaleString';
import Link from 'next/link';
import clsx from 'clsx';

type ResumeLinkProps = {
  button?: boolean;
  className?: string;
};
const ResumeLink = ({ button, className }: ResumeLinkProps) => {
  const { t } = useTranslation('common');
  const { locale } = useLocaleString();
  return button ? (
    <PrimaryButton as='div' className='justify-center border-0 tablet:border'>
      <Link href={`${t('header.resume')}_${locale}.pdf`} target={'_blank'}>
        <span>{t('header.resume')}</span>
      </Link>
    </PrimaryButton>
  ) : (
    <Link href={`${t('header.resume')}_${locale}.pdf`} target={'_blank'}>
      <span className={clsx('text-xs cursor-pointer')}>{t('header.resume')}</span>
    </Link>
  );
};

export default ResumeLink;
