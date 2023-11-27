import React from "react";

const Intro = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-6xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        Anuj Joshi
      </h2>
      <p className="mx-auto max-w-[700px] text-xl/normal font-medium text-zinc-500 md:text-xl/relaxed md:font-normal lg:text-xl/relaxed xl:text-xl/relaxed">
        <span className="font-semibold text-[hsl(220,10%,75%)]">
          Software Engineer
        </span>{" "}
        with{" "}
        <span className="font-semibold text-[hsl(220,10%,75%)]">Freelance</span>{" "}
        exp,{" "}
        <span className="font-semibold text-[hsl(220,10%,75%)]">
          Open Source
        </span>{" "}
        contributions,{" "}
        <span className="font-semibold text-[hsl(220,10%,75%)]">
          Internships
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[hsl(220,10%,75%)]"> projects</span>
        .{" "}
        <span className="whitespace-nowrap italic">
          – I like my code{" "}
          <span className="font-semibold text-[hsl(220,10%,75%)]">
            blazing fast
            {" ;)"}
          </span>
        </span>
      </p>
    </div>
  );
};

export default Intro;
