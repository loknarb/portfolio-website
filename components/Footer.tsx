import { useTranslation } from 'next-i18next';
import React from 'react';
import AtLogo from './UI/AtLogo';
import GithubLogo from './UI/GithubLogo';
import LineGroup from './UI/LineGroup';
import LinkedInLogo from './UI/LinkedInLogo';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='flex mt-20'>
        <LineGroup length={'w-1/3'} />
      </div>
      <div className='flex flex-col justify-center mt-6 text-center bg-transparent tablet:mt-12 tablet:flex-row h-44'>
        <div className='flex-auto flex-grow-[50] w-[50%] flex items-center p-4 justify-center'>
          <h2 className='font-mono text-2xl tablet:text-4xl -tracking-wide'>
            {t('still_curious.title')}
          </h2>
        </div>
        <div className='flex-auto tablet:flex-grow-[50] tablet:w-[50%] flex flex-col items-center justify-center text-zinc-900px-2'>
          <h2 className='py-2 font-mono text-2xl tablet:text-4xl -tracking-wide'>
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
                href='mailto:contact@s-brum.com'
                className={'hover:scale-110 transition-transform duration-500'}
                target={'_blank'}>
                <AtLogo className='w-7 h-7 tablet:w-10 tablet:h-10' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-5/6 py-4 mx-auto mt-6 text-center '>
        <small className='text-xs tablet:text-sm'>{t('footer.text')}</small>
      </div>
    </>
  );
};

export default Footer;
