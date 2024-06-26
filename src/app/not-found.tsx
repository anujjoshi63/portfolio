import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <div className="border-b border-b-zinc-800 py-1 text-2xl font-bold">
        404 - Page Not Found
      </div>
      <p className="text-lg">Here&apos;s a poem about Anuj:</p>
      <Image
        alt="never-gonna-give-you-up"
        src={"/rr.gif"}
        width={100}
        height={100}
      />
      <div className="flex flex-col ">
        <p>
          <span className="italic dark:text-white">
            never gonna give you up
          </span>
        </p>

        <p>
          <span className="italic dark:text-white">
            never gonna let you down
          </span>
        </p>
        <p>
          <span className="italic dark:text-white">
            never gonna run around and desert you
          </span>
        </p>
      </div>
      <Link
        href="/"
        className="rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-zinc-300 shadow-xl"
      >
        please stick to my portfolio {";)"}
      </Link>
    </div>
  );
}
