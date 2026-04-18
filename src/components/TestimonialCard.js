import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full p-1">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div className="flex gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600">“{testimonial.quote}”</p>
        <div className="mt-6">
          <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
