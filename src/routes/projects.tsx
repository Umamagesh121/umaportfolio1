import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Users, Compass, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Umamageshwaran A" },
      {
        name: "description",
        content: "Selected projects by Umamageshwaran A — leadership, hardware, and software work.",
      },
      { property: "og:title", content: "Projects — Umamageshwaran A" },
      {
        property: "og:description",
        content: "Way Finding Device and more from Umamageshwaran's portfolio.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl px-5 py-16 w-full">
        <p className="font-mono text-xs text-gold">// projects</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-mono">
          Selected <span className="text-gradient-gold">work.</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A snapshot of what I've been building and leading. More coming as I
          progress through my B.E. program.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="bento-card grain lg:col-span-2 lg:row-span-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-mono text-gold">
                Featured
              </span>
              <span className="text-xs font-mono text-muted-foreground">2024</span>
            </div>
            <h2 className="mt-6 text-2xl sm:text-3xl font-mono">Way Finding Device</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Polytechnic Final Project · Role: Team Leader
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Led a small team to design and build a way-finding device that
              provides navigation assistance. I drove logic development, testing
              cycles, and ensured the project was delivered end-to-end.
            </p>

            <ul className="mt-6 space-y-3">
              <Bullet icon={Users}>Coordinated a team of peers, owning timelines and reviews.</Bullet>
              <Bullet icon={Compass}>Designed the navigation logic for assistive guidance.</Bullet>
              <Bullet icon={CheckCircle2}>Validated the prototype through iterative testing.</Bullet>
            </ul>
          </article>

          <aside className="bento-card">
            <p className="font-mono text-xs text-gold mb-2">// role</p>
            <h3 className="font-mono text-lg">Team Leader</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Planning, delegation, and delivery.
            </p>
          </aside>

          <aside className="bento-card">
            <p className="font-mono text-xs text-gold mb-2">// focus</p>
            <h3 className="font-mono text-lg">Hardware + Logic</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Embedded thinking with practical UX.
            </p>
          </aside>
        </div>

        <div className="mt-10 bento-card text-center">
          <p className="font-mono text-sm text-muted-foreground">
            More projects in progress —{" "}
            <a
              href="https://github.com/Umamagesh121"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              follow on GitHub
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Bullet({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <Icon className="size-4 text-gold mt-0.5 shrink-0" />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}
