'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import Menu from './menu'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [closeDropdown, setCloseDropdown] = useState(false)

  const closeMenu = () => {
    if (openDropdown) {
      setCloseDropdown(true)
      setOpenDropdown(false)
    }
  }

  return (
    <div className="bac absolute mt-2 flex w-full flex-col items-center justify-between rounded-md bg-white px-5 py-7 transition-transform lg:flex-row">
      <div className="flex w-full flex-row items-center justify-between lg:w-[36%]">
        <h1 className="text-xl font-semibold text-green-700">EventsSpace</h1>

        <div className="lg:hidden">
          <RxHamburgerMenu
            onClick={() => {
              if (!openDropdown) {
                setOpenDropdown(true)
                setCloseDropdown(false)
              }
            }}
            size={24}
            className={openDropdown ? 'hidden' : 'cursor-pointer'}
          />

          <AiOutlineClose
            onClick={() => {
              if (openDropdown) {
                setCloseDropdown(true)
                setOpenDropdown(false)
              }
            }}
            size={24}
            className={openDropdown ? 'cursor-pointer' : 'hidden'}
          />
        </div>
      </div>

      <Menu
        openDropdown={openDropdown}
        closeDropdown={closeDropdown}
        closeMenu={closeMenu}
      />
    </div>
  )
}
