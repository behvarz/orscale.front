const projects = [
  {
    slug: "remart-ai-gallery",
    url: "https://remart.tr",
    year: 2025,
    country: {
      en: "Turkey",
      tr: "Türkiye",
      de: "Türkei",
      ru: "Турция",
      pt: "Turquia",
    },
    industry: {
      en: "Immersive Art & AI Sales",
      tr: "Dijital Sanat ve Yapay Zekâ Satış",
      de: "Immersive Kunst & KI-Vertrieb",
      ru: "Иммерсивное искусство и продажи с ИИ",
      pt: "Arte Imersiva & Vendas com IA",
    },
    techStack: ["Next.js 15", "Vector DB", "Azure OpenAI", "Tailwind CSS", "Vercel"],
    preview: {
      detailHeight: 720,
      detailScale: 0.6,
      cardHeight: 340,
      cardScale: 0.7,
      mobileHeight: 540,
    },
    copy: {
      en: {
        title: "Remart AI Gallery",
        summary:
          "Always-on curator that speaks for the artist, explains each piece, and nudges collectors to buy.",
        details:
          "Remart is an AI-powered experience for a contemporary painter in Istanbul. We ingested sketchbooks, atelier notes, and live interviews to fine-tune a model that now welcomes visitors 24/7. The gallery guides people through every canvas, explains techniques and inspiration, and can gently convert curiosity into sales without feeling pushy.",
        highlights: [
          "Fine-tuned artist twin that speaks English + Turkish with identical tone",
          "Dynamic gallery view mixing high-res renders, process videos, and prompts",
          "Commerce layer that tracks interest and routes warm leads to the studio",
        ],
      },
      tr: {
        title: "Remart Yapay Zekâ Galerisi",
        summary:
          "Sanatçı adına konuşan, eserleri anlatan ve koleksiyonerleri kibarca satın almaya yönlendiren 7/24 küratör.",
        details:
          "Remart, İstanbul’daki çağdaş bir ressam için tasarladığımız yapay zekâ destekli sergi deneyimi. Eskiz defterleri, atölye notları ve sanatçı röportajlarını toplayıp modeli eğittik; artık ziyaretçilerle gece gündüz profesyonel biçimde konuşabiliyor. Her eserin tekniğini ve ilhamını açıklıyor, merakı satışa dönüştürürken samimi kalıyor.",
        highlights: [
          "Sanatçının tonunu birebir koruyan Türkçe-İngilizce asistan",
          "Yüksek çözünürlüklü render, süreç videoları ve prompt’ları birleştiren galeri",
          "İlgiyi takip edip sıcak lead’leri stüdyoya yönlendiren satış katmanı",
        ],
      },
      de: {
        title: "Remart AI Gallery",
        summary:
          "Ein Kurator auf KI-Basis, der rund um die Uhr über jedes Werk spricht und Käufer behutsam begleitet.",
        details:
          "Für eine Künstlerin in Istanbul haben wir Skizzenbücher, Notizen und Interviews genutzt, um ein Modell zu trainieren. Besucher erhalten jederzeit eine persönliche Führung, lernen Technik und Inspiration kennen und werden auf elegante Weise zum Kauf motiviert – ohne aufdringlich zu wirken.",
        highlights: [
          "Bilinguale Künstler-Zwillings-KI mit identischer Tonalität",
          "Galerie-UI mit Renderings, Making-of-Videos und Prompt-Stories",
          "Lead-Tracking, das Interessenten direkt ans Atelier übergibt",
        ],
      },
      ru: {
        title: "Remart AI-галерея",
        summary:
          "Постоянный куратор, который рассказывает об искусстве и мягко подталкивает коллекционеров к покупке.",
        details:
          "Мы обучили модель на эскизах, заметках и интервью турецкого художника. Теперь посетители получают объяснения техник, историй и вдохновения в любое время суток, а ассистент вежливо переводит интерес в продажи и уведомляет студию.",
        highlights: [
          "Двуязычный цифровой двойник художника",
          "Иммерсивная витрина с рендерами и видеопроцессом",
          "Система лид-менеджмента для последующих продаж",
        ],
      },
      pt: {
        title: "Remart Galeria com IA",
        summary:
          "Curador sempre ativo que explica cada obra e incentiva colecionadores com educação.",
        details:
          "Reunimos cadernos, notas e entrevistas do artista para treinar um modelo próprio. A galeria conversa 24/7, descreve técnicas, inspirações e conduz visitantes até o checkout sem perder o toque humano.",
        highlights: [
          "Gêmeo digital bilíngue do artista",
          "Galeria imersiva com renders e vídeos do processo",
          "Registro de interesse e repasse automático ao estúdio",
        ],
      },
    },
  },
  {
    slug: "bibeauty-global",
    url: "https://www.bibeautyglobal.com",
    year: 2023,
    country: {
      en: "Turkey",
      tr: "Türkiye",
      de: "Türkei",
      ru: "Турция",
      pt: "Turquia",
    },
    industry: {
      en: "Beauty eCommerce & Operations",
      tr: "Güzellik e-Ticaret ve Operasyon",
      de: "Beauty E-Commerce & Operations",
      ru: "E-commerce красоты и операции",
      pt: "E-commerce de Beleza e Operações",
    },
    techStack: ["Next.js 15", "Node.js API", "PostgreSQL", "OpenAI", "Stripe POS", "Shippo"],
    preview: {
      detailHeight: 840,
      detailScale: 0.52,
      cardHeight: 400,
      cardScale: 0.6,
      mobileHeight: 620,
    },
    copy: {
      en: {
        title: "BiBeauty Global",
        summary:
          "Direct-to-consumer beauty store with a cockpit for logistics, messaging, and paid media.",
        details:
          "We rebuilt BiBeauty’s storefront together with a control panel for the Bursa HQ. Operators see where every visitor comes from, start a chat instantly, and manage inventory, shipping, POS, socials, and content creation from one dashboard. The AI assistant prepares Meta ads based on purchase history and helped lift sales 135% in the first six months.",
        highlights: [
          "Unified CRM + chat that tracks every touchpoint",
          "Shipping & POS integrations with live exception alerts",
          "AI content studio that drafts campaigns and social posts",
        ],
      },
      tr: {
        title: "BiBeauty Global",
        summary:
          "Lojistik, mesajlaşma ve reklam yönetimi olan uçtan uca e-ticaret platformu.",
        details:
          "Bursa merkezli BiBeauty için mağazayı ve kontrol panelini baştan kurduk. Operasyon ekibi ziyaretçi kaynağını anında görüyor, sohbet başlatabiliyor, stok, kargo, POS, sosyal medya ve içerik üretimini tek panelden yönetiyor. Yapay zekâ modülü müşteri geçmişine göre Meta reklamları hazırlıyor ve ilk 6 ayda satışları %135 artırdı.",
        highlights: [
          "Tüm temas noktalarını izleyen birleşik CRM ve chat",
          "Anlık uyarılarla kargo ve POS entegrasyonları",
          "Reklam ve sosyal içerik taslağı üreten AI stüdyo",
        ],
      },
      de: {
        title: "BiBeauty Global",
        summary:
          "Beauty-E-Commerce mit Cockpit für Logistik, Messaging und Paid Media.",
        details:
          "Für das Team in Bursa entwickelten wir einen neuen Shop plus Kontrollzentrum. Mitarbeiter sehen Herkunftskanäle, starten Chats, steuern Lager, Versand, POS, Social Media und Content an einem Ort. Ein KI-Modul erstellt Meta-Ads aus Kundendaten und steigerte den Umsatz in sechs Monaten um 135 %.",
        highlights: [
          "Zentrales CRM mit Live-Chat",
          "Versand- und POS-Integrationen mit Echtzeit-Alerts",
          "KI-Studio für Kampagnen & Social Content",
        ],
      },
      ru: {
        title: "BiBeauty Global",
        summary:
          "Интернет-магазин косметики с панелью управления логистикой, чатами и рекламой.",
        details:
          "Мы создали новый сайт и дашборд для офиса в Бурсе. Операторы видят источник трафика, мгновенно пишут клиенту, управляют складом, доставкой, POS, соцсетями и контентом из одного интерфейса. Модуль ИИ готовит объявления для Meta по истории покупок и увеличил продажи на 135 % за полгода.",
        highlights: [
          "Единая CRM с онлайн-чатом",
          "Интеграции доставки и POS с мгновенными оповещениями",
          "ИИ-студия для контента и реклам",
        ],
      },
      pt: {
        title: "BiBeauty Global",
        summary:
          "Loja de beleza D2C com cockpit para logística, mensagens e mídia paga.",
        details:
          "Reconstruímos o site e o painel do headquarters em Bursa. A equipe vê a origem de cada visita, abre chats na hora e gerencia estoque, frete, POS, redes sociais e conteúdo em um só dashboard. O módulo de IA cria anúncios para Meta baseados no histórico do cliente e elevou as vendas em 135 % nos seis primeiros meses.",
        highlights: [
          "CRM unificado com chat integrado",
          "Integrações de envio e POS com alertas em tempo real",
          "Estúdio de IA para campanhas e posts sociais",
        ],
      },
    },
  },
];

const fallbackLang = "en";

export function getProjects() {
  return projects;
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

function localize(map = {}, lang = fallbackLang) {
  return map[lang] ?? map[fallbackLang] ?? "";
}

export function localizeProject(project, lang = fallbackLang) {
  const copy = project.copy?.[lang] ?? project.copy?.[fallbackLang] ?? {};
  return {
    ...project,
    locale: {
      title: copy.title,
      summary: copy.summary,
      details: copy.details,
      highlights: copy.highlights ?? [],
      country: localize(project.country, lang),
      industry: localize(project.industry, lang),
    },
  };
}

export default projects;
