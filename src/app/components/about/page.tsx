import Section from "@/components/Section";
import Image from "next/image";

export default function Space() {
    return (
        <main className="flex flex-col justify-center w-full mt-28">
            <Section style={
            "flex flex-col justify-center p-2 mt-10 xl:gap-x-20 lg:mt-20"
          }>
            <div className="">
                <div className="mb-16">
                    <h1 className="text-center text-3xl font-semibold mb-1">About Us</h1>
                    <div className="w-full border border-indigo-950"></div> 
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="my-4 row-span-1">
                    <Image
                        src={"/workingPeoples2.png"}
                        width={700}
                        height={0}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem pessoas trabalhando"
                    />
                    </div>
                    <p className="text-indigo-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div>

                <div className="my-12">
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="my-4">
                    <Image
                        src={"/workingPeoples2.png"}
                        width={700}
                        height={0}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem pessoas trabalhando"
                    />
                    </div>
                    <p className="text-indigo-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div>
                
                <div>
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="my-4">
                    <Image
                        src={"/workingPeoples2.png"}
                        width={700}
                        height={0}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem pessoas trabalhando"
                    />
                    </div>
                    <p className="text-indigo-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div> 
            </div>
          </Section>

        </main>    
    )
}