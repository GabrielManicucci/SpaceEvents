import Section from '@/components/Section';
import Image from 'next/image';

export default function Space() {
	return (
  <main className="flex flex-col justify-center w-full mt-32 mb-10">
			<Section
				style={'flex flex-col justify-center p-2 mt-10 xl:gap-x-20 lg:mt-20'}
			>
				<div className="flex flex-col items-center mb-24">
					<h1 className="text-center text-3xl font-semibold mb-1 text-indigo-950">About Us</h1>
					<div className="w-full md:w-4/5 border border-indigo-950"></div>
				</div>

				<div>
					<div className='md:inline-grid grid-cols-2 gap-x-5 lg:gap-x-12'>
						<h2 className="text-xl font-semibold text-green-700 md:flex items-end md:py-3 lg:text-2xl lg:py-5 xl:pb-8">
							Lorem ipsum
						</h2>
						<div className="my-4 row-span-2 md:my-0 md:flex">
							<Image
								src={'/workingPeoples2.png'}
								width={700}
								height={0}
								className="rounded-md shadow-lg max-h-[580px] w-full"
								alt="imagem pessoas trabalhando"
							/>
						</div>
						<p className="text-indigo-950 text-sm md:flex items-start md:text-base md:pb-3 lg:text-lg lg:pb-5 xl:pb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates architecto corporis hic reiciendis vitae sapiente
							possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi
							sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Quaerat quam culpa suscipit!
						</p>
					</div>

					<div className="my-16 md:inline-grid grid-cols-2 gap-x-5 lg:gap-x-12">
						<h2 className="text-xl font-semibold text-green-700 md:flex items-end md:py-3 lg:text-2xl lg:py-5 xl:pb-8">
							Lorem ipsum
						</h2>
						<div className="my-4 row-span-2 col-start-1 col-end-2 row-start-1 row-end-3 md:my-0 md:flex">
							<Image
								src={'/workingPeoples2.png'}
								width={700}
								height={0}
								className="rounded-md shadow-lg max-h-[580px] w-full"
								alt="imagem pessoas trabalhando"
							/>
						</div>
						<p className="text-indigo-950 text-sm md:flex items-start md:text-base md:pb-3 lg:text-lg lg:pb-5 xl:pb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates architecto corporis hic reiciendis vitae sapiente
							possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi
							sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Quaerat quam culpa suscipit!
						</p>
					</div>

					<div className="md:inline-grid grid-cols-2 gap-x-5 lg:gap-x-12">
						<h2 className="text-xl font-semibold text-green-700 md:flex items-end md:py-3 lg:text-2xl lg:py-5 xl:pb-8">
							Lorem ipsum
						</h2>
						<div className="my-4 row-span-2 md:my-0 md:flex">
							<Image
								src={'/workingPeoples2.png'}
								width={700}
								height={0}
								className="rounded-md shadow-lg max-h-[580px] w-full"
								alt="imagem pessoas trabalhando"
							/>
						</div>
						<p className="text-indigo-950 text-sm md:flex items-start md:text-base md:pb-3 lg:text-lg lg:pb-5 xl:pb-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates architecto corporis hic reiciendis vitae sapiente
							possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi
							sequi at culpa beatae ratione. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Quaerat quam culpa suscipit!
						</p>
					</div>
				</div>
			</Section>
		</main>
	);
}
