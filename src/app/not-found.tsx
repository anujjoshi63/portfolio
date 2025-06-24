import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <div className="border-b border-b-slate-800 py-1 text-2xl font-bold">
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
        className="smooth-corners-sm  text-slate-800 px-4 py-2 text-lg bg-slate-300 shadow-xl"
      >
        back to portfolio {";)"}
      </Link>
    </div>
  )
}
