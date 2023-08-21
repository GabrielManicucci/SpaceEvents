import Section from '@/components/Section'
import Image from 'next/image'

export default function Space() {
  const images = [
    {
      src: 'https://picsum.photos/1920/1080',
      title: 'Lorem Ipsun',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: (Math.random() * 10).toFixed(2),
    },
    {
      src: 'https://picsum.photos/1920/1080',
      title: 'Lorem Ipsun',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: (Math.random() * 10).toFixed(2),
    },
    {
      src: 'https://picsum.photos/1920/1080',
      title: 'Lorem Ipsun',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: (Math.random() * 10).toFixed(2),
    },
    {
      src: 'https://picsum.photos/1920/1080',
      title: 'Lorem Ipsun',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      id: (Math.random() * 10).toFixed(),
    },
  ]

  images.forEach((image) => console.log(image.id))

  return (
    <main className="mt-32 flex w-full flex-col justify-center">
      <Section style={'flex flex-col justify-center p-2 mt-34 lg:mt-20 w-full'}>
        <div className="mb-14 flex w-full flex-col items-center lg:mb-20">
          <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
            Espaço
          </h1>
          <div className="w-full border border-indigo-950 md:w-4/5"></div>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-scroll p-4">
          {images.map((image) => (
            <div className="flex min-w-full flex-col" key={image.id}>
              <Image
                src={image.src}
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto' }}
                alt="imagem SpaceEvents"
                className="snap-center"
              />

              <div className="p-9 text-indigo-950">
                <h2 className="mb-4 font-semibold">{image.title}</h2>
                <p className="text-sm">{image.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
