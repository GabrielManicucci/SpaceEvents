"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./menu";
import { useState } from "react";

export default function Navbar() {
  const [value, setValue] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between p-3 bac bg-white mt-2 rounded-md w-full">
      <div className="flex flex-row items-center justify-between w-full p-3">
        <h1 className="text-xl font-semibold text-green-700">EventsSpace</h1>

        <RxHamburgerMenu
          onClick={() => (value ? setValue(false) : setValue(true))}
          size={24}
          className={value ? "hidden" : ""}
        />

        <AiOutlineClose
          onClick={() => (value ? setValue(false) : setValue(true))}
          size={24}
          className={value ? "" : "hidden"}
        />
      </div>

      <Menu value={value} />
    </div>
  );
}
