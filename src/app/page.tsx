import AboutSkeleton from "@/components/ui/Skeletons/AboutSkeleton"
import ContactSkeleton from "@/components/ui/Skeletons/ContactSkeleton"
import DesignSkeleton from "@/components/ui/Skeletons/DesignSkeleton"
import { DevSkeleton } from "@/components/ui/Skeletons/DevSkeleton"
import SkillsSkeleton from "@/components/ui/Skeletons/SkillsSkeleton"
import dynamic from "next/dynamic"

const About = dynamic(() => import('@/components/about/about'), {
  ssr: false,
  loading: () => <AboutSkeleton />
})
const Skills = dynamic(() => import('@/components/skills/skills'), {
  ssr: false,
  loading: () => <SkillsSkeleton />
})
const Dev = dynamic(() => import('@/components/dev/dev'), {
  ssr: false,
  loading: () => <DevSkeleton />
})
const Design = dynamic(() => import('@/components/design/design'), {
  ssr: false,
  loading: () => <DesignSkeleton />
})
const Contact = dynamic(() => import('@/components/contact/contact'), {
  ssr: false,
  loading: () => <ContactSkeleton />
})

const Home = () => {
  return (
    <main className="h-[100dvh] xl:px-24 md:px-12 px-14 bg-black">
      <About />
      <Skills />
      <Dev />
      <Design />
      <Contact />
    </main>
  )
}

export default Home