import React from 'react';
import { SetBooleanValue, UseBooleanValue } from './types/types';
import MenuLogo from './UI/MenuLogo';
import PrimaryButton from './UI/PrimaryButton';
const Header: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  return (
    <nav className='flex items-center justify-between flex-1 h-24 px-3 py-3'>
      <span className='text-5xl font-semibold -tracking-wider font-display'>s-brum</span>
      {sideBar && (
        <PrimaryButton onClick={() => setSidebar(false)}>
          <MenuLogo />
        </PrimaryButton>
      )}
    </nav>
  );
};

export default Header;
