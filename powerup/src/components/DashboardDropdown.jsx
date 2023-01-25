import React, {useState} from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { BsFillCaretDownFill } from 'react-icons/bs';

const DashboardDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="bg-inherit text-gray-700 hover:text-white hover:bg-orange-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 cursor-pointer"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Trackers
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        
        <Link
          to="/trackers/calories-intake"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700 hover:bg-red-500 hover:text-white"
        >
          Calories Intake
        </Link>
        
        <Link
          to="/trackers/weight"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700 hover:bg-blue-500 hover:text-white"
        >
          Weight Tracker
        </Link>
        <Link
          to="/trackers/steps"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700 hover:bg-emerald-500 hover:text-white"
        >
          Steps Counter
        </Link>
        
        <Link
          to="/trackers/calories-burnt"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-violet-500 hover:text-white text-zinc-700"
        >
          Calories Burnt
        </Link>
        
      </div>
    </>
  );
};

export default DashboardDropdown;
