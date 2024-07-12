import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import Footer from '../CommonComponent/Footer/Footer';



const HomepageRight = ({className,ItemCollapse}) => {

 
  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between h-16 bg-HeaderColor w-full">
          <div
            className="w-6 h-6 bg-BtnColorOne rounded flex items-center justify-center ml-6 cursor-pointer active:bg-green-400"
            onClick={ItemCollapse}
          >
            <FaBars className="text-CommonColor text-sm" />
          </div>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <span className="font-bold text-xl text-gray-600">
                <FaUsers />
              </span>
              <h2 className="font-OpenSans text-base font-semibold text-gray-600">
                My Approval
              </h2>
            </div>
            <div className="font-bold text-xl cursor-pointer text-gray-600">
              <IoIosNotifications />
            </div>
            <div className="flex items-center gap-x-3 pr-6 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <LuUser2 />
              </div>
              <div>
                <h1>bhabanipur</h1>
                <div className="flex items-center gap-x-1">
                  <p>user</p>
                  <span className="text-lg pt-1">
                    <TiArrowSortedDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-[100vh] justify-end">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomepageRight
