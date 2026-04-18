import { Card } from "@/components/ui/card";
import { getSkillIcon } from "@/lib/icons";

export default function SkillCard({ skill }) {
  const Icon = getSkillIcon(skill.iconName);

  return (
    <Card className="group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-25px_rgba(14,165,233,0.25)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium text-slate-900">{skill.name}</h3>
          <p className="text-sm text-slate-500">Clean and production-ready</p>
        </div>
      </div>
    </Card>
  );
}
