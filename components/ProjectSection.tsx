import React from 'react';
import { useTranslation } from 'next-i18next';
import BlackDesktop from './UI/BlackDesktop';
import H2Simple from './UI/H2Simple';
import LineGroup from './UI/LineGroup';
import PrimaryButton from './UI/PrimaryButton';

const ProjectSection = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='items-center w-full grid-cols-3 my-20 tablet:flex-row-reverse tablet:flex tablet:justify-evenly desktop:px-44'>
        <BlackDesktop className=' mx-auto tablet:py-0 tablet:mx-0 tablet:flex-1 tablet:flex-shrink-0 tablet:h-[400px] tablet:w-[400px] w-64 h-64 tablet:ml-8 -mb-6' />
        <div className='max-w-4xl p-4 border rounded shadow-md border-zinc-600 border-opacity-20 tablet:mx-auto shadow-zinc-800'>
          <H2Simple>{t('projects.title')}</H2Simple>
          <div className='flex tablet:w-60'>
            <LineGroup length='w-20' />
          </div>
          <div className='grid grid-cols-2 gap-2 w-[85%] mx-auto my-4 tablet:grid-cols-3 desktop:gap-10'>
            <a href='https://github.com/loknarb/news-gallery'>
              <PrimaryButton className='justify-around tablet:h-32 hover:border hover:border-zinc-600 hover:shadow-pink-300/10'>
                <span className='text-lg leading-4 font-display -tracking-wider'>news-gallery</span>
                <span className='text-sm font-body'>react / typescript </span>
              </PrimaryButton>
            </a>
            {/* <a href='https://github.com/loknarb/stopwatch'>
              <PrimaryButton className='justify-around border rounded tablet:h-32 hover:border-zinc-600 hover:shadow-green-300/10'>
                <span className='text-lg leading-4 font-display -tracking-wider'>stopwatch</span>
                <span className='text-sm font-body'>python / tkinter </span>
              </PrimaryButton>
            </a> */}
            <a href='https://github.com/loknarb/state-management-comparison'>
              <PrimaryButton className='justify-around border rounded tablet:h-32 hover:border-zinc-600 hover:shadow-yellow-200/10'>
                <span className='text-lg leading-4 font-display -tracking-wider'>
                  state-comparer
                </span>
                <span className='text-sm font-body'>nextjs / typescript </span>
              </PrimaryButton>
            </a>
            <a href='https://www.recipes.s-brum.com/'>
              <PrimaryButton className='justify-around tablet:h-32 hover:border hover:border-zinc-600 hover:shadow-pink-300/10'>
                <span className='text-lg leading-4 font-display -tracking-wider'>recipes</span>
                <span className='text-sm font-body'>remix / typescript / prisma </span>
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
