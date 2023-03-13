import React from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import ResumeLink from './ResumeLink';

const NavItems = () => {
  return (
    <div className='flex gap-4 '>
      <LanguageSwitch width={'30px'} height={'30px'} />
      <ResumeLink />
    </div>
  );
};

export default NavItems;
