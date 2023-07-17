interface Props {
  value: boolean;
}

const Menu = ({ value }: Props) => {
  return (
    <div className={value ? "flex flex-col text-left w-full mt-3" : "hidden"}>
      <p className="border  px-5 py-4 mt-2 cursor-pointer rounded-lg hover:shadow-lg hover:bg-gray-100 transition-all">
        Home
      </p>
      <p className="border hover:shadow-md px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all">
        About
      </p>
      <p className="border hover:shadow-lg px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all">
        Contact
      </p>
      <p className="border hover:shadow-lg px-5 py-4 mt-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-all">
        Space
      </p>
    </div>
  );
};

export default Menu;
