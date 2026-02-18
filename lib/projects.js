const projects = [
  {
    slug: "qeasypark",
    url: "https://qeasypark.com",
    year: 2025,
    country: {
      en: "United States",
      tr: "Amerika Birleşik Devletleri",
      de: "Vereinigte Staaten",
      ru: "Соединенные Штаты",
      pt: "Estados Unidos",
    },
    industry: {
      en: "AI-Powered Parking Management",
      tr: "Yapay Zekâ Destekli Otopark Yönetimi",
      de: "KI-gestütztes Parkplatzmanagement",
      ru: "Управление парковкой на основе ИИ",
      pt: "Gestão de Estacionamento com IA",
    },
    techStack: ["Next.js", "AI/ML (ALPR)", "Stripe Express", "Node.js", "PostgreSQL", "Real-time Analytics"],
    preview: {
      detailHeight: 800,
      detailScale: 0.55,
      cardHeight: 380,
      cardScale: 0.65,
      mobileHeight: 600,
    },
    copy: {
      en: {
        title: "QeasyPark",
        summary:
          "AI-powered parking solution that scans QR codes, automatically detects license plates and vehicle details, and handles payments in 30 seconds.",
        details:
          "QeasyPark is a comprehensive parking management platform operating across America. Drivers scan a QR code, capture their vehicle image, and our AI automatically analyzes the license plate, model, make, and color with 99.7% accuracy. The system calculates oversize fees when applicable and processes secure payments via Stripe Express. Parking lot owners get a complete accounting dashboard with real-time analytics, revenue tracking, occupancy monitoring, and automatic payouts. The platform supports flexible pricing (hourly, daily, night, event rates), grace periods, overstay policies, and generates branded QR codes with HMAC-signed secure URLs.",
        highlights: [
          "ALPR technology with 99.7% accuracy for automatic license plate and vehicle detection",
          "Complete accounting system with Stripe Express integration for automatic payouts",
          "Real-time dashboard with analytics, revenue tracking, and occupancy monitoring",
        ],
      },
      tr: {
        title: "QeasyPark",
        summary:
          "QR kod okutarak araç plakası ve detaylarını otomatik algılayan, 30 saniyede ödeme işlemini tamamlayan yapay zekâ destekli otopark çözümü.",
        details:
          "QeasyPark, Amerika'da faaliyet gösteren kapsamlı bir otopark yönetim platformu. Sürücüler QR kod okutuyor, araç görselini çekiyor ve geliştirdiğimiz yapay zekâ plaka, model, marka ve rengi %99.7 doğrulukla otomatik analiz ediyor. Sistem gerektiğinde oversize ücretini hesaplıyor ve Stripe Express ile güvenli ödemeleri işliyor. Otopark sahipleri gerçek zamanlı analitik, gelir takibi, doluluk izleme ve otomatik ödemeler içeren eksiksiz bir muhasebe paneline sahip. Platform esnek fiyatlandırma (saatlik, günlük, gece, etkinlik tarifeleri), bekleme süreleri, fazla kalma politikalarını destekliyor ve HMAC imzalı güvenli URL'lerle markalı QR kodlar üretiyor.",
        highlights: [
          "%99.7 doğruluk oranıyla otomatik plaka ve araç algılama için ALPR teknolojisi",
          "Otomatik ödemeler için Stripe Express entegrasyonlu eksiksiz muhasebe sistemi",
          "Analitik, gelir takibi ve doluluk izleme içeren gerçek zamanlı kontrol paneli",
        ],
      },
      de: {
        title: "QeasyPark",
        summary:
          "KI-gestützte Parklösung, die QR-Codes scannt, Kennzeichen und Fahrzeugdetails automatisch erkennt und Zahlungen in 30 Sekunden abwickelt.",
        details:
          "QeasyPark ist eine umfassende Parkplatzverwaltungsplattform, die in Amerika operiert. Fahrer scannen einen QR-Code, erfassen ein Fahrzeugbild, und unsere KI analysiert automatisch Kennzeichen, Modell, Marke und Farbe mit 99,7% Genauigkeit. Das System berechnet Oversize-Gebühren bei Bedarf und verarbeitet sichere Zahlungen über Stripe Express. Parkplatzbesitzer erhalten ein vollständiges Buchhaltungs-Dashboard mit Echtzeit-Analysen, Umsatzverfolgung, Belegungsüberwachung und automatischen Auszahlungen. Die Plattform unterstützt flexible Preisgestaltung (stündlich, täglich, Nacht-, Event-Tarife), Kulanzfristen, Überschreitungsrichtlinien und generiert markenspezifische QR-Codes mit HMAC-signierten sicheren URLs.",
        highlights: [
          "ALPR-Technologie mit 99,7% Genauigkeit für automatische Kennzeichen- und Fahrzeucherkennung",
          "Vollständiges Buchhaltungssystem mit Stripe Express-Integration für automatische Auszahlungen",
          "Echtzeit-Dashboard mit Analysen, Umsatzverfolgung und Belegungsüberwachung",
        ],
      },
      ru: {
        title: "QeasyPark",
        summary:
          "Парковочное решение на основе ИИ, которое сканирует QR-коды, автоматически распознает номера и детали автомобиля и обрабатывает платежи за 30 секунд.",
        details:
          "QeasyPark — комплексная платформа управления парковками, работающая в Америке. Водители сканируют QR-код, делают фото автомобиля, и наш ИИ автоматически анализирует номер, модель, марку и цвет с точностью 99,7%. Система рассчитывает доплату за крупногабаритные автомобили при необходимости и обрабатывает безопасные платежи через Stripe Express. Владельцы парковок получают полную бухгалтерскую панель с аналитикой в реальном времени, отслеживанием доходов, мониторингом заполненности и автоматическими выплатами. Платформа поддерживает гибкое ценообразование (почасовая, дневная, ночная, событийная ставки), льготные периоды, политику превышения времени и генерирует фирменные QR-коды с HMAC-подписанными безопасными URL.",
        highlights: [
          "Технология ALPR с точностью 99,7% для автоматического распознавания номеров и автомобилей",
          "Полная бухгалтерская система с интеграцией Stripe Express для автоматических выплат",
          "Панель в реальном времени с аналитикой, отслеживанием доходов и мониторингом заполненности",
        ],
      },
      pt: {
        title: "QeasyPark",
        summary:
          "Solução de estacionamento com IA que escaneia códigos QR, detecta automaticamente placas e detalhes do veículo e processa pagamentos em 30 segundos.",
        details:
          "QeasyPark é uma plataforma abrangente de gestão de estacionamentos que opera na América. Motoristas escaneiam um QR code, capturam a imagem do veículo, e nossa IA analisa automaticamente a placa, modelo, marca e cor com 99,7% de precisão. O sistema calcula taxas de veículos grandes quando aplicável e processa pagamentos seguros via Stripe Express. Proprietários de estacionamentos recebem um painel contábil completo com análises em tempo real, rastreamento de receita, monitoramento de ocupação e pagamentos automáticos. A plataforma suporta preços flexíveis (horário, diário, noturno, eventos), períodos de tolerância, políticas de permanência prolongada e gera QR codes personalizados com URLs seguras assinadas por HMAC.",
        highlights: [
          "Tecnologia ALPR com 99,7% de precisão para detecção automática de placas e veículos",
          "Sistema contábil completo com integração Stripe Express para pagamentos automáticos",
          "Painel em tempo real com análises, rastreamento de receita e monitoramento de ocupação",
        ],
      },
    },
  },
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
    slug: "21-gunde-marka",
    url: "https://21gundemarka.com/",
    year: 2025,
    country: {
      en: "Turkey",
      tr: "Türkiye",
      de: "Türkei",
      ru: "Турция",
      pt: "Turquia",
    },
    industry: {
      en: "Structured Online Education Platform",
      tr: "Yapılandırılmış Online Eğitim Platformu",
      de: "Strukturierte Online-Bildungsplattform",
      ru: "Структурированная образовательная онлайн-платформа",
      pt: "Plataforma de Educação Online Estruturada",
    },
    techStack: [
      "Laravel",
      "PHP 8.2+",
      "PostgreSQL 16",
      "Redis",
      "Vimeo Private",
      "Iyzico",
      "MailerSend",
      "Ubuntu 22.04 LTS",
    ],
    preview: {
      detailHeight: 820,
      detailScale: 0.56,
      cardHeight: 390,
      cardScale: 0.63,
      mobileHeight: 600,
      allowIframe: true,
    },
    copy: {
      en: {
        title: "21 Günde Marka",
        summary:
          "A discipline-first 21-day brand acceleration platform that unlocks content daily and enforces completion.",
        details:
          "21 Günde Marka is a fully custom education platform built from scratch to enforce consistency and completion discipline. Users can review the 21-day program before purchase, then continue with secure Iyzico payment, auto account creation, and day-by-day progression. Each day follows a mandatory sequence (video, PDF, quiz), with anti-skip controls, minimum quiz score rules, and countdown-based unlocking at 23:59. The system also includes automated personalized certificate generation, queue-based email workflows, Vimeo private video controls, and a scalable Laravel + PostgreSQL + Redis backend on Ubuntu VPS.",
        highlights: [
          "Time-locked and sequential learning flow with anti-skip controls",
          "Automated certificate generation and transactional email journeys",
          "Custom-built, scalable architecture with Laravel, PostgreSQL, and Redis",
        ],
      },
      tr: {
        title: "21 Günde Marka",
        summary:
          "İçeriği günlük açılan ve tamamlanma disiplinini zorunlu kılan 21 günlük, disiplin odaklı marka hızlandırma platformu.",
        details:
          "21 Günde Marka, hazır LMS şablonu kullanılmadan sıfırdan geliştirilmiş, süreklilik ve tamamlama disiplinini zorunlu kılan özel bir eğitim platformudur. Kullanıcılar satın alma öncesinde 21 günlük akışı inceleyebilir; ödeme sonrası Iyzico ile güvenli işlem, otomatik hesap oluşturma ve öğrenci paneline yönlendirme gerçekleşir. Günlük akış video, PDF ve quiz sırasıyla ilerler; ileri sarma engeli, sırayla tamamlama, minimum quiz puanı ve 23:59 bazlı kilit açma kurallarıyla desteklenir. Sistem, kişiselleştirilmiş sertifika üretimi, kuyruk tabanlı e-posta otomasyonu, Vimeo özel video güvenliği ve Laravel + PostgreSQL + Redis altyapısıyla ölçeklenebilir şekilde kurgulanmıştır.",
        highlights: [
          "Zaman kilitli, sıralı ve atlama engelli eğitim akışı",
          "Otomatik kişisel sertifika üretimi ve işlem bazlı e-posta otomasyonu",
          "Laravel, PostgreSQL ve Redis ile sıfırdan geliştirilen ölçeklenebilir mimari",
        ],
      },
      de: {
        title: "21 Günde Marka",
        summary:
          "Disziplinorientierte 21-Tage-Plattform zur Markenbeschleunigung mit täglicher Freischaltung und Abschlusskontrolle.",
        details:
          "21 Günde Marka ist eine vollständig individuelle Lernplattform, die ohne fertige LMS-Templates entwickelt wurde, um Konsistenz und Abschlussdisziplin sicherzustellen. Vor dem Kauf sehen Nutzer den 21-Tage-Ablauf; nach sicherer Iyzico-Zahlung werden Konto und Dashboard-Zugang automatisch erstellt. Jeder Tag folgt einer verpflichtenden Reihenfolge aus Video, PDF und Quiz mit Anti-Skip-Regeln, Mindestpunktzahl und Countdown-basierter Freischaltung um 23:59. Zusätzlich bietet das System automatisierte personalisierte Zertifikate, queue-basierte E-Mail-Automatisierung, Vimeo-Private-Video-Schutz und eine skalierbare Laravel-, PostgreSQL- und Redis-Architektur auf Ubuntu VPS.",
        highlights: [
          "Zeitgesteuerter Lernfluss mit fester Reihenfolge und Anti-Skip-Logik",
          "Automatische Zertifikatserstellung und E-Mail-Automatisierung",
          "Skalierbare Individualsoftware mit Laravel, PostgreSQL und Redis",
        ],
      },
      ru: {
        title: "21 Günde Marka",
        summary:
          "Дисциплинарная 21-дневная платформа ускорения бренда с ежедневной разблокировкой контента и контролем завершения.",
        details:
          "21 Günde Marka — полностью кастомная образовательная платформа, разработанная с нуля без готовых LMS-шаблонов, чтобы обеспечивать последовательность и дисциплину завершения. До покупки пользователь видит структуру всех 21 дней, а после безопасной оплаты через Iyzico система автоматически создает аккаунт и открывает дашборд. Каждый день проходит в обязательной последовательности: видео, PDF и тест, с защитой от пропуска, требованием минимального балла и автоматической разблокировкой следующего дня в 23:59. Платформа также включает автоматическую генерацию персонального сертификата, очереди для писем, приватную видео-инфраструктуру Vimeo и масштабируемый стек Laravel + PostgreSQL + Redis на Ubuntu VPS.",
        highlights: [
          "Контролируемый пошаговый процесс обучения с time-lock и anti-skip",
          "Автоматическая выдача персонального сертификата и email-автоматизация",
          "Масштабируемая кастомная архитектура на Laravel, PostgreSQL и Redis",
        ],
      },
      pt: {
        title: "21 Günde Marka",
        summary:
          "Plataforma de aceleração de marca em 21 dias, orientada por disciplina, com liberação diária e controle de conclusão.",
        details:
          "21 Günde Marka é uma plataforma educacional totalmente personalizada, construída do zero sem templates LMS prontos, para garantir consistência e disciplina de conclusão. Antes da compra, o usuário visualiza os 21 dias; após o pagamento seguro via Iyzico, a conta é criada automaticamente e o acesso ao painel é liberado. Cada dia segue uma sequência obrigatória de vídeo, PDF e quiz, com bloqueio de avanço, nota mínima e desbloqueio do próximo dia às 23:59. O sistema também oferece geração automática de certificado personalizado, automações de e-mail em fila, vídeos privados no Vimeo e infraestrutura escalável com Laravel, PostgreSQL e Redis em VPS Ubuntu.",
        highlights: [
          "Fluxo de aprendizado sequencial com bloqueio temporal e anti-skip",
          "Certificação personalizada automática e jornadas de e-mail",
          "Arquitetura escalável sob medida com Laravel, PostgreSQL e Redis",
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
