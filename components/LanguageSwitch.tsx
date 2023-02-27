import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import PrimaryButton from './UI/PrimaryButton';

export const LanguageSwitch = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const changeTo = router.locale === 'en' ? 'de' : 'en';
  console.log('router.locale', router.locale);
  console.log('changeTo', changeTo);
  return (
    <PrimaryButton className='text-4xl border-none'>
      <Link href='/' locale={changeTo}>
        {changeTo === 'en' ? '🇩🇪' : '🇬🇧'}
      </Link>
    </PrimaryButton>
  );
};
