// App.tsx
import React from 'react';
import UserInfo from './components/UserInfo';

const App: React.FC = () => {
  return (
    <div className='container mx-auto p-4 flex h-screen w-full items-center justify-center bg-[#E6EFFA] '>
      <UserInfo/>
    </div>
  );
};

export default App;
