import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from './UI/PrimaryButton';
import enFlag from '../public/en_flag.png';
import deFlag from '../public/de_flag.png';
import { useLocaleString } from './hooks/useLocaleString';

export const LanguageSwitch = () => {
  const { changeToCountryString } = useLocaleString();
  return (
    <PrimaryButton className='text-4xl border-none'>
      <Link href='/' locale={changeToCountryString}>
        <Image
          src={changeToCountryString === 'en' ? deFlag : enFlag}
          width='40px'
          height='40px'
          className='border border-white'
          alt={`a flag of ${changeToCountryString === 'en' ? 'Great Britain' : 'Germany'}`}
        />
      </Link>
    </PrimaryButton>
  );
};
