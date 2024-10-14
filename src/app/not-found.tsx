import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <div className="border-b border-b-zinc-800 py-1 text-2xl font-bold">
        404
      </div>
      <Image
        alt="never-gonna-give-you-up"
        src={"/rr.gif"}
        width={100}
        height={100}
        unoptimized
      />
      <Link
        href="/"
        className="rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-lg text-zinc-200 shadow-xl"
      >
        back to portfolio {";)"}
      </Link>
    </div>
  );
}
