import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const HomepageRight = ({className,ItemCollapse}) => {



 
  return (
    <>
      <div className={className}>
        <div className="pt-3 h-16 bg-HeaderColor w-full">
          <div
            className="w-6 h-6 bg-BtnColorOne rounded flex items-center justify-center ml-6 cursor-pointer active:bg-green-400"
            onClick={ItemCollapse}
          >
            <FaBars className="text-CommonColor text-sm" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageRight
