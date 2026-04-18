import dynamic from "next/dynamic";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const TestimonialsCarousel = dynamic(() => import("@/components/TestimonialsCarousel"), {
  loading: () => (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="h-[240px] rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]"
        />
      ))}
    </div>
  ),
});

export default function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            center
          />
        </Reveal>

        <div className="mt-12">
          <TestimonialsCarousel items={testimonials.items} />
        </div>
      </div>
    </section>
  );
}
