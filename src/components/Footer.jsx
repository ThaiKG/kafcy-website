export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-paper/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-paper/50 text-xs">
        <p>© {new Date().getFullYear()} KaFCy DESIGN&amp;BUILD.</p>
        <p className="font-mono uppercase tracking-wider">Katy, Texas</p>
      </div>
    </footer>
  );
}
