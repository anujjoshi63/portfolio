"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
const Footer = () => {
  return (
    <motion.section key="6" className="w-full py-20">
      <div className="container grid w-full items-center justify-center gap-4 border-t border-zinc-800 text-center md:px-6 lg:gap-10">
        <div className="mt-10 space-y-2">
          <h2 className=" text-4xl font-medium tracking-tight md:text-5xl md:font-semibold lg:text-5xl">
            let&apos;s get in <span className="cursor-pointer"> touch</span>
          </h2>
        </div>
        <div className="flex w-full flex-1 flex-col justify-evenly text-xl md:flex-row">
          <Link
            className="underline underline-offset-2"
            href={"https://www.linkedin.com/in/thejoshi/"}
            target="_blank"
          >
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
              LinkedIn
              <LinkIcon width={14} color="gray" className="md:hidden" />
            </div>
          </Link>
          <Link
            className="underline underline-offset-2"
            href={"mailto:ajosh104@asu.edu"}
            target="_blank"
          >
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
              Email
              <LinkIcon width={14} color="gray" className="md:hidden" />
            </div>
          </Link>
          <Link
            className="underline underline-offset-2"
            href={"https://github.com/anujjoshi63"}
            target="_blank"
          >
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
              GitHub
              <LinkIcon width={14} color="gray" className="md:hidden" />
            </div>
          </Link>
          <Link
            className="underline underline-offset-2"
            href={"https://twitter.com/anujjosh"}
            target="_blank"
          >
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
              Twitter
              <LinkIcon width={14} color="gray" className="md:hidden" />
            </div>
          </Link>
          <Link
            className="underline underline-offset-2"
            href={"https://instagram.com/anuj._.joshi/"}
            target="_blank"
          >
            <div className="mx-2 flex flex-1 items-center gap-1 align-middle">
              Instagram
              <LinkIcon width={14} color="gray" className="md:hidden" />
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
