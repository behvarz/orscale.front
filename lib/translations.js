const brandSlogan = "Limit Scope, or Scale Beyond.";

const translations = {
  en: {
    menu: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      projects: "Projects",
      contact: "Contact",
    },
    slogan: brandSlogan,
    projectsPage: {
      heading: "Selected Work",
      subheading: "A few live products where OrScale automation meets bold design.",
      cardAction: "View project",
      livePreview: "Live preview",
      previewUnavailable: "Live preview is blocked by the target website policy.",
      detail: {
        overview: "Project overview",
        year: "Year",
        country: "Country",
        industry: "Industry",
        tech: "Tech stack",
        visit: "Open website",
        highlights: "Key outcomes",
      },
    },
    chatbot: {
      welcome: "Hello, I'm the OrScale AI assistant. How can I help you?",
      send: "Send",
      thinking: "Thinking...",
    },
    footer: {
      rights: "All rights reserved.",
      email: "Email",
      linkedin: "LinkedIn",
    },
  },
  tr: {
    menu: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      solutions: "Çözümler",
      projects: "Projeler",
      contact: "İletişim",
    },
    slogan: brandSlogan,
    projectsPage: {
      heading: "Seçili Projeler",
      subheading: "OrScale otomasyonunu cesur arayüzlerle buluşturan canlı çalışmalardan bazıları.",
      cardAction: "Projeyi gör",
      livePreview: "Canlı önizleme",
      previewUnavailable: "Canlı önizleme hedef sitenin güvenlik politikası nedeniyle engelli.",
      detail: {
        overview: "Proje özeti",
        year: "Yıl",
        country: "Ülke",
        industry: "Sektör",
        tech: "Teknoloji paketi",
        visit: "Siteyi aç",
        highlights: "Öne çıkan sonuçlar",
      },
    },
    chatbot: {
      welcome: "Merhaba, ben OrScale yapay zekâ asistanıyım. Size nasıl yardımcı olabilirim?",
      send: "Gönder",
      thinking: "Düşünüyorum...",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      email: "E-posta",
      linkedin: "LinkedIn",
    },
  },
  de: {
    menu: {
      home: "Startseite",
      about: "Über uns",
      solutions: "Lösungen",
      projects: "Projekte",
      contact: "Kontakt",
    },
    slogan: brandSlogan,
    projectsPage: {
      heading: "Ausgewählte Arbeiten",
      subheading: "Live-Produkte, in denen OrScale-Automatisierung auf markantes Design trifft.",
      cardAction: "Projekt ansehen",
      livePreview: "Live-Vorschau",
      previewUnavailable: "Die Live-Vorschau wird durch die Sicherheitsrichtlinie der Zielseite blockiert.",
      detail: {
        overview: "Projektübersicht",
        year: "Jahr",
        country: "Land",
        industry: "Branche",
        tech: "Tech-Stack",
        visit: "Website öffnen",
        highlights: "Wichtigste Ergebnisse",
      },
    },
    chatbot: {
      welcome: "Hallo, ich bin der OrScale KI-Assistent. Wie kann ich helfen?",
      send: "Senden",
      thinking: "Denke nach...",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      email: "E-Mail",
      linkedin: "LinkedIn",
    },
  },
  ru: {
    menu: {
      home: "Главная",
      about: "О нас",
      solutions: "Решения",
      projects: "Проекты",
      contact: "Контакты",
    },
    slogan: brandSlogan,
    projectsPage: {
      heading: "Выбранные проекты",
      subheading: "Живые продукты, где автоматизация OrScale сочетается с яркими интерфейсами.",
      cardAction: "Подробнее",
      livePreview: "Онлайн-превью",
      previewUnavailable: "Онлайн-превью заблокировано политикой безопасности целевого сайта.",
      detail: {
        overview: "Обзор проекта",
        year: "Год",
        country: "Страна",
        industry: "Отрасль",
        tech: "Технологии",
        visit: "Открыть сайт",
        highlights: "Ключевые результаты",
      },
    },
    chatbot: {
      welcome: "Здравствуйте, я ИИ-ассистент OrScale. Чем могу помочь?",
      send: "Отправить",
      thinking: "Думаю...",
    },
    footer: {
      rights: "Все права защищены.",
      email: "Эл. почта",
      linkedin: "LinkedIn",
    },
  },
  pt: {
    menu: {
      home: "Início",
      about: "Sobre",
      solutions: "Soluções",
      projects: "Projetos",
      contact: "Contato",
    },
    slogan: brandSlogan,
    projectsPage: {
      heading: "Projetos em Destaque",
      subheading: "Produtos reais que unem automação OrScale e interfaces ousadas.",
      cardAction: "Ver projeto",
      livePreview: "Prévia ao vivo",
      previewUnavailable: "A prévia ao vivo está bloqueada pela política de segurança do site de destino.",
      detail: {
        overview: "Visão geral",
        year: "Ano",
        country: "País",
        industry: "Setor",
        tech: "Stack de tecnologia",
        visit: "Abrir site",
        highlights: "Principais resultados",
      },
    },
    chatbot: {
      welcome: "Olá, sou o assistente de IA da OrScale. Como posso ajudar você?",
      send: "Enviar",
      thinking: "Pensando...",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      email: "E-mail",
      linkedin: "LinkedIn",
    },
  },
};

export const defaultLanguage = "en";
export const supportedLanguages = Object.keys(translations);
export { brandSlogan };

export default translations;
