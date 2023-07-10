import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between rounded-sm p-5 bac bg-white mt-3 rounded">
      <h1 className="text-xl font-semibold text-green-500">EventsSpace</h1>

      <div>
        <RxHamburgerMenu size={24} />
      </div>
    </div>
  );
}
