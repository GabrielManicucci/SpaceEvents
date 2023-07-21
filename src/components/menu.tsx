interface Props {
  openDropdown: boolean;
  closeDropdown: boolean;
}

const Menu = ({ openDropdown, closeDropdown }: Props) => {
  function menuOpenOrClosed() {
    if (openDropdown) {
      console.log(openDropdown, closeDropdown);
      return "animate-menuOpenDropdown relative flex flex-col text-left w-full h-[264px] mt-3";
    } else if (closeDropdown) {
      console.log(openDropdown, closeDropdown);
      return "animate-menuCloseDropdown relative flex flex-col text-left w-full h-0 mt-0";
    } else {
      return "hidden";
    }
  }

  menuOpenOrClosed();

  return (
    <div className={menuOpenOrClosed()}>
      <p
        className={
          closeDropdown
            ? "hidden"
            : "border hover:shadow-md px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
        }
      >
        Home
      </p>
      <p
        className={
          closeDropdown
            ? "hidden"
            : "border hover:shadow-md px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
        }
      >
        About
      </p>
      <p
        className={
          closeDropdown
            ? "hidden"
            : "border hover:shadow-md px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
        }
      >
        Contact
      </p>
      <p
        className={
          closeDropdown
            ? "hidden"
            : "border hover:shadow-md px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
        }
      >
        Space
      </p>
    </div>
  );
};

export default Menu;
