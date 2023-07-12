import Card from "@/components/Card";
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section>
      <Card>
        <h2 className="text-xl font-semibold text-indigo-950 my-3">About we</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          error fuga pariatur ut? Impedit consectetur laudantium, eligendi
          deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
          consequuntur iusto libero!
        </p>

        <Image
          src={"/WorkingPeoples.png"}
          width={400}
          height={0}
          alt="imagem pessoas trabalhando"
        />
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-indigo-950 my-3">Space</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          error fuga pariatur ut? Impedit consectetur laudantium, eligendi
          deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
          consequuntur iusto libero!
        </p>

        <Image
          src={"/SpaceEvents2.png"}
          width={400}
          height={0}
          alt="imagem espaço de eventos"
        />
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-indigo-950 my-3">Location</h2>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          error fuga pariatur ut? Impedit consectetur laudantium, eligendi
          deserunt, tempore ad beatae qui rem excepturi facilis veniam eum
          consequuntur iusto libero!
        </p>

        <Image
          src={"/SpaceEventsLocation.png"}
          width={400}
          height={0}
          alt="imagem lustrativa da localização no GPS "
        />
      </Card>
    </Section>
  );
}
