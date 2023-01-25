import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { BsFillCaretDownFill } from 'react-icons/bs';

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
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
        className="bg-inherit text-gray-700 hover:text-white hover:bg-orange-500 text-sm font-bold uppercase px-4 py-2 rounded hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-zinc-400"
          }
        >
          User Layout
        </span>
        <Link
          to="/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Dashboard
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-zinc-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-zinc-400"
          }
        >
          Auth Layout
        </span>
        <Link
          to="/signin"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Register
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-zinc-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-zinc-400"
          }
        >
          Pages
        </span>
        <Link
          to="/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Landing
        </Link>
        <Link
          to="/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Profile
        </Link>
        <Link
          to="/store"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-zinc-700"
        >
          Store
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
