import React from 'react'

const Catagories = ({className, Usericon, ArrowIcon,title}) => {
  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex gap-x-3 items-center">
            <div className="font-bold text-lg text-CommonColor">
              {Usericon ? Usericon : "Icon Missing"}
            </div>
            <h2 className=" font-OpenSans tracking-wider text-base font-semibold leading-5 text-CommonColor">
              {title ? title : "Employee Info"}
            </h2>
          </div>
          <div className="text-2xl font-bold text-CommonColor pr-3">
            {ArrowIcon ? ArrowIcon : "Arrow Icon Missing"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catagories
