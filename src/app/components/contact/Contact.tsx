import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section style={"flex items-center flex-col justify-center p-2 mt-7"}>
      <h2 className="text-lg font-semibold text-indigo-950">EventsSpace</h2>
      <p className="my-3">Atendimento personalizado</p>
      <button className="w-full py-5 rounded-xl bg-blue-950  text-slate-50 hover:bg-gradient-to-r from-blue-950 to-gradientColorBlue hover:scale-95 duration-200">
        Faça o seu orçamento
      </button>
    </Section>
  );
}
