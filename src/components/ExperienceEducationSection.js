import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export default function ExperienceEducationSection({ experience }) {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={experience.eyebrow}
            title={experience.title}
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Experience</h3>
              <p className="mt-2 text-sm text-slate-500">Professional work and project-based growth.</p>
              <div className="mt-6">
                <Timeline items={experience.experienceItems} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Education</h3>
              <p className="mt-2 text-sm text-slate-500">Learning milestones and technical foundations.</p>
              <div className="mt-6">
                <Timeline items={experience.educationItems} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
