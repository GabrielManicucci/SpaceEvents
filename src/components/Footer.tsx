import { AiOutlineFacebook } from 'react-icons/ai'
import { RxInstagramLogo } from 'react-icons/rx'
import { TbBrandTiktok } from 'react-icons/tb'
import Doubts from './Doubts'

export default function Footer() {
  return (
    <div className="mb-2 mt-32 flex flex-col items-center justify-between rounded-md bg-gradient-to-r from-indigo-950 to-gradientColorBlue px-5 py-8 text-white">
      <Doubts />
      <div className="mt-24 flex w-full justify-between">
        <div>
          <h1 className="mb-4 text-lg">EventsSpace</h1>
          <p className="text-sm font-light text-slate-200">
            eventsSpace@gmail.com
          </p>
          <p className="my-1 text-sm font-light text-slate-200">33912345678</p>
          <p className="text-sm font-light text-slate-200">
            Todos os direitos reservados
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <RxInstagramLogo size={28} className="cursor-pointer" />
          <AiOutlineFacebook size={28} className="my-4 cursor-pointer" />
          <TbBrandTiktok size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
