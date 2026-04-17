export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Umamageshwaran A</p>
        <p className="font-mono">Tiruvannamalai, Tamil Nadu · India</p>
      </div>
    </footer>
  );
}
