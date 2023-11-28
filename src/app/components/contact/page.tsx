'use client'

import Section from '@/components/Section'
import { useLayoutEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { gsap } from 'gsap'
import * as z from 'zod'

const schema = z.object({
  user: z
    .string()
    .nonempty({ message: 'O nome é obrigatório' })
    .toLowerCase()
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' '),
    ),
  email: z
    .string()
    .nonempty({ message: 'Email é obrigatório' })
    .email({ message: 'Endereço de email inválido' }),
  number: z.string().nonempty({ message: 'Número é obrigatório' }).length(11, {
    message: 'deve conter DDD e sem espaços',
  }),
  textarea: z.string().nonempty({ message: 'Mensagem de texto obrigatória' }),
})

type userSchema = z.infer<typeof schema>

export default function Space() {
  const [response, setResponse] = useState('')
  const [information, setInformation] = useState('')

  const responseContainerRef = useRef<HTMLDivElement | null>(null)
  const informationContainerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.fromTo(
      responseContainerRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 4, ease: 'sine.in' },
    )
  }, [response])

  useLayoutEffect(() => {
    gsap.fromTo(
      informationContainerRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 3, ease: 'sine.in' },
    )
  }, [information])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchema>({
    resolver: zodResolver(schema),
  })

  async function sendToEmail(data: object) {
    setInformation('true')

    const res = await fetch('http://localhost:3333/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const returnedData = await res.json()
    // console.log(JSON.stringify(returnedData))
    if (returnedData.message === 'email sent with sucessfull') {
      setResponse('true')
    } else {
      setResponse('false')
    }

    setTimeout(() => {
      setInformation('')
      setResponse('')
      console.log('interval ok')
    }, 4000)
  }

  return (
    <main className="mt-32 flex w-full flex-col justify-center">
      <Section
        style={'flex flex-col justify-center items-center p-2 mt-10 lg:mt-20'}
      >
        {information === 'true' ? (
          <div
            className="absolute top-[105px] z-50 w-80 rounded-xl bg-gray-500 p-3 text-sm text-slate-50 shadow-lg lg:top-[120px] lg:p-4"
            ref={informationContainerRef}
          >
            Email será enviado, aguarde para confirmação na tela
          </div>
        ) : (
          ''
        )}
        {response === 'true' ? (
          <div
            className="absolute top-[105px] z-50 w-80 rounded-xl bg-gray-500 p-3 text-sm text-green-300 shadow-lg lg:top-[120px] lg:p-4"
            ref={responseContainerRef}
          >
            Email enviado, retornaremos o mais rápido possível
          </div>
        ) : (
          ''
        )}
        {response === 'false' ? (
          <div
            className="absolute top-[115px] z-50 w-80 rounded-xl bg-gray-500 p-4 text-sm text-red-400 shadow-lg lg:top-[120px] lg:p-5"
            ref={responseContainerRef}
          >
            Email não enviado, contate a empresa
          </div>
        ) : (
          ''
        )}

        <div className="mb-14 flex w-full flex-col items-center lg:mb-20">
          <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
            Contate-nos
          </h1>
          <div className="w-full border border-indigo-950 md:w-4/5"></div>
        </div>

        <div className="flex w-full flex-col rounded-xl shadow-xl md:items-center">
          <div className="flex flex-col px-5 md:w-[95%] xl:px-7">
            <h2 className="text-lg font-medium text-indigo-950">
              Faca o seu orçamento
            </h2>
            <p className="text-sm text-indigo-950">Entraremos em contato</p>
          </div>

          <form
            action=""
            className="flex w-full flex-col px-5 pb-8 pt-7 md:flex-row md:justify-around xl:justify-center"
            onSubmit={handleSubmit(sendToEmail)}
          >
            <div className="flex flex-[0_1_45%] flex-col justify-between  xl:mr-5 ">
              <div className="mb-2 flex w-full flex-col">
                <label htmlFor="name" className="text-sm">
                  Nome
                </label>
                <input
                  type="text"
                  {...register('user')}
                  name="user"
                  id="name"
                  placeholder="Nome"
                  className="mb-1 rounded-md border-b border-indigo-950 bg-transparent p-3"
                />
                {errors.user && (
                  <span className="text-sm text-red-600">
                    {errors.user.message}
                  </span>
                )}
              </div>

              <div className="mb-2 flex w-full flex-col">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-1 rounded-md border-b border-indigo-950 bg-transparent p-3"
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="mb-2 flex w-full flex-col md:mb-0">
                <label htmlFor="number" className="text-sm">
                  Número
                </label>
                <input
                  type="text"
                  {...register('number')}
                  name="number"
                  id="number"
                  placeholder="Número"
                  className=" rounded-md border-b border-indigo-950 bg-transparent p-3 md:mb-0"
                />
                {errors.number && (
                  <span className="mt-1 text-sm text-red-600">
                    {errors.number.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-[0_1_45%] flex-col justify-between xl:ml-5">
              <div className="mb-3 flex flex-col">
                <label htmlFor="textarea" className="text-sm">
                  Mensagem
                </label>

                <textarea
                  // name="textarea"
                  id="textarea"
                  cols={0}
                  rows={0}
                  placeholder="Mensagem"
                  className="mb-1 h-40
                 resize-none rounded-md border-b border-indigo-950 bg-transparent p-3"
                  {...register('textarea')}
                ></textarea>
                {errors.textarea && (
                  <span className="text-sm text-red-600">
                    {errors.textarea.message}
                  </span>
                )}
              </div>

              <input
                type="submit"
                value="Enviar"
                className="rounded-lg bg-green-700 from-green-700 to-hoverGreen p-4 text-slate-50 duration-200 hover:scale-95 hover:bg-gradient-to-r"
              />
            </div>
          </form>
        </div>
      </Section>
    </main>
  )
}
