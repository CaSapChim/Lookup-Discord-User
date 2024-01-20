// App.tsx
import React from 'react';
import UserInfo from './components/UserInfo';

const App: React.FC = () => {
  return (
    <div className='h-screen w-full bg-[#E6EFFA] '>
        <h1 className='text-[#26c3eb] font-bold text-2xl text-center p-3'>Tìm kiếm thông tin người dùng Discord</h1>
        <br />
      <UserInfo/>
    </div>
  );
};

export default App;
