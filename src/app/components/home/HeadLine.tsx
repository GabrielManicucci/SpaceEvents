import Section from "@/components/Section";
import Image from "next/image";

export default function HeadLine() {
  return (
    <Section>
      <div className="flex flex-col text-left">
        <h4>Boas vindas a SpaceEvents</h4>
        <h1 className="text-3xl font-semibold text-indigo-950 mt-2 mb-5">
          Um lugar preparado exatamente para levar você à felicidade
        </h1>
      </div>

      <div className="h-auto w-full shadow-xl rounded-md">
        <Image
          src={"/EventSpaceImage1.png"}
          width={450}
          height={0}
          alt="imagem espaço de eventos"
          // className="w-full"
        />
      </div>

      <div className="flex flex-col mt-8 w-full">
        <button className="w-full py-5 rounded-xl bg-primaryBlue hover:bg-hoverBlue text-slate-50 font transition-colors">
          Conheça nosso espaço
        </button>
        <button className="w-full py-5 rounded-xl bg-green-500 text-slate-50 mt-2 hover:bg-hoverGreen transition-colors">
          Agende uma visita
        </button>
      </div>
    </Section>
  );
}
