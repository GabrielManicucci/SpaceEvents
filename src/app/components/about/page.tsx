import Section from '@/components/Section'
import MotionDiv from '@/components/motion'
import Image from 'next/image'

export default function Space() {
  return (
    <main className="mb-10 mt-32 flex w-full flex-col justify-center">
      <Section
        style={'flex flex-col justify-center p-2 mt-10 xl:gap-x-20 lg:mt-20'}
      >
        <MotionDiv>
          <div className="mb-14 flex flex-col items-center">
            <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
              Sobre Nós
            </h1>
            <div className="w-full border border-indigo-950 md:w-4/5"></div>
          </div>
        </MotionDiv>

        <div>
          <MotionDiv>
            <div className="grid-cols-2 gap-x-5 md:inline-grid lg:gap-x-12">
              <h2 className="items-end text-xl font-semibold text-green-700 md:flex md:py-3 lg:py-5 lg:text-2xl xl:pb-8">
                Lorem ipsum
              </h2>
              <div className="row-span-2 my-4 md:my-0 md:flex">
                <Image
                  src={'/workingPeoples2.png'}
                  width={700}
                  height={0}
                  className="max-h-[580px] w-full rounded-md shadow-lg"
                  alt="imagem pessoas trabalhando"
                />
              </div>
              <p className="items-start text-sm text-indigo-950 md:flex md:pb-3 md:text-base lg:pb-5 lg:text-lg xl:pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates architecto corporis hic reiciendis vitae sapiente
                possimus natus, et dolore ullam quas ducimus. Facere, tenetur
                nisi sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quaerat quam culpa suscipit!
              </p>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className="my-16 grid-cols-2 gap-x-5 md:inline-grid lg:gap-x-12">
              <h2 className="items-end text-xl font-semibold text-green-700 md:flex md:py-3 lg:py-5 lg:text-2xl xl:pb-8">
                Lorem ipsum
              </h2>
              <div className="col-start-1 col-end-2 row-span-2 row-start-1 row-end-3 my-4 md:my-0 md:flex">
                <Image
                  src={'/workingPeoples2.png'}
                  width={700}
                  height={0}
                  className="max-h-[580px] w-full rounded-md shadow-lg"
                  alt="imagem pessoas trabalhando"
                />
              </div>
              <p className="items-start text-sm text-indigo-950 md:flex md:pb-3 md:text-base lg:pb-5 lg:text-lg xl:pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates architecto corporis hic reiciendis vitae sapiente
                possimus natus, et dolore ullam quas ducimus. Facere, tenetur
                nisi sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quaerat quam culpa suscipit!
              </p>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className="grid-cols-2 gap-x-5 md:inline-grid lg:gap-x-12">
              <h2 className="items-end text-xl font-semibold text-green-700 md:flex md:py-3 lg:py-5 lg:text-2xl xl:pb-8">
                Lorem ipsum
              </h2>
              <div className="row-span-2 my-4 md:my-0 md:flex">
                <Image
                  src={'/workingPeoples2.png'}
                  width={700}
                  height={0}
                  className="max-h-[580px] w-full rounded-md shadow-lg"
                  alt="imagem pessoas trabalhando"
                />
              </div>
              <p className="items-start text-sm text-indigo-950 md:flex md:pb-3 md:text-base lg:pb-5 lg:text-lg xl:pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates architecto corporis hic reiciendis vitae sapiente
                possimus natus, et dolore ullam quas ducimus. Facere, tenetur
                nisi sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quaerat quam culpa suscipit!
              </p>
            </div>
          </MotionDiv>
        </div>
      </Section>
    </main>
  )
}
