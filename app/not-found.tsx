import Link from "next/link";
import NotFoundSearch from "@/components/NotFoundSearch";

/** Proper 404 status via App Router not-found convention (GAP 15). */
export default function NotFound() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pt-40 pb-24 lg:px-8">
      <p className="label text-faint">404</p>
      <h1 className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-6xl">
        This page missed the call.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        The page you wanted is not here. Unlike your inquiries, though, this one
        is recoverable.
      </p>
      <NotFoundSearch />
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <Link href="/industries" className="label text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
          Industries
        </Link>
        <Link href="/tools" className="label text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
          Tools
        </Link>
        <Link href="/leak-audit" className="label text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
          Free leak audit
        </Link>
      </div>
    </section>
  );
}
