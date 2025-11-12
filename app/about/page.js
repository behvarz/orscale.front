"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations, { defaultLanguage, supportedLanguages } from "../../lib/translations";

export default function AboutPage() {
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const matched = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;
    setLang(matched);
  }, []);

  const t = translations[lang];

  const aboutContent = {
    en: {
      title: "About OrScale",
      body: `Founded in 2024, OrScale was built with a single mission: to
    redefine how businesses use technology. Headquartered in Dubai and
    operating across Europe, the Middle East, and Asia, we specialize in
    automation, artificial intelligence, and digital transformation. Our
    teams have successfully delivered enterprise-scale solutions in
    finance, logistics, e-commerce, and telecommunications. Today, OrScale
    is recognized as a trusted partner in large-scale innovation projects,
    empowering organizations to reduce costs, accelerate growth, and reach
    global markets with confidence.`,
    },

    tr: {
      title: "OrScale Hakkında",
      body: `2024 yılında kurulan OrScale, işletmelerin teknolojiyi kullanım
    şeklini yeniden tanımlama vizyonuyla yola çıktı. Merkezi Dubai’de
    bulunan şirketimiz, Avrupa, Orta Doğu ve Asya’da faaliyet göstermekte
    olup otomasyon, yapay zekâ ve dijital dönüşüm alanlarında uzmanlaşmıştır.
    Finans, lojistik, e-ticaret ve telekomünikasyon sektörlerinde kurumsal
    ölçekli projeler başarıyla tamamladık. Bugün OrScale, büyük ölçekli
    inovasyon girişimlerinde güvenilir bir ortak olarak tanınmakta ve
    şirketlerin maliyetleri düşürmesini, büyümeyi hızlandırmasını ve küresel
    pazarlara güvenle açılmasını sağlamaktadır.`,
    },

    de: {
      title: "Über OrScale",
      body: `OrScale wurde 2024 gegründet, um die Art und Weise, wie Unternehmen
    Technologie nutzen, neu zu definieren. Mit Hauptsitz in Dubai und
    Niederlassungen in Europa, dem Nahen Osten und Asien sind wir auf
    Automatisierung, künstliche Intelligenz und digitale Transformation
    spezialisiert. Wir haben erfolgreich Unternehmenslösungen in den
    Bereichen Finanzen, Logistik, E-Commerce und Telekommunikation geliefert.
    Heute gilt OrScale als vertrauenswürdiger Partner für groß angelegte
    Innovationsprojekte und unterstützt Unternehmen dabei, Kosten zu senken,
    Wachstum zu beschleunigen und globale Märkte zu erschließen.`,
    },

    ru: {
      title: "О компании OrScale",
      body: `Компания OrScale основана в 2024 году, чтобы переосмыслить подход
    бизнеса к технологиям. Штаб-квартира находится в Дубае, а проекты
    охватывают Европу, Ближний Восток и Азию. Мы специализируемся на
    автоматизации, искусственном интеллекте и цифровой трансформации.
    Команда успешно реализовала решения для финансового сектора, логистики,
    электронной коммерции и телекоммуникаций. Сегодня OrScale — надежный
    партнер в масштабных инновационных программах, которые помогают снижать
    расходы, ускорять рост и уверенно выходить на глобальные рынки.`,
    },

    pt: {
      title: "Sobre a OrScale",
      body: `Fundada em 2024, a OrScale nasceu com a missão de reinventar como
    as empresas utilizam tecnologia. Com sede em Dubai e operações na
    Europa, Oriente Médio e Ásia, somos especialistas em automação,
    inteligência artificial e transformação digital. Já entregamos soluções
    corporativas para finanças, logística, e-commerce e telecomunicações.
    Hoje, a OrScale é reconhecida como parceira de confiança em projetos de
    inovação em larga escala, permitindo que organizações reduzam custos,
    acelerem o crescimento и alcancem mercados globais com segurança.`,
    },
  };

  const about = aboutContent[lang] || aboutContent.en;

  return (
    <main className="min-h-screen flex flex-col">
      <Header menu={t.menu} slogan={t.slogan} />

      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {about.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed opacity-0 animate-fadeInUp [animation-delay:2s]">
            {about.body}
          </p>
        </div>
      </section>

      <Footer footer={t.footer} />
    </main>
  );
}
