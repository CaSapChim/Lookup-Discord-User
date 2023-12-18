// UserInfo.tsx
import React, { useState } from 'react';

interface UserData {
  id: string;
  username: string;
  global_name: string; 
  avatar: string;
  banner: string;
  bot: boolean;
}

const UserInfo: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/${userId}`);
      if (response.ok) {
        const userData: UserData = await response.json();
        setUserInfo(userData);
        console.log("data: ", userData);
      } else {
        console.error('Error fetching user info:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi khi lấy user info:', error);
    }
  };

  const submitBtn = () => {
    fetchUserInfo();
    setUserId("");
  };

  return (
    <>
      <div className=''>
        <h1 className='text-[#26c3eb] font-bold text-xl mt-8 mb-4'>Tìm kiếm thông tin người dùng Discord</h1>
        <input
          type="text"
          placeholder='Nhập id của người dùng'
          className='border border-solid border-black rounded-md p-2 w-4/12'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          className='ml-3 border border-solid border-black rounded-md px-4 py-2'
          onClick={submitBtn}
        >
          Tìm
        </button>
      </div>

      {userInfo && (
        <div className="flex w-[32rem] items-center gap-x-4 rounded-lg bg-white p-12 shadow-[-1.5rem_-1.5rem_0_0_#38BDF8]">
          <h2 className='text-lg font-semibold'>Thông tin người dùng:</h2>
          <div className="flex w-[20rem] items-center justify-center">
          <img
            src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.webp?size=1024`}
            alt="avatar"
            className="mr-3 w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
          />
          <div className="space-y-7">
            <div>
              <h1 className="text-3xl font-bold text-[#1C2B62]">{userInfo.username}</h1>
              <h2 className="mt-1">{userInfo.global_name}</h2>
            </div>

            <div className="items-center">
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 inline-block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                {userInfo.bot ? "Bot" : "Không phải là bot"}
              </p>

              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 inline-block h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                User id: {userInfo.id}
              </p>
            </div>
          </div>
        </div>
          {/* <img src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.webp?size=1024`} alt="avatar" />
          {userInfo.banner === null ? "Người dùng này không có banner" : <img src={`https://cdn.discordapp.com/banners/${userInfo.id}/${userInfo.banner}.gif?size=1024`} alt="banner" />}
          <p>ID: {userInfo.id}</p>
          <p>Tên người dùng: {userInfo.username}</p>
          <p>Global name: {userInfo.global_name}</p> */}
        </div>
      )}
    </>
  );
};

export default UserInfo;
