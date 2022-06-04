import React from 'react';
import Body from './Body';
import SidebarMobile from './SidebarMobile';
import { SetBooleanValue, UseBooleanValue } from './types/types';
const Main: React.FC<{ sideBar: UseBooleanValue; setSidebar: SetBooleanValue }> = ({
  sideBar,
  setSidebar,
}) => {
  return (
    <div>
      <main className='px-10 pt-10'>
        <Body />
      </main>
      <SidebarMobile sideBar={sideBar} setSidebar={setSidebar} />
    </div>
  );
};

export default Main;
