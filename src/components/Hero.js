"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSocialIcon } from "@/lib/icons";
import Reveal from "@/components/Reveal";

export default function Hero({ hero, socialLinks }) {
  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(186,230,253,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(226,232,240,0.85),transparent_40%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24">
        <Reveal>
          <div className="max-w-2xl">
            <Badge className="mb-5 border-sky-100 bg-sky-50 text-sky-700">
              {hero.badge}
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.name}
              <span className="mt-4 block text-sky-700">
                <TypeAnimation
                  sequence={hero.roles.flatMap((role) => [role, 1000])}
                  wrapper="span"
                  speed={26}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant === "secondary" ? "secondary" : cta.variant === "ghost" ? "ghost" : "primary"}
                  size="lg"
                >
                  {cta.label}
                  {cta.variant === "primary" ? <ArrowUpRight className="h-4 w-4" /> : null}
                </Button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = getSocialIcon(link.iconName);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(248,250,252,0.96))]" />
            <div className="relative z-10">
              <div className="relative mx-auto aspect-[4/5] max-w-[360px] overflow-hidden rounded-[2rem] bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {hero.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
