import Section from '@/components/Section'

export default function Space() {
  return (
    <main className="mt-32 flex w-full flex-col justify-center">
      <Section
        style={'flex flex-col justify-center items-center p-2 mt-10 lg:mt-20'}
      >
        <div className="mb-14 flex w-full flex-col items-center lg:mb-20">
          <h1 className="mb-1 text-center text-3xl font-semibold text-indigo-950">
            Contate-nos
          </h1>
          <div className="w-full border border-indigo-950 md:w-4/5"></div>
        </div>

        <div className="flex w-full flex-col rounded-xl shadow-xl md:items-center">
          <div className="flex flex-col px-5 md:w-[95%] xl:px-7">
            <h2 className="text-lg font-medium text-indigo-950">
              Faca o seu orçamento
            </h2>
            <p className="text-sm text-indigo-950">Entraremos em contato</p>
          </div>

          <form
            action=""
            className="flex w-full flex-col px-5 pb-10 pt-10 md:flex-row md:justify-around xl:justify-center"
          >
            <div className="flex flex-[0_1_45%] flex-col xl:mr-5">
              <label htmlFor="name" className="text-sm">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                className="mb-7 rounded-md border-b border-indigo-950 bg-transparent p-3"
              />
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-7 rounded-md border-b border-indigo-950 bg-transparent p-3"
              />
              <label htmlFor="number" className="text-sm">
                Número
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Número"
                className="mb-7 rounded-md border-b border-indigo-950 bg-transparent p-3 md:mb-0"
              />
            </div>

            <div className="flex flex-[0_1_45%] flex-col xl:ml-5">
              <label htmlFor="textarea" className="text-sm">
                Mensagem
              </label>

              <textarea
                name="textarea"
                id="textarea"
                cols={30}
                rows={6}
                placeholder="Mensagem"
                className="mb-7 rounded-md
                 border-b border-indigo-950 bg-transparent p-3"
              ></textarea>

              <input
                type="submit"
                value="Enviar"
                className="rounded-lg bg-green-700 from-green-700 to-hoverGreen p-3 text-slate-50 duration-200 hover:scale-95 hover:bg-gradient-to-r"
              />
            </div>
          </form>
        </div>
      </Section>
    </main>
  )
}
