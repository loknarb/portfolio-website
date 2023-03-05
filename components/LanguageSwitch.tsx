import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import PrimaryButton from './UI/PrimaryButton';

export const LanguageSwitch = () => {
  const router = useRouter();
  const changeTo = router.locale === 'en' ? 'de' : 'en';
  return (
    <PrimaryButton className='text-4xl border-none'>
      <Link href='/' locale={changeTo}>
        <Image
          src={`/../public/${changeTo}_flag.png`}
          width='40px'
          height='40px'
          className='border border-white'
        />
      </Link>
    </PrimaryButton>
  );
};
