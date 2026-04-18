"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MobileMenu({ items, activeSection, onNavigate }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden">
          <Menu className="h-4 w-4" />
          Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <div className="mb-6">
          <p className="text-sm font-medium text-sky-700">Navigation</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">Jump to a section</h3>
        </div>
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => onNavigate?.(item.href)}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-50 text-sky-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
                <span className="text-xs text-slate-400">{item.href.replace("#", "")}</span>
              </a>
            );
          })}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
