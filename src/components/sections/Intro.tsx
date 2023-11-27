import React from "react";

const Intro = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-6xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Anuj Joshi
      </h2>
      <p className="mx-auto max-w-[700px] text-xl/tight font-medium text-zinc-500 md:text-xl/relaxed md:font-normal lg:text-xl/relaxed xl:text-xl/relaxed">
        <span className="text-zinc-200">Software Engineer</span> with{" "}
        <span className="text-zinc-200">Freelance</span> exp,{" "}
        <span className="text-zinc-200">Open Source</span> contributions,{" "}
        <span className="text-zinc-200">Internships</span> and{" "}
        <span className="text-zinc-200"> projects</span>.{" "}
        <span className="whitespace-nowrap italic">
          – I like my code{" "}
          <span className="text-zinc-200">
            blazing fast
            {" ;)"}
          </span>
        </span>
      </p>
    </div>
  );
};

export default Intro;
