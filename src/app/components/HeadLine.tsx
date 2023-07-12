import Image from "next/image";

export default function HeadLine() {
  return (
    <div className="flex items-center flex-col justify-center p-2 mt-11">
      <div className="flex flex-col text-left">
        <h4>Boas vindas a SpaceEvents</h4>
        <h1 className="text-3xl font-semibold text-indigo-950 mt-2 mb-5">
          Um lugar preparado exatamente para levar você à felicidade
        </h1>
      </div>

      <Image
        src={"/spaceImage.png"}
        width={400}
        height={0}
        alt="imagem espaço de eventos"
        // className="w-full"
      />

      <div className="flex flex-col my-10 w-full">
        <button className="w-full py-5 rounded-xl bg-primaryBlue hover:bg-hoverBlue text-slate-50 font">
          Conheça nosso espaço
        </button>
        <button className="w-full py-5 rounded-xl bg-green-500 text-slate-50 mt-2 hover:bg-hoverGreen">
          Agende uma visita
        </button>
      </div>
    </div>
  );
}
