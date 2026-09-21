import "./App.css";

const PROFILE_IMAGE = "/pp.jpg";
const LINKEDIN_URL_PLACEHOLDER = "LINKEDIN_URL_PLACEHOLDER";
const GITHUB_URL_PLACEHOLDER = "GITHUB_URL_PLACEHOLDER";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "ExpressJS"],
  },
  {
    title: "Datenbanken",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git / Versionskontrolle"],
  },
] as const;

const projects = [
  {
    name: "ZaggAthletics",
    description:
      "Webanwendung zum Verfolgen von Workouts und Fortschritten, mit einem Ranking-System, das den Trainingsprozess spielerischer und motivierender macht.",
    image: "/workout-tracker.png",
    link: "https://zagg-wrkt-frontend-git-main-jakobs-projects-79a55897.vercel.app/login",
    technologies: ["ReactJS", "TypeScript"],
  },
  {
    name: "Register App",
    description:
      "Mobile App für den Zugriff auf das digitale Schulregister mit automatischem Login und übersichtlichen Zusatzstatistiken.",
    image: "/register.jpg",
    link: "https://play.google.com/store/apps/details?id=com.zagga.registernative&utm_source=emea_Med",
    technologies: ["ReactJS", "JavaScript"],
  },
  {
    name: "CV Generator",
    description:
      "Einfacher Lebenslauf-Editor für die unkomplizierte Erstellung und Bearbeitung professioneller CVs.",
    image: "/cv-generator.png",
    link: "https://cv-project-rect-28f17kj8z-jakobs-projects-79a55897.vercel.app/",
    technologies: ["ReactJS", "TypeScript"],
  },
  {
    name: "Where Is Waldo",
    description:
      "Kleines interaktives Spiel, bei dem Benutzer Walter in einem detaillierten Bild finden müssen und dabei präzise Mauspositionierung nutzen.",
    image: "/whereiswaldo.png",
    link: "https://wheres-waldo-frontend-omega.vercel.app/",
    technologies: ["JavaScript", "ReactJS"],
  },
  {
    name: "Wetter App",
    description:
      "API-basierte Anwendung zum Abrufen von Wetterinformationen für verschiedene Orte auf der ganzen Welt.",
    image: "/wheather-app.png",
    link: "https://zagg83.github.io/weatherapp/",
    technologies: ["JavaScript", "API"],
  },
  {
    name: "EtchSketch",
    description:
      "Interaktives digitales Zeichenbrett, das von einem klassischen Etch A Sketch inspiriert ist und mit der Maus auf einem Raster zeichnet.",
    image: "/etchsketch.png",
    link: "https://zagg83.github.io/EtchSketch/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
] as const;

function ButtonLink({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={`button ${variant}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <article className="skill-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({
  name,
  description,
  image,
  link,
  technologies,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: readonly string[];
}) {
  return (
    <a className="project-card" href={link} target="_blank" rel="noreferrer">
      <div className="project-visual" aria-label={`${name} preview`}>
        <img src={image} alt={`${name} preview`} />
      </div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <span className="project-link">Projekt ansehen</span>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Jakob Ploner</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">Über mich</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projekte</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Junior Web Developer</p>
            <h1>Jakob Ploner</h1>
            <p className="lead">
              Ich entwickle digitale Lösungen mit Fokus auf saubere
              Frontend-Erlebnisse, praktische Projekte und kontinuierliches
              Lernen.
            </p>
            <div className="button-row">
              <ButtonLink href={GITHUB_URL_PLACEHOLDER} label="GitHub" />
              <ButtonLink
                href={LINKEDIN_URL_PLACEHOLDER}
                label="LinkedIn"
                variant="secondary"
              />
              <ButtonLink
                href="mailto:jakobpllo@gmail.com"
                label="Kontakt"
                variant="secondary"
              />
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-photo" aria-label="Profilfoto">
              <img src={PROFILE_IMAGE} alt="Jakob Ploner" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeader
            eyebrow="Über mich"
            title="Neugierig, motiviert und immer bereit, Neues zu lernen."
            text="Ich bin ein junger Webentwickler mit Interesse an der Gestaltung und Umsetzung digitaler Lösungen. Ich bin neugierig, motiviert und offen für neue Technologien, weil ich gern lerne und dabei praktische Projekte entwickle. Ich finde es spannend, Probleme mit Code zu lösen und dabei immer wieder neue Ansätze zu testen."
          />

          <div className="about-grid">
            <div className="about-card">
              <h3>Persönlich</h3>
              <p>
                Ich bin Jakob, 19 Jahre alt und aus Bruneck in Südtirol. Ich
                möchte meine Fähigkeiten im Bereich Webentwicklung weiter
                ausbauen und dabei an realen Projekten arbeiten, die sowohl
                technisch als auch inhaltlich fordern.
              </p>
            </div>

            <div className="about-card details">
              <ul>
                <li>
                  <span>Ausbildung</span>
                  <strong>
                    WFO Bruneck – Wirtschaftsinformatik, Matura 2026
                  </strong>
                </li>
                <li>
                  <span>Wohnort</span>
                  <strong>Pfalzen, Südtirol, Italien</strong>
                </li>
                <li>
                  <span>Interesse</span>
                  <strong>
                    Webentwicklung, neue Technologien, praktische Projekte
                  </strong>
                </li>
                <li>
                  <span>Grundhaltung</span>
                  <strong>Offen für Neues und bereit zu lernen</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeader
            eyebrow="Skills"
            title="Technische Kenntnisse und Fokusbereiche"
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillCard
                key={group.title}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeader
            eyebrow="Projekte"
            title="Praktische Arbeiten und kleine digitale Lösungen"
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionHeader
            eyebrow="Kontakt"
            title="Lass uns in Verbindung bleiben"
          />
          <div className="contact-grid">
            <a href="mailto:jakobpllo@gmail.com">jakobpllo@gmail.com</a>
            <a href={LINKEDIN_URL_PLACEHOLDER}>LinkedIn</a>
            <a href={GITHUB_URL_PLACEHOLDER}>GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Jakob Ploner</p>
        <p>© 2026 Jakob Ploner. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App;
