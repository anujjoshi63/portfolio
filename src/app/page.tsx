import Card from '@/components/ui/card';
export default function Home() {
	return (
		<div className="min-h-screen">
			<section key="1" className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-6xl font-bold tracking-tight text-4xl md:text-5xl">
							Anuj Joshi
						</h2>
						<p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
							<span className="text-zinc-200">Software Dev</span>{' '}
							showcasing a blend of{' '}
							<span className="text-zinc-200">Freelance</span>{' '}
							work,{' '}
							<span className="text-zinc-200">Open Source</span>{' '}
							contributions, personal projects, and academic
							pursuits. Special interest in{' '}
							<span className="text-zinc-200 whitespace-nowrap">
								Full Stack
							</span>{' '}
							development, writing{' '}
							<span className="text-zinc-200">blazing-fast</span>{' '}
							code and development
							<span className="text-zinc-200">
								{' '}
								productivity.
							</span>{' '}
						</p>
					</div>

					{/* <div className="flex items-center justify-center gap-4 w-full font-light text-lg text-zinc-300">
						<Link
							href={'https://github.com/anujjoshi63'}
							target="_blank"
						>
							<div className="underline underline-offset-4">
								GitHub
							</div>
						</Link>
						<Link
							href={'https://www.linkedin.com/in/thejoshi/'}
							target="_blank"
						>
							<div className="underline underline-offset-4">
								LinkedIn
							</div>
						</Link>

						<Link
							href={'https://www.instagram.com/anuj._.joshi/'}
							target="_blank"
						>
							<div className="underline underline-offset-4">
								Resume
							</div>
						</Link>
					</div> */}
					<div className="flex w-full gap-8 flex-wrap ">
						<Card
							title="Grad student, ASU"
							subtitle="MS in Computer Science"
							otherData="Aug 2023 - May 2025"
							imgPath="/favicon.ico"
						/>
						<Card
							title="Zeno Stack"
							subtitle="Cross-Platform Monorepo"
							otherData="95+ stars on GitHub"
							imgPath="/favicon.ico"
						/>
						<Card
							title="Freelance"
							subtitle="Highlights"
							otherData="Other"
							imgPath="/favicon.ico"
						/>
					</div>
				</div>
			</section>
			<section key="2" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-6xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							skills
						</h2>
					</div>

					<div className="flex w-full gap-4 flex-wrap ">
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								programming
								<br /> languages
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>TypeScript</div>
								<div>Python</div>
								<div>JavaScript</div>
								<div>SQL</div>
								<div>HTML/CSS</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								libraries &<br /> frameworks
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>React</div>
								<div>Next.js</div>
								<div>Express</div>
								<div>Electron</div>
								{/* <div>React Native</div> */}
								<div>Node.js</div>
								<div>and more</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								tools &<br />
								technologies
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>Git</div>
								<div>GitHub</div>
								<div>Figma</div>
								<div>AWS</div>
								<div>Linux</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section key="3" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-6xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							projects
						</h2>
					</div>

					<div className="flex w-full gap-4 flex-wrap ">
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">Teensy</h1>
							<div className="flex flex-col items-start text-lg">
								<div>TypeScript</div>
								<div>Python</div>
								<div>JavaScript</div>
								<div>SQL</div>
								<div>HTML/CSS</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								Zeno Stack
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>React</div>
								<div>Next.js</div>
								<div>Express</div>
								<div>Electron</div>
								{/* <div>React Native</div> */}
								<div>Node.js</div>
								<div>and more</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								AutoShopInsights
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>Git</div>
								<div>GitHub</div>
								<div>Figma</div>
								<div>AWS</div>
								<div>Linux</div>
							</div>
						</div>
					</div>
					<div className="flex w-full  justify-end ">
						<div className="px-3 py-1 bg-zinc-800 rounded-xl">
							My work {'->'}
						</div>
					</div>
				</div>
			</section>
			<section key="4" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-6xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							work experience
						</h2>
					</div>

					<div className="flex w-full gap-4 flex-wrap ">
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">KyloApps</h1>
							<div className="flex flex-col items-start text-lg">
								<div>TypeScript</div>
								<div>Python</div>
								<div>JavaScript</div>
								<div>SQL</div>
								<div>HTML/CSS</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								TechFryDay
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>React</div>
								<div>Next.js</div>
								<div>Express</div>
								<div>Electron</div>
								{/* <div>React Native</div> */}
								<div>Node.js</div>
								<div>and more</div>
							</div>
						</div>
						<div className="flex flex-col items-center shadow-xl rounded-xl p-6 gap-2 flex-1 bg-zinc-800 min-w-[15rem] w-fit">
							<h1 className="text-2xl font-semibold">
								Freelance
							</h1>
							<div className="flex flex-col items-start text-lg">
								<div>Git</div>
								<div>GitHub</div>
								<div>Figma</div>
								<div>AWS</div>
								<div>Linux</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section key="5" className="w-full py-12 ">
				<div className="container grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							sold yet? ask GPT about me
						</h2>
					</div>

					<div className="flex flex-col-reverse w-full gap-4 flex-wrap bg-zinc-800 rounded-lg min-h-fit h-[10ch]">
						<div className="bg-zinc-500 m-3 rounded-full py-2">
							asd
						</div>
					</div>
				</div>
			</section> */}

			<section key="6" className="w-full py-20">
				<div className="container grid border-t border-zinc-800 items-center justify-center gap-4 text-center md:px-6 lg:gap-10 w-full">
					<div className="space-y-2 mt-10">
						<h2 className="lg:text-5xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							let's get in touch
						</h2>
					</div>
					<div className="flex justify-evenly text-xl flex-1 w-full">
						<Link
							className="underline underline-offset-2"
							href={'https://www.linkedin.com/in/thejoshi/'}
							target="_blank"
						>
							<div className="flex-1 mx-2">LinkedIn</div>
						</Link>
						<Link
							className="underline underline-offset-2"
							href={'mailto://ajosh104@asu.edu'}
							target="_blank"
						>
							<div className="flex-1 mx-2">Email</div>
						</Link>
						<Link
							className="underline underline-offset-2"
							href={'https://github.com/anujjoshi63'}
							target="_blank"
						>
							<div className="flex-1 mx-2">GitHub</div>
						</Link>
						<Link
							className="underline underline-offset-2"
							href={'https://twitter.com/anujjosh'}
							target="_blank"
						>
							<div className="flex-1 mx-2">Twitter</div>
						</Link>
						<Link
							className="underline underline-offset-2"
							href={'https://instagram.com/anuj._.joshi/'}
							target="_blank"
						>
							<div className="flex-1 mx-2">Instagram</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
