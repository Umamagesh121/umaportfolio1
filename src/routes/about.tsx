import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Umamageshwaran A" },
      {
        name: "description",
        content:
          "Background, education, internship and certifications of Umamageshwaran A.",
      },
      { property: "og:title", content: "About — Umamageshwaran A" },
      {
        property: "og:description",
        content: "CSE student, intern, and aspiring software developer.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-4xl px-5 py-16 w-full">
        <p className="font-mono text-xs text-gold">// about</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-mono">
          Curious, driven, <span className="text-gradient-gold">team-first.</span>
        </h1>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
          I'm Umamageshwaran A — an aspiring software developer pursuing B.E. in
          Computer Science. My goal is to join a strong engineering team where I
          can apply my programming, problem-solving, and analytical skills while
          continuing to grow professionally.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card icon={GraduationCap} title="Education">
            <p className="font-mono text-sm">B.E. Computer Science (Pursuing)</p>
            <p className="text-xs text-muted-foreground">
              Hindusthan Institute of Technology, Coimbatore · 2024–2027 · Anna University
            </p>
            <div className="my-3 h-px bg-border" />
            <p className="font-mono text-sm">Diploma — Computer Science & Engineering</p>
            <p className="text-xs text-muted-foreground">
              Government Polytechnic College, Nagapadi · 2021–2024 · 80%
            </p>
          </Card>

          <Card icon={Briefcase} title="Internship">
            <p className="font-mono text-sm">Ads Intern — Digital Marketing</p>
            <p className="text-xs text-muted-foreground">
              Aariyath IT Technology · June 2023
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Increased user engagement by <span className="text-gold">20%</span>{" "}
              within 3 weeks through targeted campaign management.
            </p>
          </Card>

          <Card icon={Award} title="Online Courses">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• NPTEL Organizational Behavior – 2 (2025)</li>
              <li>• Google AI Agents Intensive Course</li>
              <li>• Kaggle Certifications</li>
            </ul>
          </Card>

          <Card icon={Heart} title="Soft Skills">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Communication & presentation</li>
              <li>• Analytical & problem-solving</li>
              <li>• Team-oriented and independent</li>
              <li>• Quick learner & adaptable</li>
              <li>• Strong time management</li>
            </ul>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="size-4 text-gold" />
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
