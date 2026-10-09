/*
 * Direção visual desta página: Botânica Editorial.
 * Usar composição assimétrica, marfim quente, verde-seiva, sálvia e terracota,
 * com tipografia editorial e interações suaves que traduzem pausa e cuidado.
 */

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flower2,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511934557792";
const INSTAGRAM_URL = "https://www.instagram.com/aldeia.spa";
const MAPS_URL =
  "https://www.google.com/maps/place/Aldeia+Spa+Wellness/@-23.4877952,-46.9552365,17z/data=!4m15!1m8!3m7!1s0x94cf056334578dcd:0xab74a46b7b72bea4!2sAldeia+Spa+Wellness!8m2!3d-23.4876322!4d-46.9552005!10e5!16s%2Fg%2F11z3570pdl!3m5!1s0x94cf056334578dcd:0xab74a46b7b72bea4!8m2!3d-23.4876322!4d-46.9552005!16s%2Fg%2F11z3570pdl?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

function InstagramBrandIcon({ size = 17 }: { size?: number }) {
  const gradientId = `instagram-gradient-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="35%" stopColor="#fa7e1e" />
          <stop offset="65%" stopColor="#d62976" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill={`url(#${gradientId})`}
      />
      <circle
        cx="12"
        cy="12"
        r="4.6"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.25" fill="#fff" />
    </svg>
  );
}

const images = [
  {
    src: "/assets/aldeia-real14_66534a8d.jpeg",
    alt: "Recepção do Aldeia Spa Wellness",
    kicker: "01 · presença",
    title: "Onde a pausa ganha espaço",
  },
  {
    src: "/assets/aldeia-real-02_cfbdd8fc_0677d483.jpeg",
    alt: "Ambiente interno do Aldeia Spa Wellness",
    kicker: "02 · ambiente",
    title: "Texturas que convidam a respirar",
  },
  {
    src: "/assets/aldeia-real-03_df2140fa_c774589e.jpeg",
    alt: "Detalhe da decoração e dos materiais naturais do spa",
    kicker: "03 · detalhes",
    title: "O cuidado mora nos detalhes",
  },
  {
    src: "/assets/aldeia-real-04_ef5d44e5_8de2291f.jpeg",
    alt: "Sala de atendimento do Aldeia Spa Wellness",
    kicker: "04 · acolhimento",
    title: "Um lugar para chegar por inteiro",
  },
  {
    src: "/assets/aldeia-real-05_64de91f2_30240284.jpeg",
    alt: "Área de convivência do Aldeia Spa Wellness",
    kicker: "05 · encontro",
    title: "Cuidado que também é encontro",
  },
  {
    src: "/assets/aldeia-real-06_a4a3ff8c_332ddd58.jpeg",
    alt: "Elemento de bem-estar em um ambiente do spa",
    kicker: "06 · ritual",
    title: "Pequenos gestos, grande presença",
  },
  {
    src: "/assets/aldeia-real-07_e91660cb_55e0f2d6.jpeg",
    alt: "Sala de prática e movimento do Aldeia Spa Wellness",
    kicker: "07 · movimento",
    title: "Voltar para o próprio ritmo",
  },
  {
    src: "/assets/aldeia-real-11_bc21b53c_9f34016b.jpeg",
    alt: "Interior iluminado do Aldeia Spa Wellness",
    kicker: "08 · luz",
    title: "Luz para abrir espaço por dentro",
  },
  {
    src: "/assets/aldeia-real-12_3d16eaea_764ba6a5.jpeg",
    alt: "Detalhe arquitetônico do espaço do Aldeia Spa",
    kicker: "09 · presença",
    title: "O corpo reconhece quando é bem-vindo",
  },
  {
    src: "/assets/aldeia-real15_417393dd.jpeg",
    alt: "Ambiente real do Aldeia Spa Wellness",
    kicker: "10 · aldeia",
    title: "Um cuidado para viver no seu tempo",
  },
  {
    src: "/assets/aldeia-real16_dbede0e1.jpeg",
    alt: "Ambiente real do Aldeia Spa Wellness",
    kicker: "11 · aldeia",
    title: "Um cuidado para viver no seu tempo",
  },
  {
    src: "/assets/aldeia-real17_7e13ad8a.jpeg",
    alt: "Ambiente real do Aldeia Spa Wellness",
    kicker: "12 · aldeia",
    title: "Um cuidado para viver no seu tempo",
  },
  {
    src: "/assets/aldeia-real18_021a84b9.jpeg",
    alt: "Ambiente real do Aldeia Spa Wellness",
    kicker: "13 · aldeia",
    title: "Um cuidado para viver no seu tempo",
  },
  {
    src: "/assets/aldeia-real19_a295064a.jpeg",
    alt: "Ambiente real do Aldeia Spa Wellness",
    kicker: "14 · aldeia",
    title: "Um cuidado para viver no seu tempo",
  },
];

const eventPhotos = [
  {
    src: "/assets/aldeia-real-08_d3f0c3b1_be645dc4.jpeg",
    alt: "Atendimentos de massagem durante uma ação de bem-estar corporativo",
    caption: "Bem-estar em eventos corporativos",
  },
  {
    src: "/assets/aldeia-real-09_47864258_de29d361.jpeg",
    alt: "Participantes reunidos em uma atividade de movimento e relaxamento",
    caption: "Encontros de cuidado e movimento",
  },
  {
    src: "/assets/aldeia-real-10_6acf417f_60745b7f.jpeg",
    alt: "Mesa preparada para receber convidados em uma celebração",
    caption: "Celebrações e momentos especiais",
  },
];

type Service = {
  name: string;
  short: string;
  description: string;
  icon: string;
  image?: string;
};

const services: Service[] = [
  {
    name: "Spa",
    short: "Spa",
    description:
      "​Spa dos Pés: Um alívio profundo para quem carrega o peso do mundo.Suas bases merecem o mais puro descanso, renovando as energias de todo o corpo",
    icon: "✦",
  },
  {
    name: "Cone Hindu",
    short: "Cone Hindu",
    description:
      " Uma técnica milenar que purifica, acalma a mente e traz um profundo silêncio interior através do equilíbrio energético.",
    icon: "✦",
  },
  {
    name: "​Limpeza de Pele",
    short: "​Limpeza de Pele",
    description:
      " Muito mais que estética: um ritual de oxigenação e renovação que revela a luz natural da sua pele, com toque terapêutico.",
    icon: "✦",
  },
  {
    name: "​Massagem Clássica",
    short: "​Massagem Clássica",
    description:
      " O antídoto perfeito contra a tensão diária. Manobras fluidas que dissolvem o estresse e devolvem a leveza aos seus músculos.",
    icon: "✦",
  },
  {
    name: "​Drenagem Linfática",
    short: "​Drenagem Linfática",
    description:
      "Movimentos leves e precisos que purificam o organismo, eliminam o inchaço e despertam uma sensação imediata de leveza.",
    icon: "✦",
  },
  {
    name: "​Liberação Miofascial",
    short: "​Liberação Miofascial",
    description:
      " Alívio avançado para dores profundas e tensões crônicas, devolvendo a liberdade e a amplitude total aos seus movimentos.",
    icon: "✦",
  },
  {
    name: "​Pedras Quentes",
    short: "​Pedras Quentes",
    description:
      " O calor reconfortante das pedras vulcânicas derrete as armaduras do estresse, aquecendo a alma e relaxando cada fibra do seu corpo.",
    icon: "✦",
  },
  {
    name: "​Bambu Terapia",
    short: "​Bambu Terapia",
    description:
      "Uma massagem vigorosa e revigorante que modela o corpo, alivia tensões e renova profundamente a sua energia vital.",
    icon: "✦",
  },
  {
    name: "​Drenagem Pós-Operatório",
    short: "​Drenagem Pós-Operatório",
    description:
      "Cuidado especializado e delicado, ideal para quem passou por cirurgias como lipoaspiração e abdominoplastia, acelerando a recuperação com segurança e conforto absoluto.",
    icon: "✦",
  },
  {
    name: "​Movimento Consciente",
    short: "​Movimento Consciente",
    description:
      "​Aula de Yoga: Um encontro sagrado entre respiração, corpo e mente. Fortaleça sua flexibilidade e encontre paz inabalável no momento presente.",
    icon: "✦",
  },
  {
    name: "Fisioterapia",
    short: "Fisioterapia",
    description:
      "Ciência e cuidado humanizado para reabilitar o seu corpo, prevenir lesões e devolver o prazer de se movimentar sem dor.",
    icon: "✦",
  },
  {
    name: "Psicologia",
    short: "Psicologia",
    description:
      " Um espaço seguro, confidencial e acolhedor para cuidar da sua mente, expandir sua autoconsciência e resgatar sua paz emocional.",
    icon: "✦",
  },
  {
    name: "Nutrição",
    short: "Nutrição",
    description:
      " A ciência do alimento como medicina para a sua vitalidade, desenhada sob medida para a sua rotina e seus objetivos.",
    icon: "✦",
  },
  {
    name: "Enfermagem Obstétrica",
    short: "Enfermagem Obstétrica",
    description:
      "Acolhimento especializado e humanizado para a gestação, o parto e o pós-parto, cuidando de você e do seu bebê com técnica e afeto.",
    icon: "✦",
  },
  {
    name: "Pilates",
    short: "Pilates",
    description: "Força, mobilidade e estabilidade em cada movimento.",
    icon: "◒",
  },
];

const pillars = [
  {
    number: "01",
    icon: Flower2,
    title: "Yoga com intenção",
    text: "Movimento, respiração e presença para criar uma relação mais atenta com o corpo.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Equipe que acompanha",
    text: "Um olhar integrado de saúde, com profissionais que entendem você por inteiro.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Cuidado humanizado",
    text: "Uma abordagem biopsicossocial que respeita a sua história, o seu tempo e a sua rotina.",
  },
];

function BrandMark() {
  return (
    <a
      className="brand-lockup"
      href="#top"
      aria-label="Aldeia Spa Wellness — início"
    >
      <img
        className="brand-logo-image"
        src="/assets/pasted_file_8TigQw_image_c044bd7d_147f4d69.png"
        alt="Aldeia Spa Wellness"
      />
    </a>
  );
}

function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("experiencia");

  const goToImage = (index: number) => {
    setActiveImage((index + images.length) % images.length);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["experiencia", "cuidado", "espaco", "servicos", "visite"]
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible)
          setActiveSection(
            visible.target.id === "servicos" ? "cuidado" : visible.target.id
          );
      },
      { rootMargin: "-22% 0px -58%", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveImage(current => (current + 1) % images.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goToImage(activeImage - 1);
      if (event.key === "ArrowRight") goToImage(activeImage + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <div className="topline">
        <span>Aldeia da Serra · Barueri — SP</span>
        <span className="topline__right">
          <Clock3 size={13} strokeWidth={1.6} aria-hidden="true" />
          <span>
            Atendimento: seg. a sex., das 08h às 20h · sáb., das 08h às 17h
          </span>
        </span>
      </div>

      <header
        className={`site-header ${menuOpen ? "site-header--open" : ""} ${isScrolled ? "site-header--scrolled" : ""}`}
      >
        <BrandMark />
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          className="main-nav"
          aria-label="Navegação principal"
        >
          <a
            className={activeSection === "experiencia" ? "is-active" : ""}
            href="#experiencia"
            onClick={closeMenu}
            aria-current={
              activeSection === "experiencia" ? "location" : undefined
            }
          >
            A experiência
          </a>
          <a
            className={activeSection === "cuidado" ? "is-active" : ""}
            href="#cuidado"
            onClick={closeMenu}
            aria-current={activeSection === "cuidado" ? "location" : undefined}
          >
            Nosso cuidado
          </a>
          <a
            className={activeSection === "espaco" ? "is-active" : ""}
            href="#espaco"
            onClick={closeMenu}
            aria-current={activeSection === "espaco" ? "location" : undefined}
          >
            O espaço
          </a>
          <a
            className={activeSection === "visite" ? "is-active" : ""}
            href="#visite"
            onClick={closeMenu}
            aria-current={activeSection === "visite" ? "location" : undefined}
          >
            Visite
          </a>
          <a
            className="nav-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Aldeia Spa Wellness no Instagram"
          >
            <InstagramBrandIcon size={16} />
            <span>Instagram</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span /> um espaço de cuidado integrado
            </div>
            <h1 id="hero-title">
              Seu corpo
              <br />
              <em>pede presença.</em>
            </h1>
            <p className="hero-description">
              Yoga, saúde e acolhimento para cuidar do corpo, da mente e das
              emoções — no seu tempo, do seu jeito.
            </p>
            <div className="hero-actions">
              <a
                className="button button--terracotta"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Quero encontrar meu ritmo <ArrowUpRight size={16} />
              </a>
              <a className="text-link text-link--light" href="#experiencia">
                Conhecer o Aldeia <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="hero-footnote__line" />
              <span> presença contínua</span>
              <span className="hero-footnote__line" />
            </div>
          </div>
          <div className="hero-visual">
            <img src={images[0].src} alt={images[0].alt} />
            <div className="hero-visual__overlay" />
            <div className="hero-caption">
              <span>01 / {String(images.length).padStart(2, "0")}</span>
              <span>respirar · mover · cuidar</span>
            </div>
          </div>
        </section>

        <section
          id="experiencia"
          className="experience section-pad"
          aria-labelledby="experience-title"
        >
          <div className="section-intro">
            <div className="eyebrow">01 / a experiência aldeia</div>
            <h2 id="experience-title">
              Cuidar de si não precisa ser mais uma tarefa.
            </h2>
          </div>
          <div className="experience-story">
            <p className="lead-paragraph">
              ​Mais do que um spa, um santuário de reconexão. ​Em um mundo que
              exige velocidade, nós convidamos você a parar. O Aldeia SPA nasceu
              para ser uma empresa de Wellness genuína — daquelas que não
              mascaram o cansaço, mas tratam a raiz do seu bem-estar físico e
              mental. ​Cada detalhe do nosso espaço, cada toque e cada essência
              foram curados para proporcionar uma experiência sensorial única,
              privativa e transformadora. Aqui, sua saúde integral é tratada com
              excelência científica, olhar humano e o luxo supremo da
              exclusividade. ​Permita-se silenciar o caos externo e redescobrir
              o seu estado mais puro de equilíbrio.
            </p>

            <a className="text-link" href="#cuidado">
              Descobrir o nosso olhar <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section
          id="servicos"
          className="services-section"
          aria-labelledby="services-title"
        >
          <div className="services-intro section-pad section-pad--tight">
            <div className="eyebrow eyebrow--light">03 / serviços aldeia</div>
            <h2 id="services-title">
              Não é só um spa.
              <br />
              <em>É cuidado completo.</em>
            </h2>
            <p>
              Sete especialidades, um mesmo propósito: cuidar de você por
              inteiro. Cada serviço se conecta ao próximo para formar um
              ecossistema de saúde, movimento e presença.
            </p>
            <a
              className="button button--orange"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Encontrar meu cuidado <ArrowUpRight size={16} />
            </a>
          </div>
          <div
            className="services-ecosystem"
            aria-label="Ecossistema circular de serviços integrados"
          >
            <div className="ecosystem-ring ecosystem-ring--outer" />
            <div className="ecosystem-ring ecosystem-ring--inner" />
            <div className="ecosystem-core">
              <HeartHandshake size={22} strokeWidth={1.3} />
              <strong>
                Cuidado
                <br />
                <em>completo</em>
              </strong>
              <span>um ecossistema vivo</span>
            </div>
            <svg
              className="ecosystem-lines"
              viewBox="0 0 560 560"
              aria-hidden="true"
            >
              <circle
                cx="280"
                cy="280"
                r="184"
                fill="none"
                stroke="rgba(180,100,60,.42)"
                strokeWidth="1"
                strokeDasharray="2 8"
              />
              {services.map((service, index) => {
                const angle =
                  (index / services.length) * Math.PI * 2 - Math.PI / 2;
                const x = 280 + Math.cos(angle) * 184;
                const y = 280 + Math.sin(angle) * 184;
                return (
                  <line
                    key={`${service.name}-${index}`}
                    x1="280"
                    y1="280"
                    x2={x}
                    y2={y}
                    stroke="rgba(245,241,232,.22)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
            {services.map((service, index) => {
              const angle =
                (index / services.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 33;
              const y = 50 + Math.sin(angle) * 33;
              return (
                <div
                  className={`service-node ${service.image ? "service-node--image" : ""}`}
                  key={`${service.name}-${index}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  title={service.description}
                >
                  {service.image && (
                    <img src={service.image} alt="" aria-hidden="true" />
                  )}
                  <span className="service-node__icon">{service.icon}</span>
                  <strong>{service.short}</strong>
                </div>
              );
            })}
          </div>
          <div className="services-list" aria-label="Lista de serviços">
            {services.map((service, index) => (
              <article
                className="service-list-item"
                key={`${service.name}-${index}`}
              >
                <span className="service-list-number">0{index + 1}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight size={16} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>
        <section
          id="cuidado"
          className="pillars-section"
          aria-labelledby="pillars-title"
        >
          <div className="pillars-header section-pad section-pad--tight">
            <div>
              <div className="eyebrow eyebrow--light">02 / nosso cuidado</div>
              <h1 id="pillars-title">
                Um cuidado que
                <br />
                <em>conversa com você.</em>
              </h1>
            </div>
            <div
              className="partnership-panel"
              aria-labelledby="partnership-title"
            >
              <div className="partnership-panel__eyebrow">
                parcerias e benefícios
              </div>
              <h2 id="partnership-title">
                Bem-estar que também cabe na sua rotina.
              </h2>
              <div className="partnership-panel__brand">
                Wellhub <span>Gold em diante</span>
              </div>
              <p>
                A partir do plano Gold, você pode integrar o Aldeia aos seus
                rituais de autocuidado e desfrutar de:
              </p>
              <ul className="partnership-panel__benefits">
                <li>Massagens</li>
                <li>Drenagem linfática</li>
                <li>Aulas de yoga</li>
              </ul>
              <small>
                Consulte as condições de agendamento e disponibilidade.
              </small>
            </div>
          </div>
          <div className="pillars-grid">
            {pillars.map(pillar => {
              const Icon = pillar.icon;
              return (
                <article className="pillar-card" key={pillar.number}>
                  <div className="pillar-card__top">
                    <span className="pillar-number">{pillar.number}</span>
                    <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <span className="pillar-arrow" aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="espaco"
          className="carousel-section section-pad"
          aria-labelledby="carousel-title"
        >
          <div className="carousel-heading">
            <div>
              <div className="eyebrow">04 / o espaço</div>
              <h2 id="carousel-title">A atmosfera também cuida.</h2>
            </div>
            <p>
              Texturas naturais, luz que desacelera e um ambiente feito para
              você voltar a ouvir o que sente.
            </p>
          </div>
          <div
            className="photo-carousel"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Imagens da atmosfera do Aldeia Spa Wellness"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="carousel-image-wrap">
              {images.map((image, index) => (
                <img
                  key={image.src}
                  className={`carousel-image ${index === activeImage ? "carousel-image--active" : ""}`}
                  src={image.src}
                  alt={image.alt}
                  aria-hidden={index !== activeImage}
                />
              ))}
              <div className="carousel-gradient" />
              <div className="carousel-meta">
                <span>{images[activeImage].kicker}</span>
                <strong>{images[activeImage].title}</strong>
              </div>
              <div className="carousel-controls">
                <button
                  type="button"
                  onClick={() => goToImage(activeImage - 1)}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => goToImage(activeImage + 1)}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="carousel-footer">
              <div
                className="carousel-dots"
                role="tablist"
                aria-label="Selecionar imagem"
              >
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    className={index === activeImage ? "is-active" : ""}
                    type="button"
                    role="tab"
                    aria-selected={index === activeImage}
                    aria-label={`Ver ${image.kicker}`}
                    onClick={() => goToImage(index)}
                  />
                ))}
              </div>
              <span className="carousel-count">
                0{activeImage + 1} <i>/</i> 0{images.length}
              </span>
            </div>
          </div>
        </section>

        <section
          className="event-gallery-section section-pad"
          aria-labelledby="events-title"
        >
          <div className="event-gallery-heading">
            <div>
              <div className="eyebrow">05 / encontros especiais</div>
              <h2 id="events-title">Eventos corporativos e aniversários.</h2>
            </div>
            <p>
              Cuidado, movimento e momentos especiais para compartilhar dentro e
              fora do Aldeia.
            </p>
          </div>
          <div className="event-gallery-grid">
            {eventPhotos.map(photo => (
              <figure className="event-gallery-card" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="visite"
          className="visit-section section-pad"
          aria-labelledby="visit-title"
        >
          <div className="visit-copy">
            <div className="eyebrow">06 / encontre o seu lugar</div>
            <h2 id="visit-title">
              Um refúgio
              <br />
              <em>perto de você.</em>
            </h2>
            <p>
              Na Aldeia da Serra, um espaço de saúde integrado para transformar
              cuidado em parte possível da sua rotina.
            </p>
            <div className="visit-details">
              <div className="visit-detail">
                <MapPin size={18} strokeWidth={1.4} aria-hidden="true" />
                <span>
                  Av. Queimada, 269, sala 23
                  <br />
                  Residencial Morada dos Lagos
                  <br />
                  Aldeia da Serra · Barueri — SP
                </span>
              </div>
              <div className="visit-detail">
                <Clock3 size={18} strokeWidth={1.4} aria-hidden="true" />
                <span>
                  Seg. a sex.: 08h às 20h
                  <br />
                  Sáb.: 08h às 17h
                </span>
              </div>
            </div>
            <div className="visit-actions">
              <a
                className="button button--green"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Agendar pelo WhatsApp <ArrowUpRight size={16} />
              </a>
              <a
                className="text-link"
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Abrir no Maps <MoveUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="visit-art" aria-hidden="true">
            <div className="visit-art__circle visit-art__circle--outer" />
            <div className="visit-art__circle visit-art__circle--inner" />
            <span className="visit-art__word">aldeia</span>
            <div className="visit-art__leaf">
              <Leaf size={33} strokeWidth={1.1} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <BrandMark />
          <p>
            Seu corpo pede presença.
            <br />O cuidado começa aqui.
          </p>
          <a
            className="footer-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramBrandIcon size={17} /> <span>@aldeia.spa</span>{" "}
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aldeia Spa Wellness</span>
          <span> Yoga · saúde · cuidado humanizado</span>
          <a href="#top" aria-label="Voltar ao topo">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o Aldeia Spa pelo WhatsApp"
      >
        <MessageCircle size={22} strokeWidth={1.8} />
        <span>Fale com o Aldeia</span>
      </a>
    </div>
  );
}

export default Home;
