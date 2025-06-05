import {
  Footer,
  Header,
  Intro,
  Projects,
  Skills,
  WorkExperience,
} from "@/components/sections/"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-themeWhite text-themeBlack dark:bg-themeBlack dark:text-themeWhite">
      <Header />
      <section
        key="introduction"
        className="w-full pt-16 pb-10 md:pt-28 lg:pt-36 md:pb-20"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6">
          <Intro />
        </div>
      </section>

      <Skills />
      <Projects />
      <WorkExperience />
      <Footer />
    </div>
  )
}
