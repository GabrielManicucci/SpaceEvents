import Section from "@/components/Section";
import Image from "next/image";

export default function HeadLine() {
  const imageStyle = {
    borderRadius: "20px",
  };
  return (
    <Section
      style={
        "flex items-center flex-col justify-center p-2 mt-10 md:grid grid-cols-2 gap-9"
      }
    >
      <div className="flex flex-col text-left">
        <h4>Boas vindas a SpaceEvents</h4>
        <h1 className="text-4xl font-semibold text-indigo-950 mt-2 mb-5">
          Um lugar preparado exatamente para levar você à felicidade
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit! Expedita eum consequatur blanditiis nemo magnam
          reiciendis, consectetur vel fugit assumenda rem.
        </p>
      </div>

      <div className="flex max-w-md min-h-[500px] row-span-2">
        <Image
          src={"/EventSpaceImage1.png"}
          width={700}
          height={500}
          className="rounded-md shadow-lg h-full"
          alt="imagem espaço de eventos"
        />
      </div>

      <div className="flex flex-col mt-8 w-full md:flex-row md:mt-0">
        <button className="w-full py-5 mb-2 rounded-lg bg-blue-950 hover:bg-gradient-to-r from-indigo-950 to-gradientColorBlue text-slate-50 transition-colors md:mr-2 md:py-8 md:mb-0">
          Conheça nosso espaço
        </button>
        <button className="w-full py-5 rounded-lg bg-green-700 text-slate-50 hover:bg-gradient-to-r from-green-700 to-hoverGreen transition-colors">
          Agende uma visita
        </button>
      </div>
    </Section>
  );
}
