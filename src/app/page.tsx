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
    <div className="min-h-screen bg-themeWhite text-themeBlack dark:bg-themeBlack dark:text-themeWhite">
      <Header />
      <section key="introduction" className="w-full py-16 md:py-28 lg:py-36">
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
