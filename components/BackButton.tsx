import Link from "next/link";

export default function BackButton({ href }: { href?: string }) {
  return (
    <Link
      className="text-md group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100/50 font-light text-gray-500 transition-colors hover:bg-primary-100/10 hover:text-primary-500 focus:[&:not(:focus-visible)]:outline-none"
      href={href || "/"}
    >
      <span className="inline-block pb-[2px] text-lg text-black transition-transform group-hover:animate-[spin_.2s_ease-in-out] group-hover:text-primary-500">
        &#x2190;
      </span>
      <span className="text-md hidden">back</span>
    </Link>
  );
}
