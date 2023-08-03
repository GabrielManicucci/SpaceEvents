import Section from "@/components/Section";

export default function Space() {
    return (
        <main className="flex flex-col justify-center w-full mt-28">
            <Section style={
            "flex flex-col justify-center p-2 mt-34 md:grid grid-cols-2 gap-9 xl:gap-x-20 xl:gap-y-0 lg:mt-20"
          }>
            <h1>My first route in NExtJS</h1>
          </Section>

        </main>
        
    )
}