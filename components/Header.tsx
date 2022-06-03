import React from 'react';
import MenuLogo from './UI/MenuLogo';
const Header = () => {
  return (
    <nav className='flex items-center justify-between flex-1 px-3 py-3'>
      <span className='text-5xl font-semibold -tracking-wider font-display'>s-brum</span>
      <MenuLogo />
    </nav>
  );
};

export default Header;
