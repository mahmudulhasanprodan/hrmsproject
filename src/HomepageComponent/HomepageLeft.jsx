import React from 'react'
import Catagories from './Catagories';
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";




const HomepageLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="bg-CommonColor">
          <h2 className="font-OpenSans text-lg tracking-wider py-3 px-2 text-center cursor-pointer font-bold text-[#337ab7] hover:text-[#2b6496]">
            M/S. A.M.I & COMPANY
          </h2>
        </div>
        <div className="h-[100vh] bg-gradient-to-t from-SideVarColorTwo to-SideVarColorOne cursor-pointer pt-5">
          <Catagories
            className={"py-4 pl-5 hover:bg-HoverColor"}
            title={"Employee Info"}
            Usericon={<FaUser />}
            ArrowIcon={<MdKeyboardArrowRight />}
          />
           <Catagories
            className={"py-4 pl-5 hover:bg-HoverColor"}
            title={"Attendance & Leave"}
            Usericon={<FaEdit />}
            ArrowIcon={<MdKeyboardArrowRight />}
          />
           <Catagories
            className={"py-4 pl-5 hover:bg-HoverColor"}
            title={"Automated AMS"}
            Usericon={<AiOutlineBars />}
            ArrowIcon={<MdKeyboardArrowRight />}
          />
           <Catagories
            className={"py-4 pl-5 hover:bg-HoverColor"}
            title={"Compensation"}
            Usericon={<FaMoneyBillAlt />}
            ArrowIcon={<MdKeyboardArrowRight />}
          />
           <Catagories
            className={"py-4 pl-5 hover:bg-HoverColor"}
            title={"Help"}
            Usericon={<FaRegHandPointRight />}
            ArrowIcon={<MdKeyboardArrowRight />}
          />
        </div>
      </div>
    </>
  );
}

export default HomepageLeft
