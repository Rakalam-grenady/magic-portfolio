import { About, Blog, Contact, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mamy",
  lastName: "Patrick",
  name: "Mamy Patrick",
  role: "Développeur Full‑Stack",
  avatar: "/images/avatar.jpeg",
  email: "mamyrakalam@gmail.com",
  location: "Indian/Antananarivo",
  languages: ["Français", "Anglais"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Rakalam-grenady",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/patrick-mamy-35079734a",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/261340890462",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

/** Liens affichés sur la page contact */
const footerContact = {
  whatsapp: "https://wa.me/261340890462",
  linkedin: "https://www.linkedin.com/in/patrick-mamy-35079734a",
  github: "https://github.com/Rakalam-grenady",
  email: person.email,
} as const;

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio – ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role} à Madagascar`,
  headline: <>Concevoir des solutions modernes, rapides et utiles</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projet phare</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Next.js, TypeScript & KYC
        </Text>
      </Row>
    ),
    href: "/work/ilofund-crowdfunding",
  },
  subline: (
    <Text>
      Je suis
      Patrick
      , développeur web
      proactif, créatif et passionné, j&apos;aime construire des produits de bout en bout :
      UI/UX, front-end, API et bases de données, automatisation.
    </Text>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `${person.name}, ${person.role} à Fianarantsoa, Madagascar`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profil",
    description: (
      <>
        Je suis Patrick, développeur Full Stack passionné, je conçois et
        développe des applications modernes du front-end au back-end, tout
        en intégrant l’automatisation et l’intelligence artificielle.
        <br />
        <br />
        <Text as="span" onBackground="neutral-weak" variant="body-default-s">
          Mamy Patrick • Proactif • Créatif • Passionné
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "ILOMAD (IT-Solution)",
        timeframe: "Janvier - Mars 2026",
        role: "Contribution au développement front-end",
        achievements: [
          <>Optimisation des bonnes pratiques pour renforcer la stabilité et la maintenabilité du projet.</>,
          <>Support technique transversal en apportant des suggestions et corrections sur l’architecture existante.</>,
        ],
        stack: [
          { icon: "sonarQube", label: "OnarQube", color: "#FA0C00" },
          { icon: "eslint", label: "ESLint", color: "#3A33D1" },
          { icon: "prettier", label: "Prettier", color: "#9ECE6A" },
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "vite", label: "Vite", color: "white" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
        ],
        images: [],
      },

      {
        company: "ILOMAD (IT-Solution)",
        timeframe: "Janvier - Mars 2026",
        role: "Responsable Développement(CDI)",
        achievements: [
          <>Mise en place d’une application de crowdfunding (Ilofund).</>,
          <>Conception des maquettes et développement du front-end</>,
          <>Automatisation d’un agent KYC (Know Your Customer) pour la vérification d’identité et la conformité réglementaire</>,
        ],
        stack: [
          { icon: "nextjs", label: "Next.js", color: "#FFFFFF" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
          { icon: "googleFont", label: "Google Font", color: "white" },
          { icon: "n8n", label: "n8n", color: "#EA4B71" },
          { icon: "ollama", label: "ollama", color: "white" },
          { icon: "fastapi", label: "FastAPI", color: "#009688" },
        ],
        images: [
        ],
      },

      {
        company: "ILOMAD (IT-Solution)",
        timeframe: "Décembre 2025",
        role: "Développeur FRONT-END (CDI)",
        achievements: [
          <>Refonte d’une plateforme de ticketing type Jira, avec modernisation des interfaces pour un rendu UX/UI plus professionnel.</>,
        ],
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "vite", label: "Vite", color: "white" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
          { icon: "googleFont", label: "Google Font", color: "white" },
          { icon: "n8n", label: "n8n", color: "#EA4B71" },
        ],
        images: [],
      },
      {
        company: "ADRAHO Company",
        timeframe: "Août 2025",
        role: "Développeur FULL-STACK (CDD)",
        achievements: [
          <>Création d&apos;une plateforme de publication des produits de la mer.</>,
          <>Mise en place d&apos;une interface moderne et d&apos;une API sécurisée.</>,
        ],
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "laravel", label: "Laravel", color: "#FF2D20" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
          { icon: "mysql", label: "MySQL", color: "#00758F" },
        ],
        images: [],
      },
      {
        company: "PNUD",
        timeframe: "Janvier – Mars 2025",
        role: "Développeur FRONT-END (Freelance)",
        achievements: [
          <>
            Développement d&apos;une application de mobilité urbaine (web &amp; mobile) avec
            architecture micro‑services et intégration X‑Road / Gateway (i‑ZOTRA).
          </>,
          <>
            Gestion des coopératives, licences des véhicules, et cartographie des lignes de bus.
          </>,
        ],
        stack: [
          { icon: "nextjs", label: "Next.js", color: "#FFFFFF" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "adobexd", label: "Adobe XD", color: "#611c5d" },
        ],
        images: [],
      },
      {
        company: "DREN Mahamanina",
        timeframe: "Février 2025",
        role: "Développeur FULL-STACK",
        achievements: [
          <>Création d&apos;une plateforme de gestion des statistiques des élèves.</>,
          <>Mise en place d&apos;un dashboard et d&apos;un parcours utilisateur clair.</>,
        ],
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "fastapi", label: "FastAPI", color: "#009688" },
          { icon: "postgresql", label: "PostgreSQL", color: "#4169E1" },
        ],
        images: [],
      },
      {
        company: "PNUD & Université de Fianarantsoa",
        timeframe: "Décembre 2024",
        role: "Développeur FULL-STACK (Mission / CDD)",
        achievements: [
          <>Création d&apos;une plateforme MATAC pour la décentralisation territoriale.</>,
          <>Conception UI/UX et implémentation front + services selon besoins métier.</>,
        ],
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "nestjs", label: "Nest JS", color: "#db1425" },
          { icon: "postgresql", label: "PostgreSQL", color: "#4169E1" },
        ],
        images: [],
      },
      {
        company: "UNION Service",
        timeframe: "Septembre 2024",
        role: "Développeur FULL-STACK (Bénévolat)",
        achievements: [
          <>
            Développement d&apos;une application (web &amp; mobile) de suivi des pointages du
            personnel: pointage, chat, géolocalisation.
          </>,
        ],
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "nestjs", label: "Nest JS", color: "#db1425" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
          { icon: "mapbox", label: "MapBox", color: "white" },
          { icon: "postgresql", label: "PostgreSQL", color: "#4169E1" },
        ],
        images: [],
      },
      {
        company: "DRI Isaha",
        timeframe: "Octobre 2023",
        role: "Développeur FULL-STACK (Bénévolat)",
        achievements: [
          <>Développement d&apos;une application de télédéclaration d&apos;IRSA.</>,
          <>Conception IHM et intégration des parcours de déclaration.</>,
        ],
        stack: [
          { icon: "laravel", label: "Laravel", color: "#FF2D20" },
          { icon: "css3", label: "CSS 3", color: "#2965F1" },
          { icon: "html5", label: "HTML 5", color: "#F16529" },
          { icon: "javascript", label: "Vanilla JS", color: "#F0DB4F" },
          { icon: "bootstrap", label: "Bootstrap", color: "#7952B3" },
          { icon: "figma", label: "Figma / Design", color: "#FF61F6" },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formations",
    institutions: [
      {
        name: "— Master 2 en Informatique",
        description: <>Ecole Nationale d'Informatique (ENI) — Tanambao</>,
      },
      {
        name: "— Master 1 en Informatique",
        description: <> Ecole Nationale d'Informatique (ENI) — Tanambao</>,
      },
      {
        name: "— Licence en Informatique",
        description: <>Ecole Nationale d'Informatique (ENI) — Tanambao </>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Conception",
        description: (
          <>
            {/* Analyse et modélisation (<strong>UML</strong>), rédaction de spécifications et
            maquettes (<strong>Figma</strong>, <strong>Adobe XD</strong>). Méthodologie{" "}
            <strong>Agile Scrum</strong> (sprints, rétrospectives, suivi via Jira / Taiga) et
            réalisation de <strong>travaux pratiques (TP)</strong> structurés en équipe.
            Versionnement et collaboration avec <strong>Git</strong>, GitHub et GitLab. */}
          </>
        ),
        stack: [
          { icon: "uml", label: "UML", color: "#4B8BBE" },
          { icon: "figma", label: "Figma", color: "#F24E1E" },
          { icon: "adobexd", label: "Adobe XD", color: "#611c5d" },
          { icon: "jira", label: "Scrum / Jira", color: "#0052CC" },
          { icon: "taiga", label: "Taiga", color: "#9C264F" },
          { icon: "book", label: "Travaux pratiques (TP)", color: "#F59E0B" },
          { icon: "git", label: "Git", color: "#F05032" },
          { icon: "github", label: "GitHub", color: "#FFFFFF" },
          { icon: "gitlab", label: "GitLab", color: "#FC6D26" },
        ],
        images: [],
      },
      {
        title: "Front-end",
        description: (
          <>
            {/* Interfaces web et mobile avec <strong>React</strong> et <strong>Next.js</strong>,
            typage <strong>TypeScript</strong>, bundling <strong>Vite</strong> et styles{" "}
            <strong>Tailwind CSS</strong> / <strong>Bootstrap</strong>. Intégration HTML5/CSS3,
            cartographie (<strong>Mapbox</strong>) et respect des maquettes sur l’ensemble de mes
            projets (Ilofund, ticketing, i‑ZOTRA, plateformes institutionnelles, etc.). */}
          </>
        ),
        stack: [
          { icon: "react", label: "React", color: "#61DAFB" },
          { icon: "nextjs", label: "Next.js", color: "#FFFFFF" },
          { icon: "typescript", label: "TypeScript", color: "#3178C6" },
          { icon: "vite", label: "Vite", color: "#FFFFFF" },
          { icon: "tailwind", label: "Tailwind CSS", color: "#38BDF8" },
          { icon: "bootstrap", label: "Bootstrap", color: "#7952B3" },
          { icon: "html5", label: "HTML 5", color: "#F16529" },
          { icon: "css3", label: "CSS 3", color: "#2965F1" },
          { icon: "javascript", label: "JavaScript", color: "#F0DB4F" },
          { icon: "mapbox", label: "Mapbox", color: "#4264FB" },
          { icon: "googleFont", label: "Google Fonts", color: "#FFFFFF" },
        ],
        images: [],
      },
      {
        title: "Back-end",
        description: (
          <>
            {/* Conception et développement d’<strong>APIs REST</strong> selon les contextes :
            <strong> Laravel</strong> (ADRAHO, télédéclaration IRSA), <strong>NestJS</strong>{" "}
            (MATAC, pointages UNION Service) et <strong>FastAPI</strong> (statistiques DREN,
            services Ilofund / KYC). Architecture orientée services, micro-services (i‑ZOTRA) et
            bonnes pratiques de sécurisation des endpoints. */}
          </>
        ),
        stack: [
          { icon: "laravel", label: "Laravel", color: "#FF2D20" },
          { icon: "nestjs", label: "NestJS", color: "#E0234E" },
          { icon: "symfony", label: "Symfony", color: "white" },
          { icon: "fastapi", label: "FastAPI", color: "#009688" },
          { icon: "python", label: "Python", color: "#3776AB" },
        ],
        images: [],
      },
      {
        title: "Bases de données",
        description: (
          <>
            {/* Modélisation relationnelle, schémas et requêtes pour le reporting et les applications
            métier. Utilisation de <strong>PostgreSQL</strong> (MATAC, DREN, UNION Service) et{" "}
            <strong>MySQL</strong> (plateforme ADRAHO), avec alignement des modèles sur les besoins
            front-end et API. */}
          </>
        ),
        stack: [
          { icon: "postgresql", label: "PostgreSQL", color: "#4169E1" },
          { icon: "mysql", label: "MySQL", color: "#00758F" },
        ],
        images: [],
      },
      {
        title: "Automatisation & IA",
        description: (
          <>
            {/* Workflows <strong>n8n</strong>, modèles locaux via <strong>Ollama</strong> et chaînes
            métier (ex. <strong>agent KYC</strong> sur Ilofund). Qualité de code avec{" "}
            <strong>SonarQube</strong>, <strong>ESLint</strong> et <strong>Prettier</strong> chez
            ILOMAD. Automatisation des tâches récurrentes et intégration IA au service des produits
            web. */}
          </>
        ),
        stack: [
          { icon: "n8n", label: "n8n", color: "#EA4B71" },
          { icon: "ollama", label: "Ollama", color: "#FFFFFF" },
          { icon: "fastapi", label: "FastAPI (services IA)", color: "#009688" },
          { icon: "sonarQube", label: "SonarQube", color: "#FA0C00" },
          { icon: "eslint", label: "ESLint", color: "#3A33D1" },
          { icon: "prettier", label: "Prettier", color: "#9ECE6A" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Articles par ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Applications et projets développés par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Galerie photo`,
  images: [],
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Contactez ${person.name}, ${person.role}`,
};

export {
  person,
  social,
  footerContact,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
};
