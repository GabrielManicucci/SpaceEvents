import Section from '@/components/Section'
import Link from 'next/link'

export default function Contact() {
  return (
    <Section
      style={'flex items-center flex-col justify-center p-2 mt-7 md:py-12'}
    >
      <h2 className="text-xl font-semibold text-indigo-950">EventsSpace</h2>
      <p className="my-3 md:my-6">Atendimento personalizado</p>
      <Link
        href={'/components/contact'}
        className="w-full rounded-xl bg-blue-950 from-blue-950  to-gradientColorBlue py-5 text-center text-slate-50 duration-200 hover:scale-95 hover:bg-gradient-to-r md:w-8/12 md:py-7 lg:w-1/2"
      >
        Faça o seu orçamento
      </Link>
    </Section>
  )
}
