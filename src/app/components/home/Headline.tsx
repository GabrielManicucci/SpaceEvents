import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function HeadLine() {
  return (
    <Section
      style={
        'flex flex-col justify-center p-2 mt-12 md:mt-20 md:grid grid-cols-2 gap-9 xl:gap-x-20 xl:gap-y-0 lg:mt-24'
      }
    >
      <div className="flex flex-col text-left text-indigo-950">
        <h4>Boas vindas a SpaceEvents</h4>
        <h1 className="mb-5 mt-2 text-4xl font-semibold text-indigo-950 xl:text-5xl">
          Um lugar preparado exatamente para levar você à felicidade
        </h1>
        <p className="lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit! Expedita eum consequatur blanditiis nemo magnam
          reiciendis, consectetur vel fugit assumenda rem.
        </p>
      </div>

      <div className="row-span-2 flex">
        <Image
          src={'/EventSpaceImage1.png'}
          width={700}
          height={500}
          className="max-h-[580px] w-full rounded-md shadow-lg"
          alt="imagem espaço de eventos"
        />
      </div>

      <div className="mt-3 flex w-full flex-col md:mt-0 md:flex-row">
        <Link
          href={'/components/space'}
          className="mb-2 flex w-full justify-between rounded-lg bg-blue-950 from-indigo-950 to-gradientColorBlue p-7 text-slate-50 transition duration-200 hover:scale-95 hover:bg-gradient-to-r md:mb-0 md:mr-2 md:flex-col md:py-8 md:text-left lg:px-12 lg:py-9 lg:text-xl lg:font-medium xl:text-2xl"
        >
          Conheça nosso espaço
          {/* <HiOutlineArrowRight size={24} /> */}
          <BsArrowRight size={28} />
        </Link>
        <Link
          href={'/components/contact'}
          className="flex w-full justify-between rounded-lg bg-green-700 from-green-700 to-hoverGreen p-7 text-slate-50 duration-200 hover:scale-95 hover:bg-gradient-to-r md:mb-0 md:flex-col md:p-7 md:text-left lg:px-12 lg:py-9 lg:text-xl lg:font-medium xl:text-2xl"
        >
          Agende uma visita
          <BsArrowRight size={28} />
        </Link>
      </div>
    </Section>
  )
}
