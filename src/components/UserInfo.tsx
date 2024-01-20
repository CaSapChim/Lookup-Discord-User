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
        console.log(userData);
        setUserInfo(userData);
      } else {
        if (userId.length == 0)
          alert("Bạn chưa nhập id của người dùng.");
        else
          alert("Không tìm thấy dữ liệu của người dùng. Vui lòng kiểm tra lại id của họ.")
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
      <div className='w-full flex justify-center'>
        <input
          type="text"
          placeholder='Nhập id của người dùng'
          className='border-2 border-solid border-black rounded-md p-2 w-4/12'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onKeyDown={(e) => {
            if(e.key == "Enter")
              submitBtn();
          }}
        />
        <button
          className='ml-3 border-solid border-black border-2 rounded-md px-4 py-2'
          onClick={submitBtn}
        >
          Tìm
        </button>
      </div>

      {userInfo && (
        <div className='w-full flex justify-center'>
          <div className="flex w-[32rem] items-center gap-x-4 rounded-lg bg-white p-12 shadow-[-1.5rem_-1.5rem_0_0_#38BDF8] mt-20 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300">
            <div className="flex w-[24rem] items-center justify-center gap-4">
              <div className='mr-3 w-32 self-start rounded-full border-[8px] border-[#E6EFFA] group'>
                <a href={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.webp?size=1024`} target='_blank'>
                  <img
                    src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.webp?size=1024`}
                    alt="avatar"
                    className="relative rounded-[50%] hover:opacity-70 hover:cursor-pointer"
                  />
                  <span className='absolute -translate-y-16 translate-x-3.5 text-white font-bold invisible group-hover:visible select-none' style={{ userSelect: 'none', pointerEvents: 'none' }}>lấy full ảnh</span>
                </a>
              </div>
              <div className="space-y-7">
                <div>
                  <h1 className="text-3xl font-bold text-[#1C2B62]">{userInfo.username}</h1>
                  <h2 className="mt-1">{userInfo.global_name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
