import React, { useState,useContext  } from 'react'
import Catagories from './Catagories';
import { EmployeeInfoData } from '../../Data/JasonData.jsx';
import { HandleleftItem } from '../Pages/Home/Home.jsx';





const HomepageLeft = ({className}) => {
 
  const Value = useContext(HandleleftItem);
  const[Showcollapse,setShowcollapse] = useState(
    EmployeeInfoData.map(() => false)
  )

  // CollapseIcon function start here 
  const CollapseIcon = (id) => {
    setShowcollapse((previousState) => {
        return previousState.map((value,index) => {
          return id === index ? !value : false;
        });
    });
  };




  return (
    <>
      {Value ? (
        <div className={className}>
          <div className="bg-CommonColor">
            <h2 className="font-OpenSans text-center text-sm tracking-wider py-2 px-2 cursor-pointer font-bold text-[#337ab7] hover:text-[#2b6496]">
              M/S. A.M.I & COMPANY
            </h2>
          </div>
          <div className="h-[100vh] bg-gradient-to-t from-SideVarColorTwo to-SideVarColorOne cursor-pointer pt-5">
            <div className="text-CommonColor flex flex-col">
              {EmployeeInfoData?.map((item, index) => (
                <div className="relative">
                  <div
                    key={item.id}
                    className={`py-3 font-bold text-lg pl-4 hover:bg-HoverColor hover:text-HoverDropdown ${
                      Showcollapse[index] && "bg-HoverColor text-HoverDropdown"
                    }`}
                    onClick={() => CollapseIcon(index)}
                  >
                    <h2>{item.iconOne ? item.iconOne : "Icon Missing"}</h2>
                    <div className="absolute top-0">
                      {Showcollapse[index] &&
                        item.subcatagories.map((subitem) => (
                          <div>
                            <div
                              className="ml-16  bg-black hover:bg-blue-600 flex flex-col w-48"
                              key={subitem.id}
                            >
                              <div className="pl-4">
                                <h2 className="py-2 font-OpenSans tracking-wider text-[11px] font-semibold leading-5 text-CommonColor">
                                  {subitem.InfoData}
                                </h2>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={className}>
          <div className="bg-CommonColor">
            <h2 className="font-OpenSans text-sm tracking-wider py-2 px-2 ml-6 cursor-pointer font-bold text-[#337ab7] hover:text-[#2b6496]">
              M/S. A.M.I & COMPANY
            </h2>
          </div>
          <div className="h-[100vh] bg-gradient-to-t from-SideVarColorTwo to-SideVarColorOne cursor-pointer pt-5">
            <div>
              <Catagories ItemData={EmployeeInfoData ? EmployeeInfoData : []} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomepageLeft
