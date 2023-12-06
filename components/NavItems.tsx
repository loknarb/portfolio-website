import React from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import ResumeLink from './ResumeLink';
import Link from 'next/link';

const NavItems = () => {
  return (
    <div className='flex items-center gap-4'>
      <LanguageSwitch width={'30px'} height={'30px'} />
      <a
        className='flex flex-col px-2 py-2 transition-all duration-500 bg-transparent rounded border-zinc-600 border-opacity-20 hover:scale-105 hover:shadow-md shadow-zinc-200'
        href='https://www.recipes.s-brum.com'>
        Recipes
      </a>
      <ResumeLink button />
    </div>
  );
};

export default NavItems;
