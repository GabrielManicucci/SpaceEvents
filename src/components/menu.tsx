import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

interface Props {
  openDropdown: boolean
  closeDropdown: boolean
  closeMenu(): void
}

const Menu = ({ openDropdown, closeDropdown, closeMenu }: Props) => {
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
      <div className="lg:flex">
        <Link
          href={'/'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Início
        </Link>
        <Link
          href={'/components/about'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Sobre
        </Link>
        <Link
          href={'/components/contact'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-4 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          Contato
        </Link>
        <Link
          href={'/components/space'}
          className={
            closeDropdown
              ? 'mt-2 hidden animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-4 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:flex lg:border-none lg:px-3'
              : 'mt-2 flex animate-opacityEffect cursor-pointer items-center rounded-lg border px-7 py-3 text-sm transition-all hover:bg-gray-100 hover:shadow-md lg:mt-0 lg:border-none lg:px-6'
          }
          onClick={() => closeMenu()}
        >
          {/* <Link href={"/space"}>Space</Link> */}
          Espaço
        </Link>
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
