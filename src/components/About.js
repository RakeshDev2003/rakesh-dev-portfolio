import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function About({ about }) {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={about.image}
                  alt="Developer portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-slate-50 px-4 py-4 text-center">
                    <div className="text-xl font-semibold text-slate-900">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <Badge className="mb-4 border-sky-100 bg-sky-50 text-sky-700">
                {about.eyebrow}
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {about.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{about.bio}</p>

              {about.objective ? (
                <div className="mt-6 rounded-3xl border border-sky-100 bg-sky-50/70 p-5 text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-900">Objective</p>
                  <p className="mt-2">{about.objective}</p>
                </div>
              ) : null}

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Reveal>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900">My Journey</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {about.journey.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900">My Goals</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {about.goals.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Card className="p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                    Soft Skills
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {about.softSkills.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                    Languages
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {about.languages.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
                    Hobbies
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {about.hobbies.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
