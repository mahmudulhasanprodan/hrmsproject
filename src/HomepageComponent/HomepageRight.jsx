import React from 'react'
import { FaBars } from "react-icons/fa";

const HomepageRight = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="pt-3 h-14 bg-HeaderColor w-full">
          <div className="w-6 h-6 bg-BtnColorOne rounded flex items-center justify-center ml-6 cursor-pointer">
            <FaBars className="text-CommonColor text-sm" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageRight
