import { useId } from "react"
import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion"
import { LinkIcon, MoveRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

type WorkExperienceCardProps = {
  title: string
  oneLineDescription: string
  bullets: string[] | JSX.Element[]
  url?: string
  mobile?: boolean
}

const WorkExperienceCard = ({
  title,
  oneLineDescription,
  bullets,
  url,
  mobile,
}: WorkExperienceCardProps) => {
  const id = useId()
  const [ref, inView] = useInView({
    triggerOnce: true, // This will ensure the animation only plays once
  })

  return (
    <motion.div
      ref={ref}
      className="flex-1 space-y-3"
      initial={mobile ? {} : { opacity: 0, y: 20, filter: "blur(20px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 30,
      }}
    >
      <div
        className={clsx(
          "relative mx-auto flex rounded-lg border border-zinc-400 p-4 shadow dark:border-zinc-700 dark:bg-zinc-800",
          {
            "w-full": !mobile,
            "bg-zinc-200": mobile,
          }
        )}
      >
        <div className="flex flex-col">
          <div
            className={clsx(
              "flex items-center gap-2 font-medium tracking-tight dark:text-[hsl(240,11%,86%)] text-slate-900",
              {
                "text-3xl": !mobile,
                "text-base": mobile,
              }
            )}
          >
            <span className={clsx("", { hidden: mobile })}>{title} </span>
            {url && (
              <Link
                href={url || ""}
                target="_blank"
                title="Link to the project (opens in new tab)"
                className="flex items-center gap-2 md:ml-auto hover:text-slate-900 text-2xl opacity-80 hover:opacity-100 transition-all"
              >
                <span>Link</span>
                <LinkIcon
                  size={clsx({
                    20: !mobile,
                    16: mobile,
                  })}
                  color="currentColor"
                  className="cursor-pointer"
                />
              </Link>
            )}
          </div>
          <p
            className={clsx("text-slate-700", {
              "text-lg leading-relaxed": !mobile,
              "mt-2 text-base leading-snug": mobile,
            })}
          >
            {oneLineDescription}
          </p>
          <div className="flex flex-col text-slate-800">
            {bullets.map((bullet, index) => {
              return (
                <div
                  className={clsx("mt-3 flex gap-2 text-lg leading-relaxed", {
                    "text-base": mobile,
                  })}
                  key={`${id}-${index + 1}`}
                >
                  <MoveRight width={14} className="mt-[4px] min-w-[14px]" />
                  {bullet}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkExperienceCard
