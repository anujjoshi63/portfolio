"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CodeIcon,
  GithubIcon,
  LinkedinIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.section key="6" className="w-full py-20">
      <div className="flex w-full justify-center">
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-[hsl(240,10%,100%)] via-[hsl(240,10%,70%)] to-[hsl(240,10%,100%)] dark:from-[hsl(240,10%,0%)] dark:via-[hsl(240,10%,20%)] dark:to-[hsl(240,10%,0%)]" />
      </div>
      <div className="container grid w-full items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <div className="mt-10 space-y-2">
          <div className="text-4xl font-medium tracking-tighter md:text-5xl md:font-semibold lg:text-5xl">
            <span>let&apos;s get in touch</span>
          </div>
        </div>
        <div
          className="flex w-full flex-1 flex-col justify-evenly rounded-lg py-2 transition-all duration-500 ease-in-out md:flex-row"
          id="footer_section"
        >
          <Link href={"https://www.linkedin.com/in/thejoshi/"} target="_blank">
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle transition-all duration-300 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:text-[hsl(240,0%,85%)]">
              <LinkedinIcon width={16} color="#0964c0" />
              LinkedIn
              <ArrowUpRight width={16} color="gray" className="-ml-[5px]" />
            </div>
          </Link>
          <Link href={"mailto:ajosh104@asu.edu"} target="_blank">
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle transition-all duration-300 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:text-[hsl(240,0%,85%)]">
              <Mail width={16} color="#f04436" /> Email
              <ArrowUpRight width={16} color="gray" className="-ml-[5px]" />
            </div>
          </Link>
          <Link href={"https://github.com/anujjoshi63"} target="_blank">
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle transition-all duration-300 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:text-[hsl(240,0%,85%)]">
              <GithubIcon
                width={16}
                className="text-themeBlack opacity-75 hover:opacity-95 dark:text-white"
              />
              GitHub
              <ArrowUpRight width={16} color="gray" className="-ml-[5px]" />
            </div>
          </Link>
          <Link href={"https://leetcode.com/anujjosh"} target="_blank">
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle transition-all duration-300 hover:drop-shadow-[0_1px_4px_hsl(240,0%,55%)] dark:text-[hsl(240,0%,85%)]">
              <CodeIcon
                width={16}
                className="text-themeBlack opacity-75 hover:opacity-95 dark:text-white"
              />
              LeetCode
              <ArrowUpRight width={16} color="gray" className="-ml-[5px]" />
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
Footer.displayName = "Footer";
export default Footer;
