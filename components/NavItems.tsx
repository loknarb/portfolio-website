import React from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import ResumeLink from './ResumeLink';

const NavItems = () => {
  return (
    <div className='flex gap-4 '>
      <LanguageSwitch />
      <ResumeLink />
    </div>
  );
};

export default NavItems;
