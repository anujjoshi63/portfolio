"use client";
import { motion } from "framer-motion";
import Card from "../elements/card";

const Highlights = () => {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 20,
        delay: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div className="mt-20 py-8 text-4xl font-normal tracking-tight sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl">
        milestones
      </div>
      <div className="flex w-full flex-col flex-wrap gap-8 md:flex-row">
        <Card
          title="Grad student, ASU"
          subtitle="MS in Computer Science"
          otherData="Aug 2023 - May 2025"
          imgPath="/favicon.ico"
          url="https://search.asu.edu/profile/4753683"
        />
        <Card
          title="Zeno Stack"
          subtitle="Cross-Platform Monorepo"
          otherData="100+ stars on GitHub"
          imgPath="/favicon.ico"
          url="https://github.com/zeno-oss/zeno/"
        />
        <Card
          title="Freelance"
          subtitle="2 high-scale projects"
          otherData="+numerous other gigs"
          imgPath="/favicon.ico"
          url="https://autoshopinsights.com/"
        />
      </div>
    </motion.div>
  );
};

export default Highlights;
