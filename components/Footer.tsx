import { useTranslation } from 'next-i18next';
import React from 'react';
import AtLogo from './UI/AtLogo';
import GithubLogo from './UI/GithubLogo';
import LineGroup from './UI/LineGroup';
import LinkedInLogo from './UI/LinkedInLogo';
import Link from 'next/link';
import ResumeLink from './ResumeLink';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='flex tablet:mt-20'>
        <LineGroup length={'w-1/3'} />
      </div>
      <div className='flex flex-row mt-6 text-center bg-transparent justify-evenly tablet:gap-20 tablet:px-20 tablet:mt-12 tablet:flex-row h-44'>
        <div className='flex flex-col items-center justify-center w-48 gap-1 px-4 align-top tablet:border tablet:rounded tablet:shadow-md h-36 tablet:border-zinc-600 tablet:border-opacity-20 shadow-zinc-800'>
          <ResumeLink />
          <Link href='https://www.linkedin.com/in/sebastien-brumbaugh-9306861a9/'>
            <span className='text-xs cursor-pointer'>LinkedIn</span>
          </Link>
          <Link href='https://github.com/loknarb'>
            <span className='text-xs cursor-pointer'>Github</span>
          </Link>
          <Link href='mailto:email@s-brum.com'>
            <span className='text-xs cursor-pointer'>Email</span>
          </Link>
          <Link href={'/privacy-policy'}>
            <span className='text-xs cursor-pointer'>{t('privacy.headline')}</span>
          </Link>
        </div>
        <div className='flex flex-col items-center self-start justify-center'>
          <h2 className='py-2 font-mono text-2xl tracking-tight tablet:text-4xl'>
            {t('still_curious.text')}
          </h2>
          <div className='flex w-48 mx-auto'>
            <LineGroup length='w-1/3' />
          </div>
          <div className='text-sm tablet:text-lg font-body'>
            <div className='flex flex-1 w-64 px-8 my-4 justify-evenly'>
              <a
                href='https://www.linkedin.com/in/sebastien-brumbaugh-9306861a9/ '
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <LinkedInLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
              <a
                href='https://github.com/loknarb'
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <GithubLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
              <a
                href='mailto:email@s-brum.com'
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <AtLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-5/6 py-2 mx-auto text-center tablet:py-4 tablet:mt-6 '>
        <small className='text-xs'>{t('footer.text')}</small>
      </div>
    </>
  );
};

export default Footer;
