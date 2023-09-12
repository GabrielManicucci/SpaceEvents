'use client'

import Section from '@/components/Section'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export default function Space() {
  const selectedRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [value])

  function handleScrollClickRight() {
    value < 4 ? setValue(value + 1) : setValue(0)

    // selectedRef.current?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'nearest',
    //   inline: 'center',
    // })

    // console.log(`Dentro do escopo de uma função do componente: ${value}`)
  }

  function handleScrollClickLeft() {
    value > 0 ? setValue(value - 1) : setValue(4)

    // selectedRef.current?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'nearest',
    //   inline: 'center',
    // })

    // console.log(`Dentro do escopo de uma função do componente: ${value}`)
  }

  // console.log(`No escopo do componente:  ${value}`)

  const images = [
    {
      src: 'https://picsum.photos/700/500',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: 0,
    },
    {
      src: 'https://picsum.photos/700/500',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: 1,
    },
    {
      src: 'https://picsum.photos/700/500',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: 2,
    },
    {
      src: 'https://picsum.photos/700/500',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: 3,
    },
    {
      src: 'https://picsum.photos/700/500',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: 4,
    },
  ]

  return (
    <main className="mt-32 flex flex-col justify-center">
      <Section style={'max-w-full mt-10 lg:mt-20'}>
        <div className="mb-14 flex w-full flex-col items-center lg:mb-20">
          <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
            Espaço
          </h1>
          <div className="w-full border border-indigo-950 md:w-4/5"></div>
        </div>

        <div className="relative flex max-w-7xl items-center px-2 py-8  sm:px-14 sm:py-10">
          <button
            className="to-200% absolute bottom-0 left-0 right-auto top-0 z-10 flex items-center justify-center rounded border-none bg-gradient-to-l from-transparent from-0% to-slate-800 opacity-60 transition-all hover:opacity-100 sm:w-32 lg:w-48"
            onClick={handleScrollClickLeft}
          >
            <RiArrowLeftSLine size={52} className="" />
          </button>
          <button
            className="to-200% absolute bottom-0 left-auto right-0 top-0 z-10 flex items-center justify-center rounded border-none bg-gradient-to-r from-transparent from-0% to-slate-800 opacity-60 transition-all hover:opacity-100 sm:w-32 lg:w-48"
            onClick={handleScrollClickRight}
          >
            <RiArrowRightSLine size={52} />
          </button>

          <div className="flex snap-x flex-row flex-nowrap gap-4 overflow-x-auto overflow-y-hidden sm:gap-8">
            {images.map((image, index) => (
              <div
                className={
                  index === value
                    ? 'flex min-h-[200px] min-w-[300px] snap-center flex-col sm:min-h-[400px] sm:min-w-[450px] xl:min-h-[450px] xl:min-w-[550px]'
                    : 'flex min-h-[200px] min-w-[300px]  snap-center flex-col opacity-50 sm:min-h-[400px] sm:min-w-[450px] xl:min-h-[450px] xl:min-w-[550px]'
                }
                key={image.id}
                ref={index === value ? selectedRef : null}
              >
                <Image
                  src={image.src}
                  width={700}
                  height={500}
                  alt="teste"
                  className="h-auto w-full rounded-xl"
                />

                <div className="px-6 pt-6 text-indigo-950">
                  <h2 className="mb-1 text-lg font-semibold">{image.title}</h2>
                  <p className="text-sm font-normal">{image.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
