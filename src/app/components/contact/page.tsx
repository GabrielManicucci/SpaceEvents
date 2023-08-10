import Section from '@/components/Section';

export default function Space() {
	return (
		<main className="flex flex-col justify-center w-full mt-32">
			<Section
				style={
					'flex flex-col justify-center items-center p-2 mt-10 lg:mt-20'
				}
			>
				<div className="w-full flex flex-col items-center">
					<h1 className="text-center text-3xl font-semibold mb-1 text-indigo-950">
						Contate-nos
					</h1>
					<div className="w-full md:w-4/5 border border-indigo-950"></div>
				</div>

				<div className="w-full flex flex-col md:items-center mt-14 rounded-xl shadow-xl">
					<div className="flex flex-col px-5 md:w-[95%] xl:px-7">
						<h2 className="text-indigo-950 text-lg font-medium">
							Faca o seu orçamento
						</h2>
						<p className="text-indigo-950 text-sm">Entraremos em contato</p>
					</div>

					<form action="" className="w-full flex flex-col pb-14 pt-10 px-5 md:flex-row md:justify-around xl:justify-center">
						<div className="flex flex-col flex-[0_1_45%] xl:mr-5">
							<label htmlFor="name" className="text-sm">
								Nome
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Nome"
								className="mb-7 rounded-md p-3 bg-transparent border-b border-indigo-950"
							/>
							<label htmlFor="email" className="text-sm">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="mb-7 rounded-md p-3 bg-transparent border-b border-indigo-950"
							/>
              <label htmlFor="number" className="text-sm">
								Número
							</label>
							<input
								type="text"
								name="number"
								id="number"
								placeholder="Número"
								className="mb-7 rounded-md p-3 bg-transparent border-b border-indigo-950 md:mb-0"
							/>
						</div>

						<div className="flex flex-col flex-[0_1_45%] xl:ml-5">
							<label htmlFor="textarea" className="text-sm">
								Mensagem
							</label>

							<textarea
								name="textarea"
								id="textarea"
								cols={30}
								rows={6}
								placeholder="Mensagem"
								className="rounded-md mb-7
                 p-3 bg-transparent border-b border-indigo-950"
							></textarea>

              <input type="submit" value="Enviar" className='p-3 rounded-lg bg-green-700 text-slate-50 hover:bg-gradient-to-r from-green-700 to-hoverGreen hover:scale-95 duration-200' />
						</div>
					</form>
				</div>
			</Section>
		</main>
	);
}
