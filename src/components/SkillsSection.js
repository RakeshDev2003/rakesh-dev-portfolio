import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import Reveal from "@/components/Reveal";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={skills.eyebrow}
            title={skills.title}
            description={skills.description}
          />
        </Reveal>

        <div className="mt-10">
          <Tabs defaultValue={skills.groups[0].title.toLowerCase()}>
            <TabsList className="mb-8 flex h-auto flex-wrap rounded-3xl bg-slate-50 p-2">
              {skills.groups.map((group) => (
                <TabsTrigger key={group.title} value={group.title.toLowerCase()}>
                  {group.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skills.groups.map((group, index) => (
              <TabsContent key={group.title} value={group.title.toLowerCase()}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((skill, skillIndex) => (
                    <Reveal key={skill.name} delay={skillIndex * 0.05 + index * 0.05}>
                      <SkillCard skill={skill} />
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
