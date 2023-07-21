"use client";

import { IoIosArrowDown } from "react-icons/io";

interface Props {
  id: number;
  title: string;
  content: string;
  status: boolean;
  handleClickQuestion(id: number, status: boolean): void;
}

export default function Question({
  id,
  title,
  content,
  status,
  handleClickQuestion,
}: Props) {
  return (
    <li
      className={
        status
          ? "flex flex-col px-8 py-9 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-700 bg-opacity-10 cursor-pointer"
          : "flex flex-col px-8 py-9 my-2 rounded-lg hover:bg-gradient-to-r from-indigo-900 to-blue-700 hover:bg-opacity-10 cursor-pointer"
      }
      onClick={() => handleClickQuestion(id, status)}
    >
      <div className="flex flex-row justify-between items-center text-base font-normal">
        {title}
        <IoIosArrowDown
          size={28}
          className={status ? "mb-5 rotate-180 duration-700" : "mb-5"}
        />
      </div>

      <div
        className={
          status
            ? "animate-doubtsDropdown my-5 text-sm font-light text-slate-200 h-20"
            : "hidden"
        }
      >
        {content}
      </div>
    </li>
  );
}
