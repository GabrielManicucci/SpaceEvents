/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Section from '@/components/Section'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// type Inputs = {
//   name: string
//   email: string
//   number: string
//   textarea: string
// }

const schema = z.object({
  name: z.string().nonempty({ message: 'must be 1 or more characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  number: z
    .string()
    .length(11, {
      message: 'must be contain DDD and cannot contain empty spaces',
    }),
  textarea: z.string().nonempty({ message: 'This field cannot be empty' }),
})

type userSchema = z.infer<typeof schema>

export default function Space() {
  const [value, setValue] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchema>({
    resolver: zodResolver(schema),
  })

  const sendMensage = (data: any) => {
    setValue(JSON.stringify(data))
  }

  return (
    <main className="mt-32 flex w-full flex-col justify-center">
      <Section
        style={'flex flex-col justify-center items-center p-2 mt-10 lg:mt-20'}
      >
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
            className="flex w-full flex-col px-5 pb-10 pt-10 md:flex-row md:justify-around xl:justify-center"
            onSubmit={handleSubmit(sendMensage)}
          >
            <div className="flex flex-[0_1_45%] flex-col xl:mr-5">
              <label htmlFor="name" className="text-sm">
                Nome
              </label>
              <input
                type="text"
                {...register('name')}
                name="name"
                id="name"
                placeholder="Nome"
                className="mb-2 rounded-md border-b border-indigo-950 bg-transparent p-3"
              />
              {errors.name && (
                <span className="mb-7 text-red-600">{errors.name.message}</span>
              )}
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                name="email"
                id="email"
                placeholder="Email"
                className="mb-2 rounded-md border-b border-indigo-950 bg-transparent p-3"
              />
              {errors.email && (
                <span className="mb-7 text-red-600">
                  {errors.email.message}
                </span>
              )}

              <label htmlFor="number" className="text-sm">
                Número
              </label>
              <input
                type="text"
                {...register('number')}
                name="number"
                id="number"
                placeholder="Número"
                className="mb-2 rounded-md border-b border-indigo-950 bg-transparent p-3 md:mb-0"
              />
              {errors.number && (
                <span className="mb-7 text-red-600">
                  {errors.number.message}
                </span>
              )}
            </div>

            <div className="flex flex-[0_1_45%] flex-col xl:ml-5">
              <label htmlFor="textarea" className="text-sm">
                Mensagem
              </label>

              <textarea
                // name="textarea"
                id="textarea"
                cols={0}
                rows={0}
                placeholder="Mensagem"
                className="mb-2 h-48
                 resize-none rounded-md border-b border-indigo-950 bg-transparent p-3"
                {...register('textarea')}
              ></textarea>
              {errors.textarea && (
                <span className="mb-7 text-red-600">
                  {errors.textarea.message}
                </span>
              )}

              <input
                type="submit"
                value="Enviar"
                className="rounded-lg bg-green-700 from-green-700 to-hoverGreen p-3 text-slate-50 duration-200 hover:scale-95 hover:bg-gradient-to-r"
              />
            </div>
          </form>
        </div>
        <div className="mt-10 flex flex-col">{value}</div>
      </Section>
    </main>
  )
}
