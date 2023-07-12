interface Props {
  value: boolean;
}

const Menu = ({ value }: Props) => {
  return (
    <div className={value ? "flex flex-col text-left w-full" : "hidden"}>
      <p className="hover:shadow-lg px-3 py-2 cursor-pointer">Home</p>
      <p className=" hover:shadow-lg px-3 py-2 cursor-pointer">About</p>
      <p className=" hover:shadow-lg px-3 py-2 cursor-pointer">Services</p>
    </div>
  );
};

export default Menu;
