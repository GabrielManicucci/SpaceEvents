import Section from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

export default function HeadLine() {
	const imageStyle = {
		borderRadius: '20px',
	};
	return (
		<Section
			style={
				'flex flex-col justify-center p-2 mt-10 md:grid grid-cols-2 gap-9 xl:gap-x-20 xl:gap-y-0 lg:mt-20'
			}
		>
			<div className="flex flex-col text-left text-indigo-950">
				<h4>Boas vindas a SpaceEvents</h4>
				<h1 className="text-4xl font-semibold text-indigo-950 mt-2 mb-5 xl:text-5xl">
					Um lugar preparado exatamente para levar você à felicidade
				</h1>
				<p className="lg:text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
					culpa suscipit! Expedita eum consequatur blanditiis nemo magnam
					reiciendis, consectetur vel fugit assumenda rem.
				</p>
			</div>

			<div className="flex row-span-2">
				<Image
					src={'/EventSpaceImage1.png'}
					width={700}
					height={500}
					className="rounded-md shadow-lg max-h-[580px] w-full"
					alt="imagem espaço de eventos"
				/>
			</div>

			<div className="flex flex-col mt-3 w-full md:flex-row md:mt-0">
				<Link
					href={'/components/space'}
					className="flex justify-between w-full p-7 mb-2 rounded-lg bg-blue-950 hover:bg-gradient-to-r from-indigo-950 to-gradientColorBlue text-slate-50 transition hover:scale-95 duration-200 md:text-left md:mr-2 md:py-8 md:mb-0 md:flex-col lg:px-12 lg:py-9 lg:font-medium lg:text-xl xl:text-2xl"
				>
					Conheça nosso espaço
					{/* <HiOutlineArrowRight size={24} /> */}
					<BsArrowRight size={28} />
				</Link>
				<Link 
        href={'/components/contact'}
        className="flex justify-between w-full p-7 rounded-lg bg-green-700 text-slate-50 hover:bg-gradient-to-r from-green-700 to-hoverGreen hover:scale-95 duration-200 md:p-7 md:text-left md:mb-0 md:flex-col lg:px-12 lg:py-9 lg:font-medium lg:text-xl xl:text-2xl">
					Agende uma visita
					<BsArrowRight size={28} />
				</Link>
			</div>
		</Section>
	);
}
