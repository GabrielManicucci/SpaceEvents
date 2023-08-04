import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  openDropdown: boolean;
  closeDropdown: boolean;
}

const Menu = ({ openDropdown, closeDropdown }: Props) => {
  function menuOpenOrClosed() {
    if (openDropdown) {
      console.log(openDropdown, closeDropdown);
      return "animate-menuOpenDropdown relative flex flex-col text-left w-full h-[284px] mt-4 lg:flex lg:flex-row lg:w-[64%] lg:h-full lg:mt-0 justify-between";
    } else if (closeDropdown) {
      console.log(openDropdown, closeDropdown);
      return "animate-menuCloseDropdown relative flex flex-col text-left w-full h-0 mt-0 lg:flex lg:flex-row lg:w-[64%] lg:h-full justify-between";
    } else {
      return "hidden lg:flex flex-row lg:w-[64%] justify-between";
    }
  }

  menuOpenOrClosed();

  return (
    <div className={menuOpenOrClosed()}>
      <div className="lg:flex">
        <Link
          href={'/'}
          className={
            closeDropdown
              ? "hidden lg:flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:px-3 lg:border-none"
              : "flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:border-none lg:px-6"
          }
        >
          Home
        </Link>
        <Link
          href={'/components/about'}
          className={
            closeDropdown
              ? "hidden lg:flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:px-3 lg:border-none"
              : "flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:border-none lg:px-6"
          }
        >
          About
        </Link>
        <Link
          href={'/components/contact'}
          className={
            closeDropdown
              ? "hidden lg:flex items-center border hover:shadow-md px-7 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:px-3 lg:border-none"
              : "flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:border-none lg:px-6"
          }
        >
          Contact
        </Link>
        <Link
          href={'/components/space'}
          className={
            closeDropdown
              ? "hidden lg:flex items-center border hover:shadow-md px-7 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:px-3 lg:border-none"
              : "flex items-center border hover:shadow-md px-7 py-3 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all text-sm animate-opacityEffect lg:mt-0 lg:border-none lg:px-6"
          }
        >
          {/* <Link href={"/space"}>Space</Link> */}
          Space
        </Link>
      </div>

      <a
        className={
          closeDropdown
            ? "hidden lg:flex justify-between items-center bg-green-700 px-7 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gradient-to-r from-green-700 to-hoverGreen hover:scale-95 hover:border-none text-slate-50 transition-all duration-200 text-sm font-medium animate-opacityEffect lg:mt-0 lg:w-60 lg:ml-7"
            : "flex justify-between items-center bg-green-700 px-7 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gradient-to-r from-green-700 to-hoverGreen hover:scale-95 hover:border-none text-slate-50 transition-all duration-200 text-sm font-medium animate-opacityEffect lg:mt-0 lg:w-60 lg:ml-7"
        }
      >
        Agende uma visita
        <BsArrowRight size={28} />
      </a>
    </div>
  );
};

export default Menu;
