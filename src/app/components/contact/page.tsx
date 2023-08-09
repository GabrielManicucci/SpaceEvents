import Section from '@/components/Section';

export default function Space() {
	return (
		<main className="flex flex-col justify-center w-full mt-32">
			<Section
				style={
					'flex flex-col justify-center items-center p-2 mt-10 xl:gap-x-20 lg:mt-20'
				}
			>
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-center text-3xl font-semibold mb-1 text-indigo-950">
						Contact Us
					</h1>
					<div className="w-full md:w-4/5 border border-indigo-950"></div>
				</div>

				<div className="w-full flex flex-col mt-14 rounded-xl shadow-xl">
					<div className="">
						<h2 className="text-indigo-950 px-5 text-lg font-medium">
							Make your budget
						</h2>
						<p className="text-indigo-950 px-5 text-sm">We will be in touch</p>
					</div>

					<form action="" className="flex flex-col pb-14 pt-10 px-5 md:flex-row">
						<div className="flex flex-col">
							<label htmlFor="name" className="text-sm">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
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
								Number
							</label>
							<input
								type="text"
								name="number"
								id="number"
								placeholder="number"
								className="mb-7 rounded-md p-3 bg-transparent border-b border-indigo-950"
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="textarea" className="text-sm">
								Message
							</label>
							<textarea
								name="textarea"
								id="textarea"
								cols={30}
								rows={6}
								placeholder="Message"
								className="rounded-md mb-7 p-3 bg-transparent border-b border-indigo-950"
							></textarea>
              <input type="submit" value="Submit" className='p-4 rounded-lg bg-green-700 text-slate-50 hover:bg-gradient-to-r from-green-700 to-hoverGreen hover:scale-95 duration-200' />
						</div>
					</form>
				</div>
			</Section>
		</main>
	);
}
