import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section
      style={"flex items-center flex-col justify-center p-2 mt-20 w-full"}
    >
      <Card>
        <Image
          src={"/workingPeoples2.png"}
          width={700}
          height={0}
          alt="imagem pessoas trabalhando"
          className="rounded-t-xl md:w-[45%] bg-contain"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="text-2xl font-semibold text-indigo-950 my-3">
            About we
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Button
            className={
              "w-full bg-transparent transition-colors hover:border-0 hover:text-slate-50 hover:bg-gradient-to-r from-primaryBlue to-green-500 border border-indigo-950 p-3 mt-4 rounded-md"
            }
          >
            Saiba mais
          </Button>
        </div>
      </Card>

      <Card>
        <Image
          src={"/SpaceEventsImage3.png"}
          width={700}
          height={0}
          alt="imagem pessoas trabalhando"
          className="rounded-t-xl md:min-h-full md:w-[45%] bg-cover bg-no-repeat bg-center relative"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="text-2xl font-semibold text-indigo-950 my-3">Space</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Button
            className={
              "w-full bg-transparent transition-colors hover:border-0 hover:text-slate-50 hover:bg-gradient-to-r from-primaryBlue to-green-500 border border-indigo-950 p-3 mt-4 rounded-md"
            }
          >
            Saiba mais
          </Button>
        </div>
      </Card>

      <Card>
        <Image
          src={"/SpaceEventsLocation.png"}
          width={700}
          height={0}
          alt="imagem pessoas trabalhando"
          className="rounded-t-xl md:w-[45%]"
        />
        <div className="flex flex-col justify-center p-9 md:w-[55%]">
          <h2 className="text-2xl font-semibold text-indigo-950 my-3">
            Location
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            error fuga pariatur ut? Impedit consectetur laudantium, eligendi
            deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
            consequuntur iusto libero, tempore ad beatae qui rem excepturi
            facilis veniam eum consequuntur iusto libero!
          </p>

          <Button
            className={
              "w-full bg-transparent transition-colors hover:border-0 hover:text-slate-50 hover:bg-gradient-to-r from-primaryBlue to-green-500 border border-indigo-950 p-3 mt-4 rounded-md"
            }
          >
            Saiba mais
          </Button>
        </div>
      </Card>
    </Section>
  );
}
