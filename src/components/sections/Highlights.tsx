"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HighlightCard from "../elements/HighlightCard";

type CardData = {
  title: string;
  subtitle: string;
  otherData: string;
  imgPath: string;
  url: string;
};

const cardData: CardData[] = [
  {
    title: "Graduate Student, ASU",
    subtitle: "Master's in Computer Science",
    otherData: "Aug 2023 - May 2025",
    imgPath: "/favicon.ico",
    url: "https://search.asu.edu/profile/4753683",
  },
  {
    title: "Zeno Stack",
    subtitle: "Cross-Platform React Monorepo",
    otherData: "100+ stars on GitHub",
    imgPath: "/favicon.ico",
    url: "https://github.com/zeno-oss/zeno/",
  },
  {
    title: "Freelance projects",
    subtitle: "Two high-scale projects",
    otherData: "+numerous other gigs",
    imgPath: "/favicon.ico",
    url: "https://autoshopinsights.com/",
  },
];

const Highlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-3"
      initial={{ opacity: 0, y: 100, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 20,
        delay: 1,
      }}
    >
      <div className="mt-20 py-8 text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 bg-clip-text text-transparent ">
        milestones
      </div>
      <div className="flex w-full flex-col flex-wrap gap-8 md:flex-row">
        {cardData.map((data, index) => (
          <HighlightCard
            key={`${data.title}+${index}`}
            title={data.title}
            subtitle={data.subtitle}
            otherData={data.otherData}
            imgPath={data.imgPath}
            url={data.url}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Highlights;
