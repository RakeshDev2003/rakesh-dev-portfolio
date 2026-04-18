import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSocialIcon } from "@/lib/icons";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactSection({ contact, socialLinks }) {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge className="mb-4 border-sky-100 bg-sky-50 text-sky-700">
                {contact.eyebrow}
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                {contact.description}
              </p>

              <div className="mt-8 space-y-4">
                <Card>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a href={`mailto:${contact.email}`} className="font-medium text-slate-900 hover:text-sky-700">
                        {contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="font-medium text-slate-900 hover:text-sky-700">
                        {contact.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="font-medium text-slate-900">{contact.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.iconName);
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
                    >
                      <Icon className="h-4 w-4" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="p-1">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder={contact.form.namePlaceholder}
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                    />
                    <input
                      type="email"
                      placeholder={contact.form.emailPlaceholder}
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>
                  <textarea
                    rows="7"
                    placeholder={contact.form.messagePlaceholder}
                    className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                  />
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    {contact.form.submitLabel}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
