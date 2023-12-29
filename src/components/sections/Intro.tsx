"use client";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div className="space-y-6">
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
        <h2 className="text-6xl font-medium tracking-tight md:text-5xl md:font-bold lg:text-6xl">
          Anuj Joshi
        </h2>
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
        <p className="mx-auto max-w-[700px] text-xl/normal font-normal text-[hsl(240,11%,56%)] md:text-xl/relaxed md:font-thin lg:text-xl/relaxed xl:text-xl/relaxed">
          <span className="font-medium text-[hsl(240,11%,86%)]">
            Software Engineer
          </span>{" "}
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
          <span className="font-medium text-[hsl(240,11%,86%)]">Freelance</span>{" "}
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
            exp,{" "}
          </motion.span>
          <span className="font-medium text-[hsl(240,11%,86%)]">
            Open Source
          </span>{" "}
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
          <span className="font-medium text-[hsl(240,11%,86%)]">
            Internships
          </span>{" "}
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
          <span className="font-medium text-[hsl(240,11%,86%)]"> projects</span>
          .{" "}
          <span className="whitespace-nowrap italic">
            – I like my code{" "}
            <span className="font-medium text-[hsl(240,11%,86%)]">
              blazing fast
              {" ;)"}
            </span>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Intro;
