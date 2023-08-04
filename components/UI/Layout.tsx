import React from 'react';
import Header from '../Header';
import FullLine from './FullLine';
import Footer from '../Footer';
import SidebarMobile from '../SidebarMobile';
type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [sidebar, setSidebar] = React.useState<boolean>(true);
  return (
    <>
      <Header sideBar={sidebar} setSidebar={setSidebar} />
      <FullLine className='opacity-10' />
      {children}
      <Footer />
      <div>
        <SidebarMobile sideBar={sidebar} setSidebar={setSidebar} />
      </div>
    </>
  );
};

export default Layout;
