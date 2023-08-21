import About from './components/about/About'
import Contact from './components/contact/Contact'
import HeadLine from './components/home/Headline'

export default function Home() {
  return (
    <main className="mt-32 flex w-full flex-col justify-center">
      <HeadLine />
      <About />
      <Contact />
    </main>
  )
}
