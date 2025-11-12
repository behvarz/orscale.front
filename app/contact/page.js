"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import translations, { defaultLanguage, supportedLanguages } from "../../lib/translations";

export default function ContactPage() {
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const matched = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;
    setLang(matched);
  }, []);

  const t = translations[lang];

  const contactContent = {
    en: {
      title: "Contact Us",
      body: `OrScale is headquartered in Dubai, with operations across Europe,
    the Middle East, and Asia. Our team partners closely with clients and
    ecosystems worldwide to deliver innovation at scale. Whether you want to
    collaborate, invest, or explore AI-driven solutions, we are ready to
    connect. Reach out through the channels below — great partnerships often
    start with a simple conversation.`,
    },

    tr: {
      title: "Bize Ulaşın",
      body: `OrScale’ın merkezi Dubai’dedir ve operasyonlarımız Avrupa, Orta Doğu
    ve Asya’ya uzanır. Ekibimiz, dünya çapındaki müşteriler ve iş ortaklarıyla
    büyük ölçekli inovasyon projeleri yürütmektedir. İş birliği yapmak,
    yatırım fırsatlarını değerlendirmek veya yapay zekâ çözümlerimizi
    keşfetmek isterseniz, her zaman hazırız. Aşağıdaki kanallardan bize
    ulaşın; büyük ortaklıklar çoğu zaman basit bir sohbetle başlar.`,
    },

    de: {
      title: "Kontakt",
      body: `OrScale hat seinen Hauptsitz in Dubai und ist in Europa, dem Nahen Osten
    sowie Asien aktiv. Unser Team arbeitet eng mit Kunden und Partnern
    weltweit zusammen, um Innovation im großen Maßstab zu liefern. Wenn Sie
    eine Zusammenarbeit, Investition oder unsere KI-Lösungen prüfen möchten,
    stehen wir bereit. Kontaktieren Sie uns über die folgenden Kanäle —
    starke Partnerschaften beginnen oft mit einem einfachen Gespräch.`,
    },

    ru: {
      title: "Свяжитесь с нами",
      body: `Штаб-квартира OrScale находится в Дубае, а проекты охватывают Европу,
    Ближний Восток и Азию. Мы тесно сотрудничаем с клиентами и партнёрами
    по всему миру, чтобы реализовывать инновации в крупном масштабе. Если вы
    хотите сотрудничать, инвестировать или познакомиться с нашими решениями
    на базе ИИ, мы всегда на связи. Напишите через каналы ниже — крепкие
    партнёрства начинаются с простого диалога.`,
    },

    pt: {
      title: "Fale Conosco",
      body: `A OrScale tem sede em Dubai e opera pela Europa, Oriente Médio e Ásia.
    Trabalhamos lado a lado com clientes e parceiros globais para entregar
    inovação em escala. Se deseja colaborar, investir ou conhecer nossas
    soluções de IA, estamos prontos para conversar. Utilize os canais abaixo —
    grandes parcerias costumam começar com um diálogo simples.`,
    },
  };

  const contact = contactContent[lang] || contactContent.en;

  return (
    <main className="min-h-screen flex flex-col">
      <Header menu={t.menu} slogan={t.slogan} />

      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {contact.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed opacity-0 animate-fadeInUp [animation-delay:1s]">
            {contact.body}
          </p>

          <div className="space-y-4 text-slate-200 text-center mt-6 opacity-0 animate-fadeInUp [animation-delay:1.5s]">
            <p className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <a
                href="https://www.google.com/maps/place/IFZA+Dubai+Digital+Park/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                IFZA Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE
              </a>
            </p>

            <p className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
              </svg>
              <a href="mailto:info@orscale.com" className="text-cyan-300 hover:underline">
                info@orscale.com
              </a>
            </p>

            <p className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2l2 5-2 1a12.042 12.042 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
              </svg>
              <a href="tel:+905393000890" className="text-cyan-300 hover:underline">
                +90 539 300 0890
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/IFZA+Dubai+Digital+Park/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 opacity-0 animate-zoomIn [animation-delay:2s]"
          >
            <iframe
              title="OrScale Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.356274235815!2d55.37735231501197!3d25.12017218393982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8a3b6c7bfb%3A0xabcdef123456789!2sIFZA%20Dubai%20Digital%20Park!5e0!3m2!1sen!2sae!4v1700000000000"
              width="100%"
              height="250"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </a>
        </div>
      </section>

      <Footer footer={t.footer} />
    </main>
  );
}
