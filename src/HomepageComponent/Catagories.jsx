import React, { useState } from 'react'
import { MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md";

const Catagories = ({ItemData}) => {

  const[ShowCategories,setShowCategories] = useState(
    ItemData.map(() => false)
  );

  // HandleCatagories function start here 
  const HandleCatagories = (id) => {
    setShowCategories((previousState) => {
     return previousState.map((value,index) => {
        return id === index ? !value : false;
      })
    });
  };

  

  return (
    <>
      <div>
        <div className="flex flex-col cursor-pointer">
          {ItemData?.map((item, index) => (
            <div>
              <div
                className="flex items-center justify-between hover:bg-HoverColor pl-5"
                key={item.id}
                onClick={() => HandleCatagories(index)}
              >
                <div className="flex gap-x-3 items-center">
                  <div className="font-bold text-xs text-CommonColor">
                    {item.iconOne ? item.iconOne : "Icon Missing"}
                  </div>
                  <div className="py-2 font-OpenSans tracking-wider text-xs font-semibold leading-5 text-CommonColor">
                    <h2>{item.title}</h2>
                  </div>
                </div>

                <div className="text-lg font-bold text-CommonColor pr-3">
                  {ShowCategories[index] ? (
                    <MdKeyboardArrowDown className="text-HoverDropdown" />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                </div>
              </div>
              <div>
                {ShowCategories[index] &&
                  item.subcatagories.map((subitem) => (
                    <div
                      key={subitem.id}
                      className="pl-12 bg-DropDownColor  hover:bg-HoverColor"
                    >
                      <h2 className="py-2 font-OpenSans tracking-wider text-[11px] font-semibold leading-5 text-CommonColor hover:text-HoverDropdown">
                        {subitem.InfoData}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catagories
