import Card from '@/components/ui/card';
export default function Home() {
	return (
		<div className="min-h-screen">
			<section key="1" className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="lg:text-6xl font-bold tracking-tight sm:text-4xl md:text-5xl">
							Anuj Joshi
						</h2>
						<p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							<span className="text-zinc-200">Software Dev</span>{' '}
							showcasing a blend of{' '}
							<span className="text-zinc-200">Freelance</span>{' '}
							work,{' '}
							<span className="text-zinc-200">Open Source</span>{' '}
							contributions, personal{' '}
							<span className="text-zinc-200">Projects</span>, and
							academic pursuits. Special interest in{' '}
							<span className="text-zinc-200 whitespace-nowrap">
								Full Stack
							</span>{' '}
							development and development productivity.
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
		</div>
	);
}
