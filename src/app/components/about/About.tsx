import Card from '@/components/Card'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <Section
      style={'flex items-center flex-col justify-center p-2 mt-20 w-full'}
    >
      <Card>
        <Image
          src={'/workingPeoples2.png'}
          width={700}
          height={0}
          alt="imagem pessoas trabalhando"
          className="rounded-t-xl bg-cover bg-center bg-no-repeat md:w-[45%]"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="my-3 text-2xl font-semibold text-indigo-950">
            Sobre nós
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Link
            href={'/components/about'}
            className={
              'mt-4 w-full rounded-md border border-indigo-950 bg-transparent from-primaryBlue to-green-500 p-4 text-center transition-transform duration-200 hover:scale-95 hover:border-transparent hover:bg-gradient-to-r hover:text-slate-50'
            }
          >
            Saiba mais
          </Link>
        </div>
      </Card>

      <Card>
        <Image
          src={'/SpaceEventsImage3.png'}
          width={700}
          height={0}
          alt="Imagem da área de lazer do SpaceEvents"
          className="rounded-t-xl bg-cover bg-center bg-no-repeat md:w-[45%]"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="my-3 text-2xl font-semibold text-indigo-950">
            Espaço
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Link
            href={'/components/about'}
            className={
              'mt-4 w-full rounded-md border border-indigo-950 bg-transparent from-primaryBlue to-green-500 p-4 text-center transition-transform duration-200 hover:scale-95 hover:border-transparent hover:bg-gradient-to-r hover:text-slate-50'
            }
          >
            Saiba mais
          </Link>
        </div>
      </Card>

      <Card>
        <Image
          src={'/SpaceEventsLocation.png'}
          width={700}
          height={0}
          alt="imagem pessoas trabalhando"
          className="rounded-t-xl bg-cover bg-center bg-no-repeat md:w-[45%]"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="my-3 text-2xl font-semibold text-indigo-950">
            Localização
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Link
            href={'/components/about'}
            className={
              'mt-4 w-full rounded-md border border-indigo-950 bg-transparent from-primaryBlue to-green-500 p-4 text-center transition-transform duration-200 hover:scale-95 hover:border-transparent hover:bg-gradient-to-r hover:text-slate-50'
            }
          >
            Saiba mais
          </Link>
        </div>
      </Card>
    </Section>
  )
}
