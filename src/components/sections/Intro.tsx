"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="mt-8 space-y-6 md:mt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl font-medium tracking-tight md:text-5xl md:font-bold lg:text-6xl">
          Anuj Joshi
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 40,
          delay: 0.1,
        }}
        viewport={{ once: true }}
      >
        {/* <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2 text-2xl font-extralight">
          <span className="w-fit rounded-lg bg-[hsl(260,18%,16%)] px-2 text-center  font-extralight">
            MS CS student, ASU
          </span>
          <span className="w-fit rounded-lg bg-[hsl(260,18%,16%)] px-2   ">
            Seeking
            <span className="font-medium"> Summer '24 Internships</span>
          </span>
          <span className="w-fit rounded-lg  px-2  text-center">
            Skills? React, Next, TypeScript, Python & more 🚀
          </span>
          <span className="mt-2 w-fit rounded-lg  px-2  text-center  text-2xl  font-extralight">
            Checkout portfolio for more →
          </span>
        </div> */}
        <p className="mx-auto max-w-[700px] text-xl/normal font-thin text-[hsl(240,11%,80%)]">
          <span className="font-medium tracking-tight">Software Engineer</span>{" "}
          <motion.span
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
            with{" "}
          </motion.span>
          <span className="font-medium tracking-tight">open source</span>{" "}
          <motion.span
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
            contributions,{" "}
          </motion.span>
          <span className="font-medium tracking-tight">internships</span>
          <motion.span
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
            ,{" "}
          </motion.span>
          <span className="font-medium tracking-tight">freelance gigs</span>{" "}
          <motion.span
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
            and{" "}
          </motion.span>
          <span className="font-medium tracking-tight">personal projects</span>
          {" –  "} more{" "}
          <span className="whitespace-nowrap italic text-[hsla(25,25%,56%,0.7)]">
            coffee,
          </span>{" "}
          more <span className=" tracking-tight">code</span>
        </p>
      </motion.div>
      <motion.div
        className="mt-4 flex w-full items-center justify-center gap-4 text-lg font-light text-[hsl(240,11%,86%)] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <Link href={"https://www.linkedin.com/in/thejoshi/"} target="_blank">
          <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
            LinkedIn <ArrowUpRight width={16} color="gray" />
          </div>
        </Link>
        <Link href={"https://github.com/anujjoshi63"} target="_blank">
          <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
            GitHub <ArrowUpRight width={16} color="gray" />
          </div>
        </Link>
        <Link href={"https://teensy.tech/anujresume"} target="_blank">
          <div className="flex items-center transition-all duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
            Resume <ArrowUpRight width={16} color="gray" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Intro;
