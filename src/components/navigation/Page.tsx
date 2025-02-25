import React, { FC, ReactNode } from 'react';

import Footer from './Footer';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Page: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      <NavBar />
      <main className="main-content flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
