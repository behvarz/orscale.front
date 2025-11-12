"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations, { defaultLanguage, supportedLanguages } from "../../../lib/translations";
import { localizeProject } from "../../../lib/projects";

export default function ProjectClient({ project }) {
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
  const localized = useMemo(() => localizeProject(project, lang), [lang, project]);
  const preview = project.preview ?? {};
  const previewVars = {
    "--preview-scale": isMobile ? 1 : preview.detailScale ?? 0.65,
    "--preview-height": `${
      isMobile ? preview.mobileHeight ?? 540 : preview.detailHeight ?? 720
    }px`,
    "--preview-mobile-height": `${preview.mobileHeight ?? 540}px`,
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header menu={t.menu} slogan={t.slogan} />

      <section className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              {t.projectsPage.detail.overview}
            </p>
            <h1 className="text-4xl font-bold text-white">{localized.locale.title}</h1>
            <p className="text-slate-300 leading-relaxed">
              {localized.locale.summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4 text-sm text-left">
            <MetaCard label={t.projectsPage.detail.country} value={localized.locale.country} />
            <MetaCard label={t.projectsPage.detail.year} value={String(localized.year)} />
            <MetaCard label={t.projectsPage.detail.industry} value={localized.locale.industry} />
            <MetaCard label={t.projectsPage.detail.tech} value={localized.techStack.join(" · ")} />
          </div>

          <div className="space-y-2">
            <div className="preview-shell" style={previewVars}>
              <div className="preview-bar">{t.projectsPage.livePreview}</div>
              <div className="preview-hover">
                <iframe
                  src={localized.url}
                  title={`${localized.locale.title} live site`}
                  loading="lazy"
                  className="preview-iframe"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <article
              className="bg-slate-900/70 border border-slate-800/70 rounded-3xl p-8 space-y-6"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <p className="text-slate-200 leading-relaxed">
                {localized.locale.details}
              </p>

              {localized.locale.highlights?.length > 0 && (
                <div>
                  <p className="text-sm uppercase tracking-wide text-slate-400 mb-3">
                    {t.projectsPage.detail.highlights}
                  </p>
                  <ul className="space-y-2 text-slate-200">
                    {localized.locale.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-cyan-300 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3 text-sm">
                {localized.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={localized.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold"
                >
                  {t.projectsPage.detail.visit}
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer footer={t.footer} />
    </main>
  );
}

function MetaCard({ label, value }) {
  return (
    <div
      className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 text-slate-300 text-center"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-white mt-1">{value}</p>
    </div>
  );
}