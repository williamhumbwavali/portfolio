export const personal = {
  name: "William Humbwavali",
  firstName: "William",
  lastName: "Humbwavali",
  role: "Desenvolvedor de Software",
  location: "Luanda, Angola · Remoto",

  description:
    "Desenvolvo software do zero até à produção — frameworks, CMSs e produtos web, mobile e backend.",

  about:
    "Desenvolvedor de software com foco em TypeScript, JavaScript e PHP. Criador do framework Lithe PHP e do Bando CMS. Tenho experiência a construir produtos do zero, desde a arquitetura e desenvolvimento até ao deploy e funcionamento em produção.",
  email: "williamhumbwavali@gmail.com",

  photo: "/william.jpeg",

  links: {
    github: "https://github.com/williamhumbwavali",
    linkedin: "https://www.linkedin.com/in/williamhumbwavali/",
    baza: "https://bazaja.vercel.app/",
    lithe: "https://pt-lithephp.vercel.app/",
  },
};

export const heroStats = [
  {
    value: "2",
    label: "Projetos open source criados",
  },
  {
    value: "10+",
    label: "Produtos construídos",
  },
  {
    value: "TS · PHP",
    label: "Principais linguagens",
  },
];

export const heroProjects = [
  "Lithe PHP",
  "Bando CMS",
  "Baza",
  "Rialse",
];

export const projects = [
  {
    number: "01",
    type: "Startup · Pré-lançamento · Co-founder",
    name: "Baza",
    description:
      "Plataforma de mobilidade por subscrição para estudantes e trabalhadores em Luanda. O produto permite reservar lugares antecipadamente em rotas definidas e inclui aplicações para passageiros e motoristas, painel administrativo e backend.",
    technologies: [
      "Next.js",
      "NestJS",
      "React Native",
      "TypeScript",
      "MySQL",
      "TypeORM",
      "Docker",
    ],
    links: [
      {
        label: "Site",
        href: "https://bazaja.vercel.app/",
      },
    ],
    artwork: "baza",
  },

  {
    number: "02",
    type: "CMS · Open source · Self-hosted",
    name: "Bando CMS",
    description:
      "Sistema de gestão de conteúdo criado para facilitar a construção de aplicações web. Permite criar e organizar conteúdos, gerir tudo através de um painel e disponibilizar esses dados para qualquer aplicação através de uma API.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React",
      "Next.js",
      "REST",
      "Docker",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Bando-CMS/bando-cms",
      },
      {
        label: "Website",
        href: "https://bando-cms.vercel.app/",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/bando-cms",
      },
    ],
    artwork: "bando",
  },

  {
    number: "03",
    type: "Framework PHP · Open source · MIT",
    name: "Lithe PHP",
    description:
      "Framework PHP criado do zero, inspirado na simplicidade do Express.js, para construir aplicações web de forma mais simples e direta. Inclui rotas, middleware, ORM e ferramentas de CLI, com distribuição através do Packagist.",
    stats: [
      {
        value: "25+",
        label: "estrelas no GitHub",
      },
      {
        value: "10+",
        label: "pacotes",
      },
    ],
    technologies: [
      "PHP 8.2+",
      "Composer",
      "PSR",
      "Symfony Console",
      "PHPUnit",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lithephp/framework",
      },
      {
        label: "Packagist",
        href: "https://packagist.org/packages/lithephp/framework",
      },
      {
        label: "Documentação",
        href: "https://pt-lithephp.vercel.app/",
      },
    ],
    artwork: "lithe",
  },

  {
    number: "04",
    type: "Plataforma musical · Full-stack · Concluído",
    name: "Bad Vibes Forever",
    description:
      "Plataforma de música focada em artistas independentes, criada para publicar, distribuir e ouvir músicas num só lugar. Inclui perfis de artistas, álbuns, playlists, reprodução, favoritos, histórico, downloads e upload.",
    technologies: [
      "Next.js",
      "React",
      "Zustand",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Cloudflare R2",
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/williamhumbwavali/bvf-frontend",
      },
      {
        label: "API",
        href: "https://github.com/williamhumbwavali/bvf-api",
      },
    ],
    artwork: "bvf",
  },

  {
    number: "05",
    type: "E-commerce · Fundador · Construído e operado",
    name: "Rialse",
    description:
      "E-commerce angolano criado, desenvolvido e operado por mim. Em produção de dezembro de 2024 ao final de 2025, a plataforma chegou a 1.400 utilizadores registados e 400 afiliados, com catálogo, carrinho, checkout, contas, pedidos e suporte.",
    technologies: [
      "PHP",
      "Lithe",
      "Eloquent",
      "Blade",
      "MySQL",
    ],
    artwork: "rialse",
  },

  {
    number: "06",
    type: "Tempo real",
    name: "LitheChat",
    description:
      "Sistema de mensagens privadas construído sobre o ecossistema Lithe, com frontend em Next.js, API HTTP em LithePHP, servidor WebSocket com Workerman e Redis Pub/Sub.",
    links: [
      {
        label: "Frontend",
        href: "https://github.com/williamhumbwavali/lithechat-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/williamhumbwavali/lithechat-backend",
      },
    ],
  },

  {
    number: "07",
    type: "Mobile · Local-first",
    name: "OPlayer",
    description:
      "Leitor de música offline para dispositivos móveis. Permite importar músicas do dispositivo e gerir uma biblioteca pessoal sem streaming, contas ou publicidade.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/williamhumbwavali/offline-player",
      },
    ],
  },
];

export const experience = [
  {
    period: "2025",
    title: "Development Lead / Full-Stack Developer",
    company: "Njila",
    location: "Avenida Ho Chi Minh, Luanda, Angola",
    description:
      "Liderou o desenvolvimento da Njila, uma startup de mobilidade urbana que operou em Luanda, com foco nas deslocações de estudantes, incluindo os do ISPTEC. Coordenou a equipa de desenvolvimento, geriu tarefas e prioridades, acompanhou o progresso técnico e participou na definição do roadmap e da arquitetura da plataforma. Desenvolveu funcionalidades centrais, como localização em tempo real e agendamento de viagens, com foco em segurança, desempenho e fiabilidade.",
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "Inertia.js",
      "NestJS",
      "React Native",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "WebSockets",
    ],
  },
  {
    period: "Freelance",
    title: "Front-End Developer",
    company: "Cubicou.ao",
    location: "Angola",
    description:
      "Desenvolveu o frontend de uma plataforma imobiliária angolana, incluindo interfaces, componentes reutilizáveis, integração com APIs e os fluxos de pesquisa e apresentação de imóveis.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    period: "2024–2025",
    title: "Formação Intensiva",
    company: "42 Luanda",
    location: "Talatona, Luanda, Angola",
    description:
      "Formação intensiva baseada em projetos, com foco em programação, algoritmos, estruturas de dados, sistemas Unix e resolução de problemas. Desenvolvimento através de aprendizagem prática, projetos individuais e avaliação entre pares.",
    technologies: [
      "C",
      "C++",
      "Unix",
      "Git",
      "Algorithms",
      "Data Structures",
    ],
  },
  {
    period: "Em curso",
    title: "Formação",
    company: "Universidade Gregório Semedo",
    location: "Morro Bento, Luanda, Angola",
    description:
      "Engenharia Informática, com formação em algoritmos, estruturas de dados, redes de computadores e engenharia de software. Experiência adicional de aprendizagem baseada em projetos.",
    technologies: [
      "C",
      "SQL",
      "Algorithms",
      "Data Structures",
      "Computer Networks",
      "Databases",
    ],
  },
];

export const stack = [
  {
    number: "01",
    name: "Linguagens",
    description: "TypeScript, JavaScript, PHP, Python, C",
  },
  {
    number: "02",
    name: "Frontend & Mobile",
    description:
      "React, Next.js, React Native, Vue.js, Tailwind CSS",
  },
  {
    number: "03",
    name: "Backend",
    description:
      "Node.js, NestJS, Express.js, Laravel, Django, REST APIs",
  },
  {
    number: "04",
    name: "Dados",
    description:
      "PostgreSQL, MySQL, MongoDB, Redis, TypeORM, Eloquent",
  },
  {
    number: "05",
    name: "Infraestrutura & Deploy",
    description:
      "Linux, VPS, Docker, Vercel, Nginx, Cloudflare, CI/CD, DNS, SSL",
  },
  {
    number: "06",
    name: "Ferramentas & Ecossistema",
    description:
      "Git, GitHub, Composer, npm, pnpm, Vite, VS Code",
  },
  {
    number: "07",
    name: "Engenharia",
    description:
      "Arquitetura de software, DDD, APIs, autenticação, middleware, testes",
  },
];

export const languages = [
  {
    number: "01",
    name: "Português",
    level: "Nativo",
  },
  {
    number: "02",
    name: "Inglês",
    level: "Avançado",
  },
];