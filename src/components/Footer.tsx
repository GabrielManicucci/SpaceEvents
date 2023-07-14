import { RxInstagramLogo } from "react-icons/rx";
import { AiOutlineFacebook } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="flex items-center justify-between p-8 bg-gradient-to-r from-indigo-950 to-gradientColorBlue text-white rounded-md mb-2 mt-24">
      <div>
        <h1 className="text-lg mb-4">EventsSpace</h1>
        <p className="font-light text-sm text-slate-200">
          eventsSpace@gmail.com
        </p>
        <p className="font-light text-sm my-1 text-slate-200">33912345678</p>
        <p className="font-light text-sm text-slate-200">
          Todos os direitos reservados
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <RxInstagramLogo size={28} />
        <AiOutlineFacebook size={28} className="my-4" />
        <TbBrandTiktok size={28} />
      </div>
    </div>
  );
}
