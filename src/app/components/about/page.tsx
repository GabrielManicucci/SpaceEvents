import Section from "@/components/Section";
import Image from "next/image";

export default function Space() {
    return (
        <main className="flex flex-col justify-center w-full mt-28">
            <Section style={
            "flex flex-col justify-center p-2 mt-10 md:grid grid-cols-2 gap-9 xl:gap-x-20 xl:gap-y-0 lg:mt-20"
          }>
            <div className="text-indigo-950">
                <div className="mb-16">
                    <h1 className="text-center text-3xl font-semibold mb-1">About Us</h1>
                    <div className="w-full border border-indigo-950"></div> 
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="flex row-span-2 my-4">
                    <Image
                        src={"/WorkingPeoples2.png"}
                        width={700}
                        height={500}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem espaço de eventos"
                    />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div>

                <div className="my-12">
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="flex row-span-2 my-4">
                    <Image
                        src={"/WorkingPeoples2.png"}
                        width={700}
                        height={500}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem espaço de eventos"
                    />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div>
                
                <div>
                    <h2 className="text-xl font-semibold text-green-700">Lorem ipsum</h2>
                    <div className="flex row-span-2 my-4">
                    <Image
                        src={"/WorkingPeoples2.png"}
                        width={700}
                        height={500}
                        className="rounded-md shadow-lg max-h-[580px] w-full"
                        alt="imagem espaço de eventos"
                    />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto corporis hic reiciendis vitae sapiente possimus natus, et dolore ullam quas ducimus. Facere, tenetur nisi sequi at culpa beatae ratione.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam
          culpa suscipit!</p>

                </div> 
            </div>
          </Section>

        </main>    
    )
}