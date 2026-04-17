import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Database, Globe, GitBranch, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Umamageshwaran A — Aspiring Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Umamageshwaran A — Computer Science student building web applications with Java, JavaScript, and MongoDB.",
      },
      { property: "og:title", content: "Umamageshwaran A — Portfolio" },
      {
        property: "og:description",
        content: "Aspiring Software Developer based in Tamil Nadu, India.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Bento />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-mono text-muted-foreground">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Available for opportunities
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-mono leading-[1.05]">
          Umamageshwaran <span className="text-gradient-gold">A.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Aspiring Software Developer pursuing B.E. in Computer Science. I build
          clean, functional web experiences and love solving problems with code.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-gold"
          >
            View Projects <ArrowUpRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium hover:border-gold/50 transition"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { icon: Code2, label: "Java" },
  { icon: Globe, label: "HTML / CSS / JS" },
  { icon: Sparkles, label: "Bootstrap" },
  { icon: Database, label: "MongoDB" },
  { icon: GitBranch, label: "Git & GitHub" },
];

function Bento() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
        {/* About */}
        <div className="bento-card grain sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col">
          <p className="font-mono text-xs text-gold mb-3">// about</p>
          <h2 className="text-2xl font-mono mb-3">Building things, learning daily.</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I'm a Computer Science student at Hindusthan Institute of Technology,
            Coimbatore, with a Diploma background (80%) from Government Polytechnic
            College, Nagapadi. I enjoy turning ideas into working software — from
            front-end interfaces to backend logic.
          </p>
          <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <MapPin className="size-3.5 text-gold" /> Tiruvannamalai, Tamil Nadu
          </div>
        </div>

        {/* Education */}
        <div className="bento-card lg:col-span-2">
          <p className="font-mono text-xs text-gold mb-2">// education</p>
          <h3 className="font-mono text-base">B.E. Computer Science</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Hindusthan Institute of Technology · 2024 – 2027
          </p>
          <div className="my-3 h-px bg-border" />
          <h3 className="font-mono text-base">Diploma — CSE</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Government Polytechnic College, Nagapadi · 80%
          </p>
        </div>

        {/* Stat 1 */}
        <div className="bento-card flex flex-col justify-between">
          <p className="font-mono text-xs text-gold">// engagement</p>
          <div>
            <p className="font-mono text-4xl text-gradient-gold">+20%</p>
            <p className="text-xs text-muted-foreground mt-1">
              User engagement lift during digital marketing internship.
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bento-card flex flex-col justify-between">
          <p className="font-mono text-xs text-gold">// score</p>
          <div>
            <p className="font-mono text-4xl text-gradient-gold">80%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Diploma in Computer Science & Engineering.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bento-card sm:col-span-2 lg:col-span-2">
          <p className="font-mono text-xs text-gold mb-3">// stack</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-xs font-mono"
              >
                <s.icon className="size-3.5 text-gold" />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Project preview */}
        <div className="bento-card sm:col-span-2 lg:col-span-2">
          <p className="font-mono text-xs text-gold mb-2">// featured</p>
          <h3 className="font-mono text-lg">Way Finding Device</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Led a team to design a navigation-assistance device as the polytechnic
            final project. Drove logic, testing, and delivery.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-gold hover:underline"
          >
            All projects <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Social */}
        <div className="bento-card sm:col-span-2 lg:col-span-2 flex flex-col">
          <p className="font-mono text-xs text-gold mb-3">// connect</p>
          <div className="grid grid-cols-1 gap-2">
            <a
              href="mailto:umamageshwaran141@gmail.com"
              className="flex items-center justify-between rounded-md border border-border bg-secondary/40 px-3 py-2.5 hover:border-gold/50 transition group"
            >
              <span className="flex items-center gap-2 text-sm">
                <Mail className="size-4 text-gold" /> umamageshwaran141@gmail.com
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-gold transition" />
            </a>
            <a
              href="https://github.com/Umamagesh121"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-md border border-border bg-secondary/40 px-3 py-2.5 hover:border-gold/50 transition group"
            >
              <span className="flex items-center gap-2 text-sm">
                <Github className="size-4 text-gold" /> github.com/Umamagesh121
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-gold transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/umamagesh15"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-md border border-border bg-secondary/40 px-3 py-2.5 hover:border-gold/50 transition group"
            >
              <span className="flex items-center gap-2 text-sm">
                <Linkedin className="size-4 text-gold" /> linkedin.com/in/umamagesh15
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-gold transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
