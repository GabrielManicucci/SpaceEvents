'use client'

import { IoIosArrowDown } from 'react-icons/io'

interface Props {
  id: number
  title: string
  content: string
  status: boolean
  handleClickQuestion(id: number, status: boolean): void
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
          ? 'flex cursor-pointer flex-col rounded-lg bg-opacity-10 bg-gradient-to-r from-indigo-900 to-blue-700 px-8 py-9'
          : 'my-2 flex cursor-pointer flex-col rounded-lg from-indigo-900 to-blue-700 px-8 py-9 hover:bg-opacity-10 hover:bg-gradient-to-r'
      }
      onClick={() => handleClickQuestion(id, status)}
    >
      <div className="flex flex-row items-center justify-between text-base font-normal">
        {title}
        <IoIosArrowDown
          size={28}
          className={status ? 'mb-5 rotate-180 duration-700' : 'mb-5'}
        />
      </div>

      <div
        className={
          status
            ? 'my-5 h-20 animate-doubtsDropdown text-sm font-light text-slate-200'
            : 'hidden'
        }
      >
        {content}
      </div>
    </li>
  )
}
