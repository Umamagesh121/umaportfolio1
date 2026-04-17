import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin, Code, Briefcase, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Umamageshwaran A" },
      {
        name: "description",
        content: "Get in touch with Umamageshwaran A via email, phone, GitHub, or LinkedIn.",
      },
      { property: "og:title", content: "Contact — Umamageshwaran A" },
      {
        property: "og:description",
        content: "Reach out for opportunities, collaborations, and conversations.",
      },
    ],
  }),
  component: ContactPage,
});

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "umamageshwaran141@gmail.com",
    href: "mailto:umamageshwaran141@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6374377357",
    href: "tel:+916374377357",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "github.com/Umamagesh121",
    href: "https://github.com/Umamagesh121",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/umamagesh15",
    href: "https://www.linkedin.com/in/umamagesh15",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tiruvannamalai, Tamil Nadu, India",
    href: undefined,
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-16 w-full">
        <p className="font-mono text-xs uppercase tracking-widest text-gold">Contact</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-mono">
          Let's <span className="text-gradient-gold">connect</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Open to internships, junior developer roles, and interesting
          collaborations — the fastest way to reach me is email
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((it) => {
            const Wrapper: any = it.href ? "a" : "div";
            return (
              <Wrapper
                key={it.label}
                {...(it.href ? { href: it.href, target: it.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                className="bento-card flex items-start justify-between gap-4 group"
              >
                <div>
                  <p className="font-mono text-xs text-gold mb-2 inline-flex items-center gap-1.5">
                    <it.icon className="size-3.5" /> {it.label}
                  </p>
                  <p className="text-sm break-all">{it.value}</p>
                </div>
                {it.href && (
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-gold transition shrink-0" />
                )}
              </Wrapper>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
