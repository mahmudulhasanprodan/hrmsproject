import React from 'react'
import { FaBars } from "react-icons/fa";

const HomepageRight = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="py-6 bg-HeaderColor">
          <div className="w-10 h-10 bg-BtnColorOne rounded flex items-center justify-center ml-10 cursor-pointer">
            <FaBars className="text-CommonColor text-2xl " />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageRight
