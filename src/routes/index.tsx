import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome — Umamageshwaran A" },
      {
        name: "description",
        content:
          "Welcome to the portfolio of Umamageshwaran A — Full Stack Developer with AI.",
      },
      { property: "og:title", content: "Welcome — Umamageshwaran A" },
      {
        property: "og:description",
        content: "Full Stack Developer with AI — enter the portfolio.",
      },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="size-[520px] rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient-gold">Umamageshwaran A</span> 👋
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground">
          Full Stack Developer With AI
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/home"
            className="group inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90 transition"
          >
            Enter Portfolio
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
