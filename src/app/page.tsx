"use client";
import {
  Footer,
  Header,
  Highlights,
  Intro,
  Projects,
  Skills,
  WorkExperience,
} from "@/components/sections/";
import { useRef } from "react";

export default function Home() {
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const workExperience = useRef<HTMLDivElement>(null);
  const links = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen" ref={about}>
      <Header
        workExperienceRef={workExperience}
        skillsRef={skills}
        introRef={about}
        footerRef={links}
      />
      <section key="introduction" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6">
          <Intro />
          <Highlights />
        </div>
      </section>
      <Skills ref={skills} />
      <Projects />

      <WorkExperience ref={workExperience} />
      {/* <section key="5" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<div className="lg:text-5xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
							sold yet? ask GPT about me
						</div>
					</div>

					<div className="flex flex-col-reverse w-full gap-4 flex-wrap bg-zinc-800 rounded-lg min-h-fit h-[10ch]">
						<div className="bg-zinc-500 m-3 rounded-full py-2">
							asd
						</div>
					</div>
				</div>
			</section> */}
      <Footer ref={links} />
    </div>
  );
}
