import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import { LanguageSwitch } from './LanguageSwitch';
import NavItems from './NavItems';
import { SetBooleanValue, UseBooleanValue } from './types/types';
import LineGroup from './UI/LineGroup';
import MenuLogo from './UI/MenuLogo';
import PrimaryButton from './UI/PrimaryButton';
import { useRouter } from 'next/router';
const Header: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  const { width } = useWindowSize();
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };
  return (
    <nav className='flex items-center justify-between flex-1 h-24 px-10 py-3'>
      <button
        className='flex items-center text-5xl font-semibold -tracking-wider font-display'
        onClick={handleLogoClick}
        aria-label="Go to homepage">
        s
        <span className='flex w-5 px-1'>
          <LineGroup length='w-1/3' />
        </span>
        brum
      </button>
      {width! >= 992 && <NavItems />}
      {width! < 992 && sideBar && (
        <div className='flex justify-end'>
          <LanguageSwitch width={25} height={25} />
          <PrimaryButton onClick={() => setSidebar(false)} className='ml-4' aria-label="Close menu">
            <MenuLogo />
          </PrimaryButton>
        </div>
      )}
    </nav>
  );
};

export default Header;
