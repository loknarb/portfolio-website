import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import PrimaryButton from './UI/PrimaryButton';
import enFlag from '../public/en_flag.png';
import deFlag from '../public/de_flag.png';

export const LanguageSwitch = () => {
  const router = useRouter();
  const changeTo = router.locale === 'en' ? 'de' : 'en';
  return (
    <PrimaryButton className='text-4xl border-none'>
      <Link href='/' locale={changeTo}>
        <Image
          src={changeTo === 'en' ? deFlag : enFlag}
          width='40px'
          height='40px'
          className='border border-white'
          alt={`a flag of ${changeTo === 'en' ? 'the Great Britain' : 'Germany'}`}
        />
      </Link>
    </PrimaryButton>
  );
};
