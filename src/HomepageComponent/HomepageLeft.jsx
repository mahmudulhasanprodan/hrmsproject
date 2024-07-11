import React from 'react'
import Catagories from './Catagories';
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import Dropdown from '../CommonComponent/Dropdown';



const HomepageLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="bg-CommonColor">
          <h2 className="font-OpenSans text-sm tracking-wider py-2 px-2 ml-10 cursor-pointer font-bold text-[#337ab7] hover:text-[#2b6496]">
            M/S. A.M.I & COMPANY
          </h2>
        </div>
        <div className="h-[100vh] bg-gradient-to-t from-SideVarColorTwo to-SideVarColorOne cursor-pointer pt-5">
          <div>
            <Catagories
              className={"py-2 pl-5 hover:bg-HoverColor"}
              title={"Employee Info"}
              Usericon={<FaUser />}
              ArrowIcon={<MdKeyboardArrowRight />}
            />
            <Dropdown />
          </div>
          <div>
            <Catagories
              className={"py-2 pl-5 hover:bg-HoverColor"}
              title={"Attendance & Leave"}
              Usericon={<FaEdit />}
              ArrowIcon={<MdKeyboardArrowRight />}
            />
          </div>
          <div>
            <Catagories
              className={"py-2 pl-5 hover:bg-HoverColor"}
              title={"Automated AMS"}
              Usericon={<AiOutlineBars />}
              ArrowIcon={<MdKeyboardArrowRight />}
            />
          </div>
          <div>
            <Catagories
              className={"py-2 pl-5 hover:bg-HoverColor"}
              title={"Compensation"}
              Usericon={<FaMoneyBillAlt />}
              ArrowIcon={<MdKeyboardArrowRight />}
            />
          </div>
          <div>
            <Catagories
              className={"py-2 pl-5 hover:bg-HoverColor"}
              title={"Help"}
              Usericon={<FaRegHandPointRight />}
              ArrowIcon={<MdKeyboardArrowRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageLeft
