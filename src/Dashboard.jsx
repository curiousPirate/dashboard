import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AddContent from './AddContent';
import MainData from './MainData';

function Dashboard() {
  const [displayContent, setDisplayContent] = useState('Default Content');

  return (
    <div className="flex h-screen">
      <Sidebar setDisplayContent={setDisplayContent} />
      <div className=" flex flex-col w-full">
        <Header />
        <AddContent />
        <div className="flex flex-col md:flex-row">
          
          <MainData content={displayContent} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
