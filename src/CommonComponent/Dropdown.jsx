import React from 'react'

const Dropdown = ({className}) => {
  return (
    <>
      <div className="bg-DropDownColor">
        <h2 className="font-OpenSans text-xs text-CommonColor tracking-wider py-2 hover:bg-HoverColor pl-12 hover:text-HoverDropdown">
          Employee List
        </h2>
        <p className="font-OpenSans text-xs text-CommonColor tracking-wider py-2 hover:bg-HoverColor pl-12 hover:text-HoverDropdown">
          Emergency Contact
        </p>
      </div>
    </>
  );
}

export default Dropdown
