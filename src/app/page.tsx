'use client'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import HeadLine from './components/home/Headline'
import Details from './components/details/details'

export default function Home() {
  return (
    <main className="mt-32 flex w-full flex-col items-center justify-center">
      <HeadLine />
      <About />
      <Details />
      <Contact />
    </main>
  )
}
