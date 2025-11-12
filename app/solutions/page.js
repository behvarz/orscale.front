"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations, { defaultLanguage, supportedLanguages } from "../../lib/translations";

export default function SolutionsPage() {
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const matched = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;
    setLang(matched);
  }, []);

  const t = translations[lang];

  const solutionsContent = {
    en: {
      title: "Our Solutions",
      body: `At OrScale we do more than deliver technology — we design complete
    solutions. Our portfolio includes automation platforms that eliminate
    repetitive workflows, enterprise-scale web modernization, and AI systems
    that connect people, processes, and data. We have partnered with
    financial institutions, logistics leaders, and global e-commerce brands
    to streamline operations and unlock new revenue models. From AI
    assistants that enhance customer experience to secure integrations for
    telecom and healthcare, every solution is built to scale.`,
    },

    tr: {
      title: "Çözümlerimiz",
      body: `OrScale olarak yalnızca teknoloji sunmuyor, uçtan uca çözümler
    geliştiriyoruz. Portföyümüzde tekrarlayan iş akışlarını ortadan kaldıran
    otomasyon platformları, kurumsal ölçekli web modernizasyonu ve insanları,
    süreçleri ve verileri birleştiren yapay zekâ sistemleri bulunuyor. Finans,
    lojistik ve global e-ticaret markalarıyla çalışarak operasyonları
    sadeleştirdik ve yeni gelir modelleri oluşturduk. Müşteri deneyimini
    iyileştiren yapay zekâ asistanlarından telekom ve sağlık için güvenli
    entegrasyonlara kadar her çözüm ölçeklenebilir şekilde tasarlanıyor.`,
    },

    de: {
      title: "Unsere Lösungen",
      body: `Bei OrScale liefern wir nicht nur Technologie, sondern entwickeln
    ganzheitliche Lösungen. Unser Portfolio reicht von Automatisierungs-
    plattformen über Web-Modernisierung im Unternehmensmaßstab bis hin zu
    KI-Systemen, die Menschen, Prozesse und Daten verbinden. Wir arbeiten mit
    Finanzinstituten, Logistikführern und globalen E‑Commerce-Marken
    zusammen, um Abläufe zu optimieren und neue Geschäftsmodelle zu schaffen.
    Von KI-Assistenten für bessere Kundenerlebnisse bis zu sicheren
    Integrationen für Telekommunikation und Gesundheitswesen ist jede Lösung
    auf Skalierung ausgelegt.`,
    },

    ru: {
      title: "Наши решения",
      body: `В OrScale мы создаём не просто технологии, а полноценные решения.
    В портфеле компании — платформы автоматизации, устраняющие рутинные
    процессы, корпоративная модернизация веб-систем и ИИ, который связывает
    людей, процессы и данные. Мы сотрудничаем с финансовыми организациями,
    лидерами логистики и глобальными e-commerce брендами, помогая им
    оптимизировать операции и открывать новые источники дохода. От ИИ-
    ассистентов для улучшения клиентского опыта до безопасных интеграций для
    телеком- и медсектора — каждое решение спроектировано для масштабирования.`,
    },

    pt: {
      title: "Nossas Soluções",
      body: `Na OrScale, vamos além da entrega de tecnologia — desenhamos soluções
    completas. Nosso portfólio inclui plataformas de automação que eliminam
    tarefas repetitivas, modernização web em escala corporativa e sistemas de
    IA que conectam pessoas, processos e dados. Trabalhamos com instituições
    financeiras, líderes de logística e marcas globais de e-commerce para
    otimizar operações e liberar novas fontes de receita. De assistentes com
    IA que elevam a experiência do cliente a integrações seguras para telecom
    e saúde, cada solução nasce pronta para escalar.`,
    },
  };

  const solutions = solutionsContent[lang] || solutionsContent.en;

  return (
    <main className="min-h-screen flex flex-col">
      <Header menu={t.menu} slogan={t.slogan} />

      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {solutions.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed opacity-0 animate-fadeInUp [animation-delay:2s]">
            {solutions.body}
          </p>
        </div>
      </section>

      <Footer footer={t.footer} />
    </main>
  );
}
