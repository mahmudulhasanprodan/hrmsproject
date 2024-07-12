import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const LoginInput = () => {
  return (
    <>
      <div>
        <div>
          <div className="w-[400px] h-[260px] bg-CommonColor rounded-lg drop-shadow-boxshadow relative">
            <div className="w-32 h-[70px] bg-CommonColor rounded-full flex items-center justify-center absolute -top-8 left-2/4 -translate-x-1/2 drop-shadow-shadow">
              <h2 className="font-OpenSans font-bold text-3xl text-BtnColorOne">
                HRMS
              </h2>
            </div>
            <div className="flex flex-col gap-y-4 absolute top-2/4 -translate-y-[40%] left-2/4 -translate-x-1/2">
              <div className="flex items-center">
                <span className="py-3 w-10 flex items-center justify-center bg-[#F4F4F4] drop-shadow-shadow">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="username or email"
                  className="w-[300px] py-2 pl-3 bg-[#F4F4F4] drop-shadow-shadow focus:bg-white"
                />
              </div>
              <div className="flex items-center">
                <span className="py-3 w-10 flex items-center justify-center bg-[#F4F4F4] drop-shadow-shadow">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className="w-[300px] py-2 pl-3 bg-[#F4F4F4] drop-shadow-shadow focus:bg-white"
                />
              </div>
              <div className="drop-shadow-lg text-center">
                <button className="bg-[#18A689] hover:bg-[#1c9c83] w-[230px]  text-sm rounded-sm py-[6px] drop-shadow-lg font-OpenSans text-CommonColor">
                  Login
                </button>
              </div>
              <div>
                <h2 className="font-OpenSans text-sm text-red-600 hover:text-blue-500 cursor-pointer text-center">
                  Forgot Your Password?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginInput
