import About from "@/components/about/about"
import Contact from "@/components/contact/contact"
import Design from "@/components/design/design"
import Dev from "@/components/dev/dev"
import Skills from "@/components/skills/skills"

const Home = () => {
  return (
    <main className="h-screen px-12 bg-black">
      <About />
      <Skills />
      <Dev />
      <Design />
      <Contact />
    </main>
  )
}

export default Home