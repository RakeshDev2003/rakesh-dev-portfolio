import { Card, CardContent } from "@/components/ui/card";
import { getUiIcon } from "@/lib/icons";

export default function ServiceCard({ service, index }) {
  const icons = ["sparkles", "code", "globe", "monitor", "rocket"];
  const Icon = getUiIcon(icons[index % icons.length]);

  return (
    <Card className="group h-full p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(14,165,233,0.25)]">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
