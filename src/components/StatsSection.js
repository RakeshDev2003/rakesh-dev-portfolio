import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsSection({ stats }) {
  return (
    <section id="stats" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={stats.eyebrow} title={stats.title} center />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-semibold tracking-tight text-slate-900">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
