'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'

interface Props {
  openDropdown: boolean
  closeDropdown: boolean
  closeMenu(): void
}

const navLinks = [
  {
    href: '/',
    text: 'Início',
  },
  {
    href: '/components/about',
    text: 'Sobre',
  },
  {
    href: '/components/contact',
    text: 'Contato',
  },
  {
    href: '/components/space',
    text: 'Espaço',
  },
]

const Menu = ({ openDropdown, closeDropdown, closeMenu }: Props) => {
  const pathname = usePathname()

  function menuOpenOrClosed() {
    if (openDropdown) {
      console.log(openDropdown, closeDropdown)
      return 'animate-menuOpenDropdown relative flex flex-col text-left w-full h-[284px] mt-4 lg:flex lg:flex-row lg:w-[64%] lg:h-full lg:mt-0 justify-between'
    } else if (closeDropdown) {
      console.log(openDropdown, closeDropdown)
      return 'animate-menuCloseDropdown relative flex flex-col text-left w-full h-0 mt-0 lg:flex lg:flex-row lg:w-[64%] lg:h-full justify-between'
    } else {
      return 'hidden lg:flex flex-row lg:w-[64%] justify-between'
    }
  }

  menuOpenOrClosed()

  return (
    <div className={menuOpenOrClosed()}>
      <div className="lg:flex lg:items-center">
        {navLinks.map((link, index) => {
          // const isActive = pathname === link.href

          console.log(pathname)

          return (
            <Link
              href={link.href}
              className={
                closeDropdown
                  ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md aria-selected:border aria-selected:border-primaryBlue lg:mt-0 lg:flex lg:h-5/6 lg:border-none lg:px-3'
                  : 'ml-2 mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md aria-selected:bg-primaryBlue aria-selected:text-slate-50 lg:mt-0 lg:h-5/6 lg:border-none lg:px-6'
              }
              aria-selected={pathname === link.href}
              onClick={() => closeMenu()}
              key={index}
            >
              {link.text}
            </Link>
          )
        })}

        {/* <Link
          href={'/'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:h-[90%] lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:h-[90%] lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Início
        </Link>
        <Link
          href={'/components/about'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:h-[90%] lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:h-[90%] lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Sobre
        </Link>
        <Link
          href={'/components/contact'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-4 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:h-[90%] lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:h-[90%] lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Contato
        </Link> */}
      </div>

      <Link
        href={'/components/contact'}
        className={
          closeDropdown
            ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center justify-between rounded-lg bg-green-700 from-green-700 to-hoverGreen px-7 py-4 text-sm font-medium text-slate-50 transition-all duration-200 hover:scale-95 hover:border-none hover:bg-gradient-to-r lg:ml-7 lg:mt-0 lg:flex lg:w-60'
            : 'mt-2 flex animate-opacityEffect cursor-pointer items-center justify-between rounded-lg bg-green-700 from-green-700 to-hoverGreen px-7 py-4 text-sm font-medium text-slate-50 transition-all duration-200 hover:scale-95 hover:border-none hover:bg-gradient-to-r lg:ml-7 lg:mt-0 lg:w-60'
        }
        onClick={() => closeMenu()}
      >
        Agende uma visita
        <BsArrowRight size={28} />
      </Link>
    </div>
  )
}

export default Menu
