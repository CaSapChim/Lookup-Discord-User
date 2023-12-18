// App.tsx
import React from 'react';
import UserInfo from './components/UserInfo';

const App: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <UserInfo/>
    </div>
  );
};

export default App;
