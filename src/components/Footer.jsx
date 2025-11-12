export default function Footer({ footer }) {
  return (
    <footer className="relative border-t border-slate-800 mt-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.2)", backdropFilter: "blur(20px)" }}
      />
      <div className="relative max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-3 text-sm text-slate-400 text-center md:flex-row md:justify-between md:text-left">
        <span>
          © {new Date().getFullYear()} OrScale — {footer.rights}
        </span>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <a href="mailto:info@orscale.com" className="hover:text-slate-200">
            info@orscale.com
          </a>
          <a
            href="https://www.instagram.com/orscale.ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/orscale"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
