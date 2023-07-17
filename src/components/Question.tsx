"use client";

import { IoIosArrowDown } from "react-icons/io";

interface Props {
  id: number;
  title: string;
  content: string;
  status: boolean;
  handleClickQuestion(key: number, status: boolean): void;
}

export default function Question({
  id,
  title,
  content,
  status,
  handleClickQuestion,
}: Props) {
  // console.log({
  //   id,
  //   title,
  //   content,
  //   status,
  // });
  return (
    <li
      className="flex flex-col px-4 py-5 rounded-lg hover:bg-gradient-to-r from-indigo-900 to-blue-700 hover:bg-opacity-10"
      onClick={() => handleClickQuestion(id, status)}
    >
      <div className="flex flex-row justify-between items-center text-base font-normal">
        {title}
        <IoIosArrowDown size={28} className="mb-5" />
      </div>

      <div
        className={status ? "my-5 text-sm font-light text-slate-200" : "hidden"}
      >
        {content}
      </div>
    </li>
  );
}
