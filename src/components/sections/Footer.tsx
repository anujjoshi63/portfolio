"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Ref, forwardRef } from "react";

const Footer = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <motion.section key="6" className="w-full py-20">
      <div className="flex w-full justify-center">
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-[hsl(240,10%,0%)] via-[hsl(240,10%,20%)] to-[hsl(240,10%,0%)]"></div>
      </div>
      <div className="container grid w-full items-center justify-center gap-4  border-zinc-800 text-center md:px-6 lg:gap-10">
        <div className="mt-10 space-y-2">
          <div className=" text-4xl font-medium tracking-tight md:text-5xl md:font-semibold lg:text-5xl">
            <span>let&apos;s get in touch</span>
          </div>
        </div>
        <div
          className="flex w-full flex-1 flex-col justify-evenly rounded-lg py-2 text-xl transition-all duration-500 ease-in-out md:flex-row"
          ref={ref}
        >
          <Link href={"https://www.linkedin.com/in/thejoshi/"} target="_blank">
            <div className="mx-2 flex flex-1 items-center align-middle text-[hsl(240,0%,85%)] transition-all  duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
              LinkedIn
              <ArrowUpRight width={16} color="gray" />
            </div>
          </Link>
          <Link href={"mailto:ajosh104@asu.edu"} target="_blank">
            <div className="mx-2 flex flex-1 items-center align-middle text-[hsl(240,0%,85%)] transition-all  duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
              Email
              <ArrowUpRight width={16} color="gray" />
            </div>
          </Link>
          <Link href={"https://github.com/anujjoshi63"} target="_blank">
            <div className="mx-2 flex flex-1 items-center align-middle text-[hsl(240,0%,85%)] transition-all  duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
              GitHub
              <ArrowUpRight width={16} color="gray" />
            </div>
          </Link>
          <Link href={"https://instagram.com/anuj._.joshi/"} target="_blank">
            <div className="mx-2 flex flex-1 items-center align-middle text-[hsl(240,0%,85%)] transition-all  duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
              Instagram
              <ArrowUpRight width={16} color="gray" />
            </div>
          </Link>
          <Link href={"https://twitter.com/anujjosh"} target="_blank">
            <div className="mx-2 flex flex-1 items-center align-middle text-[hsl(240,0%,85%)] transition-all  duration-300 hover:text-[hsl(240,0%,95%)]  hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)]">
              Twitter
              <ArrowUpRight width={16} color="gray" />
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
});
Footer.displayName = "Footer";
export default Footer;
