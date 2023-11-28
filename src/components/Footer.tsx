import { AiOutlineFacebook } from 'react-icons/ai'
import { RxInstagramLogo } from 'react-icons/rx'
import { TbBrandTiktok } from 'react-icons/tb'
import Doubts from './Doubts'

export default function Footer() {
  return (
    <div className="mb-2 mt-32 flex flex-col items-center justify-between rounded-md bg-gradient-to-r from-indigo-950 to-gradientColorBlue px-8 py-8 text-white">
      <Doubts />
      <div className="mt-24 flex w-full justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-4 text-xl">EventsSpace</h1>
          </div>

          <div>
            <p className="text-sm font-light text-slate-200">
              eventsSpace@gmail.com
            </p>
            <p className="my-1 text-sm font-light text-slate-200">
              33912345678
            </p>
            <p className="text-sm font-light text-slate-200">
              Todos os direitos reservados
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
          <RxInstagramLogo size={32} className="cursor-pointer md:h-9 md:w-9" />
          <AiOutlineFacebook
            size={32}
            className="mx-4 my-3 cursor-pointer md:mx-6 md:h-9"
          />
          <TbBrandTiktok size={32} className="cursor-pointer md:h-9 md:w-9" />
        </div>
      </div>
    </div>
  )
}
