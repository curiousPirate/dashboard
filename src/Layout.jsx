import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Filter from './Filter';
import MainData from './MainData';

function Layout() {
  const [displayContent, setDisplayContent] = useState('Default Content');

  return (
    <div className="flex h-screen">
      <Sidebar setDisplayContent={setDisplayContent} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col md:flex-row">
          <Filter />
          <MainData content={displayContent} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
