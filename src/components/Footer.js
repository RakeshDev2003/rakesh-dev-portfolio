import Link from "next/link";
import { getSocialIcon } from "@/lib/icons";

export default function Footer({ brand, footer, socialLinks }) {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link href="#home" className="text-xl font-semibold tracking-tight text-slate-900">
            {brand}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">{footer.note}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-sky-700" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Social
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = getSocialIcon(social.iconName);
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  );
}
