import Image from "next/image";

export default function HeadLine() {
  return (
    <div className="flex items-center flex-col justify-center w-">
      <div>
        <h1>Um lugar onde você pode ser feliz</h1>
        <h4>Boas vindas a SpaceEvents</h4>

        <Image
          src={"/spaceImage.png"}
          width={80}
          height={80}
          alt="imagem espaço de eventos"
        />
      </div>
    </div>
  );
}
