import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.28)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.featured}
        />
        {project.featured ? (
          <Badge className="absolute left-4 top-4 border-emerald-100 bg-emerald-50 text-emerald-700">
            Featured
          </Badge>
        ) : null}
      </div>
      <CardContent className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} className="bg-slate-50 text-slate-600">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button href={project.live} variant="primary" size="sm">
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href={project.github} variant="outline" size="sm">
            GitHub
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
