"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./menu";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [closeDropdown, setCloseDropdown] = useState(false);

  return (
    <div className="absolute flex flex-col items-center justify-between px-5 py-8 bac bg-white mt-2 rounded-md w-full transition-transform">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-xl font-semibold text-green-700">EventsSpace</h1>

        <div className="md:hidden">
          <RxHamburgerMenu
            onClick={() => {
              if (!openDropdown) {
                setOpenDropdown(true);
                setCloseDropdown(false);
              }
            }}
            size={24}
            className={openDropdown ? "hidden" : "cursor-pointer"}
          />

          <AiOutlineClose
            onClick={() => {
              if (!closeDropdown) {
                setCloseDropdown(true);
                setOpenDropdown(false);
              }
            }}
            size={24}
            className={openDropdown ? "cursor-pointer" : "hidden"}
          />
        </div>
      </div>

      <Menu openDropdown={openDropdown} closeDropdown={closeDropdown} />
    </div>
  );
}
