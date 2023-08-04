import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from './UI/PrimaryButton';
import enFlag from '../public/en_flag.png';
import deFlag from '../public/de_flag.png';
import { useLocaleString } from './hooks/useLocaleString';
import { useRouter } from 'next/router';
interface LanguageSwitchProps {
  width?: ImageProps['width'];
  height?: ImageProps['height'];
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  width = '40px',
  height = '40px',
}) => {
  const { changeToCountryString } = useLocaleString();
  const { pathname } = useRouter();
  return (
    <PrimaryButton className='text-4xl border-none'>
      <Link href={pathname} locale={changeToCountryString}>
        <Image
          src={changeToCountryString === 'en' ? deFlag : enFlag}
          width={width}
          height={height}
          className='border border-white'
          alt={`a flag of ${changeToCountryString === 'en' ? 'Great Britain' : 'Germany'}`}
        />
      </Link>
    </PrimaryButton>
  );
};
