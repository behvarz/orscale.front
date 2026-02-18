"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations, { defaultLanguage, supportedLanguages } from "../../lib/translations";
import { getProjects, localizeProject } from "../../lib/projects";

export default function ProjectsPage() {
  const [lang, setLang] = useState(defaultLanguage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const matched = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;
    setLang(matched);
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const t = translations[lang];

  const localizedProjects = useMemo(() => {
    const preferredOrder = [
      "21-gunde-marka",
      "qeasypark",
      "remart-ai-gallery",
      "bibeauty-global",
    ];
    const orderMap = new Map(preferredOrder.map((slug, index) => [slug, index]));

    return getProjects()
      .slice()
      .sort((a, b) => {
        const aOrder = orderMap.has(a.slug) ? orderMap.get(a.slug) : Number.MAX_SAFE_INTEGER;
        const bOrder = orderMap.has(b.slug) ? orderMap.get(b.slug) : Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder;
      })
      .map((project) => localizeProject(project, lang));
  }, [lang]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header menu={t.menu} slogan={t.slogan} />

      <section className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            {t.projectsPage.livePreview}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            {t.projectsPage.heading}
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            {t.projectsPage.subheading}
          </p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {localizedProjects.map((project) => {
            const previewStyle = {
              "--preview-scale": isMobile ? 1 : project.preview?.cardScale ?? 0.72,
              "--preview-height": `${
                isMobile
                  ? project.preview?.mobileHeight ?? 520
                  : project.preview?.cardHeight ?? 360
              }px`,
              "--preview-mobile-height": `${project.preview?.mobileHeight ?? 520}px`,
            };

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-3xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="preview-shell" style={previewStyle}>
                  <div className="preview-bar">{t.projectsPage.livePreview}</div>
                  <div className="preview-hover">
                    <iframe
                      src={project.url}
                      title={`${project.locale.title} preview`}
                      loading="lazy"
                      className="preview-iframe"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    {project.locale.country} · {project.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.locale.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.locale.summary}
                  </p>
                  <div className="text-xs text-slate-400">
                    {project.locale.industry}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                    <span>{t.projectsPage.cardAction}</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer footer={t.footer} />
    </main>
  );
}
