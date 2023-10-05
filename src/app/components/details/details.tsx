import Section from '@/components/Section'
import GoogleMap from '@/components/googleMap'
import { FaKitchenSet } from 'react-icons/fa6'
import { FaSwimmingPool } from 'react-icons/fa'
import { IoAccessibility } from 'react-icons/io5'

export default function Details() {
  return (
    <Section style={'flex items-center flex-col w-full mt-14 p-2'}>
      <h2 className="text-2xl font-semibold text-indigo-950">
        Veja mais detalhes
      </h2>

      <div className=" flex flex-col justify-between px-8 pb-4 pt-8 md:flex-row">
        <div className="flex flex-col items-center justify-center p-5 text-center">
          <FaKitchenSet size={52} className="text-green-700" />
          <p className="p-5 text-indigo-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            asperiores rerum.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center px-5 py-1 text-center md:py-0">
          <FaSwimmingPool size={52} className="text-green-700" />
          <p className="p-5 text-indigo-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            asperiores rerum.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 text-center">
          <IoAccessibility size={52} className="text-green-700" />
          <p className="p-5 text-indigo-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            asperiores rerum.
          </p>
        </div>
      </div>

      <GoogleMap />
    </Section>
  )
}
