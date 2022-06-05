import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import NavItems from './NavItems';
import { SetBooleanValue, UseBooleanValue } from './types/types';
import FullLine from './UI/FullLine';
import MenuLogo from './UI/MenuLogo';
import PrimaryButton from './UI/PrimaryButton';
const Header: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  const { width } = useWindowSize();
  return (
    <nav className='flex items-center justify-between flex-1 h-24 px-10 py-3'>
      <span className='flex items-center text-5xl font-semibold -tracking-wider font-display'>
        s
        <span className='flex w-5 px-1'>
          <FullLine className='w-1/3 border-b-4 border-yellow-200' />
          <FullLine className='w-1/3 border-b-4 border-pink-300' />
          <FullLine className='w-1/3 border-b-4 border-green-300' />
        </span>
        brum
      </span>
      {width! >= 992 && <NavItems />}
      {width! < 992 && sideBar && (
        <PrimaryButton onClick={() => setSidebar(false)}>
          <MenuLogo />
        </PrimaryButton>
      )}
    </nav>
  );
};

export default Header;
