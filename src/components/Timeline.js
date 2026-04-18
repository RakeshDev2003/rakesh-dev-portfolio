import { Card } from "@/components/ui/card";

export default function Timeline({ items }) {
  return (
    <div className="relative space-y-5 border-l border-slate-200 pl-6">
      {items.map((item) => (
        <Card key={`${item.year}-${item.title}`} className="relative p-5">
          <span className="absolute -left-[31px] top-6 h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-sm" />
          <p className="text-sm font-medium text-sky-700">{item.year}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{item.organization}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
