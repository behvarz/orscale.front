export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="text-slate-400">The case study you are looking for does not exist yet.</p>
      </div>
    </div>
  );
}