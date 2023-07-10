import Image from "next/image";

import { RxInstagramLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <div className="flex items-center justify-between p-5 bg-secondaryBlue text-white rounded">
      <div>
        <h1>EventsSpace</h1>
        <p>Todos os direitos reservados</p>
      </div>

      <div>
        <RxInstagramLogo size={24} />
      </div>
    </div>
  );
}
