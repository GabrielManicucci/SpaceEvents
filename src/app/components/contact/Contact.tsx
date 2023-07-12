import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section>
      {/* <div className="w-4/5 border border-zinc-700 mb-10"></div> */}
      <h2 className="text-lg font-semibold text-indigo-950">EventsSpace</h2>
      <p className="my-3">Atendimento personalizado</p>
      <button className="w-full py-5 rounded-xl bg-primaryBlue hover:bg-hoverBlue text-slate-50 font transition-colors">
        Faça o seu orçamento
      </button>
      {/* <div className="w-4/5 border border-zinc-700 mt-10 hover:bg-hoverBlue"></div> */}
    </Section>
  );
}
