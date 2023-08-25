import Section from '@/components/Section'
import Image from 'next/image'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export default function Space() {
  const images = [
    {
      src: 'https://picsum.photos/650/450',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: (Math.random() * 10).toFixed(2),
      // width: 650,
      // height: 450,
    },
    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet iure labore at harum aperiam voluptatum totam cum molestias cupiditate possimus,
    {
      src: 'https://picsum.photos/650/450',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: (Math.random() * 10).toFixed(2),
      // width: 650,
      // height: 450,
    },
    {
      src: 'https://picsum.photos/650/450',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: (Math.random() * 10).toFixed(2),
      // width: 650,
      // height: 450,
    },
    {
      src: 'https://picsum.photos/650/450',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: (Math.random() * 10).toFixed(),
      // width: 650,
      // height: 450,
    },
    {
      src: 'https://picsum.photos/650/450',
      title: 'Lorem Ipsun',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. quam sunt corrupti laborum nobis. Facilis, mollitia. Aspernatur, culpa?',
      id: (Math.random() * 10).toFixed(),
      // width: 650,
      // height: 450,
    },
  ]

  images.forEach((image) => console.log(image.id))

  // const styles = 'flex flex-col justify-center p-2 mt-34 lg:mt-20'

  return (
    <main className="mt-32 flex flex-col justify-center">
      <Section style={'max-w-full mt-10 lg:mt-20'}>
        <div className="mb-14 flex w-full flex-col items-center lg:mb-20">
          <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
            Espaço
          </h1>
          <div className="w-full border border-indigo-950 md:w-4/5"></div>
        </div>

        <div className="relative flex max-w-7xl items-center px-14 py-10">
          <button className="absolute bottom-0 left-0 right-auto top-0 z-10 flex w-20 items-center justify-center rounded border-none bg-gradient-to-l from-transparent from-0% to-slate-800 to-200% opacity-60 transition-all  hover:opacity-100 md:w-32">
            <RiArrowLeftSLine size={76} className="" />
          </button>
          <button className="absolute bottom-0 left-auto right-0 top-0 z-10 flex w-20 items-center justify-center rounded border-none bg-gradient-to-r from-transparent from-0% to-slate-800 to-200% opacity-60 transition-all hover:opacity-100 md:w-32">
            <RiArrowRightSLine size={76} />
          </button>

          <div className="flex flex-row flex-nowrap gap-8 overflow-x-auto overflow-y-hidden snap-x">
            {images.map((image) => (
              <div className="flex min-w-[600px] flex-col snap-center" key={image.id}>
                <Image
                  src={image.src}
                  width={600}
                  height={400}
                  alt="teste"
                  // style={{ width: '100%', height: 'auto' }}
                  className="h-auto w-full rounded-xl"
                />

                <div className="px-8 pt-10 pb-8 text-indigo-950">
                  <h2 className="text-lg font-semibold mb-1">{image.title}</h2>
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
