/**
 * Everything the site renders comes from this file.
 * Edit here, nowhere else — the pages read it and lay it out.
 *
 * Content below was reconstructed from verifiable evidence: your GitHub
 * profile (github.com/lokeshpahal, last updated 2026-08-23) and the commit
 * history of your 27 public repositories.
 *
 * Anything still marked CONFIRM is a fact that is not public anywhere and
 * was deliberately left blank rather than guessed.
 */

export const profile = {
  name: 'Lokesh Pahal',
  role: 'Full-Stack & Mobile Engineer',
  tagline: 'Python and Django on the back end, Flutter in your hand, and fourteen years of shipping behind both.',
  // Your GitHub profile says "Delhi". The old site said Gurgaon — update if wrong.
  location: 'Delhi, India',
  email: 'contact@lokeshpahal.com',
  // Point at a PDF in public/ to show a résumé button, e.g. '/lokesh-pahal-cv.pdf'.
  resumeUrl: null as string | null,
  avatar: '/me.jpg',
  metaDescription:
    'Lokesh Pahal — full-stack and mobile engineer in Delhi, India. Django and Python services, Flutter apps, and fourteen years of shipping across the whole stack.',
} as const;

export const socials = [
  { label: 'GitHub', handle: '@lokeshpahal', url: 'https://github.com/lokeshpahal', icon: 'github' },
  { label: 'LinkedIn', handle: 'in/lokesh-kumar', url: 'https://linkedin.com/in/lokesh-kumar-75223036', icon: 'linkedin' },
  { label: 'X', handle: '@lokeshpahal', url: 'https://x.com/lokeshpahal', icon: 'x' },
  { label: 'Email', handle: 'contact@lokeshpahal.com', url: 'mailto:contact@lokeshpahal.com', icon: 'mail' },
] as const;

/** All three are checkable facts, not marketing numbers. */
export const stats = [
  { value: '14+', label: 'Years shipping' },
  { value: '27', label: 'Public projects' },
  { value: '6', label: 'Languages in production' },
] as const;

export const about = [
  `I am a full-stack engineer. Most of my work now sits in two places: Python and
   Django services on the server, and Flutter applications on the phone in front of
   the person using them. I like owning the whole path between those two ends —
   the data model, the API, the state management, and the screen.`,
  `On the back end that means Django and Django REST Framework, with Celery for the
   work that should not happen inside a request, Postgres underneath, and Docker
   around it. On mobile it means Flutter and Dart — Riverpod or Provider depending on
   what the project needs, and a strong preference for widgets that behave properly
   on both platforms rather than looking impressive in a demo.`,
  `I got here the long way. I started in 2012 on PHP and MySQL, moved into front-end
   engineering as single-page applications took over, and kept widening from there.
   Fourteen years in, the thing I care most about has not changed: software that is
   fast on ordinary hardware, works for people who will not read instructions, and is
   still maintainable a year after I have moved on. I am based in Delhi and work with
   teams anywhere.`,
] as const;

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string; // 'Present' for current
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/**
 * ─── The Experience section is currently HIDDEN ──────────────────────────
 *
 * `experience` below is empty, so the section and its nav link do not render
 * and the remaining sections renumber themselves. Nothing else needs changing.
 *
 * TO BRING IT BACK: fill in the CONFIRM fields in `experienceDraft` below,
 * then change this line to:
 *
 *     export const experience: Experience[] = experienceDraft;
 *
 * The draft is kept verbatim so no work was lost. Its technology and
 * highlights are drawn from what you were actually pushing to GitHub in each
 * period; only the employer names, titles and dates are missing.
 */
export const experience: Experience[] = [];

export const experienceDraft: Experience[] = [
  {
    company: 'Code Genesys',
    role: 'CONFIRM — your title here',
    start: 'CONFIRM',
    end: 'Present',
    location: 'Delhi, IN',
    summary:
      'Full-stack and mobile engineering: Django and Python services on the server, Flutter applications on the client, and the containers both ship in.',
    highlights: [
      'CONFIRM — the thing you own there, ideally with a number attached.',
      'Build and ship cross-platform Flutter applications against Django REST Framework back ends.',
      'Authored and published a suite of four open-source Editor.js plugins extending a block editor with columns, timesheets, link buttons and inline alert styling.',
      'Built Python tooling for cloud storage sync between AWS and Google Drive.',
    ],
    stack: ['Python', 'Django', 'Flutter', 'Dart', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    company: 'CONFIRM — employer name',
    role: 'Full-Stack Developer',
    start: '2018',
    end: 'CONFIRM',
    location: 'Delhi NCR, IN',
    summary:
      'Moved from front-end delivery into full-stack work: Django services behind TypeScript front ends, packaged into containers.',
    highlights: [
      'Built Django applications and services, including conversational/chatbot interfaces.',
      'Standardised local and CI environments on a custom Python 3 Docker base image.',
      'Delivered TypeScript single-page applications against Django back ends.',
    ],
    stack: ['Python', 'Django', 'TypeScript', 'Docker', 'PostgreSQL'],
  },
  {
    company: 'CONFIRM — employer name',
    role: 'Web Developer → Front-End Developer',
    start: '2012',
    end: '2018',
    location: 'Delhi NCR, IN',
    summary:
      'Started in PHP/MySQL building client sites and web applications on WordPress and Joomla, then moved deliberately into front-end engineering as single-page applications took over.',
    highlights: [
      'Wrote and open-sourced a PHP wrapper for the SiteScout advertising API — still the most-forked thing I have published.',
      'Shipped an embedded touch-navigation product as a C firmware layer with a PHP API behind it.',
      'Moved from jQuery-driven pages to structured Angular 2 + TypeScript applications, with Protractor end-to-end coverage.',
    ],
    stack: ['PHP', 'MySQL', 'jQuery', 'Angular', 'WordPress', 'Joomla'],
  },
];

export type SkillGroup = { title: string; items: string[] };

/** Ordered so the two things you lead with are read first. */
export const skills: SkillGroup[] = [
  {
    title: 'Back end',
    items: ['Python', 'Django', 'Django REST Framework', 'Celery', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'Riverpod', 'Provider', 'Material & Cupertino', 'Play Store / App Store'],
  },
  {
    title: 'Front end',
    items: ['JavaScript', 'TypeScript', 'Angular', 'Astro', 'HTML', 'CSS', 'Editor.js', 'Accessibility'],
  },
  {
    title: 'Platform',
    items: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'GitHub Actions', 'Nginx'],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  url?: string;
  repo?: string;
  /** A page on this site about the project, e.g. '/apps/spruce/'. */
  page?: string;
  /** A screenshot; giving one makes the card a full-width featured card. */
  image?: string;
  year?: string;
};

/** All real, all public. Reorder freely — the first ones get read most. */
export const projects: Project[] = [
  {
    name: 'Spruce',
    blurb:
      'A native Ubuntu app that keeps the system clean, fast and safe: junk cleanup, a disk-space map, duplicate and similar-photo finding, a complete uninstaller, unified updates, performance and security checks. Built with GTK 4, careful by design — nothing is deleted without a yes — and free, with a $24 Pro add-on.',
    tags: ['Python', 'GTK 4', 'Linux', 'Desktop app'],
    page: '/apps/spruce/',
    repo: 'https://github.com/PahalSoft/spruce',
    image: '/apps/spruce/smart-scan.webp',
    year: '2026',
  },
  {
    name: 'Haryana Schools Map',
    blurb:
      'An interactive map of Haryana government schools — subjects taught, teacher counts, nearby search and routing. Deliberately built with no framework and no build step: a single HTML file against a one-megabyte JSON dataset, so it loads anywhere and outlives its dependencies.',
    tags: ['JavaScript', 'Mapping', 'Open data'],
    repo: 'https://github.com/lokeshpahal/haryana-schools-map',
    year: '2026',
  },
  {
    name: 'Editor.js plugin suite',
    blurb:
      'Four open-source plugins extending the Editor.js block editor: multi-column layouts, timesheets, link buttons, and an inline tune for alert-styled text. Written to behave correctly inside somebody else’s editor rather than to show off.',
    tags: ['JavaScript', 'Open source', 'Editor.js'],
    repo: 'https://github.com/lokeshpahal?tab=repositories&q=editorjs',
    year: '2022',
  },
  {
    name: 'SiteScout PHP API wrapper',
    blurb:
      'A PHP client for the SiteScout advertising platform API. The most-forked thing I have published — a reminder that the useful library usually beats the clever one.',
    tags: ['PHP', 'API', 'Open source'],
    repo: 'https://github.com/lokeshpahal/sitescout',
    year: '2014',
  },
  {
    name: 'aws-gdrive-sync',
    blurb: 'Python tooling to keep files in step between AWS storage and Google Drive.',
    tags: ['Python', 'AWS'],
    repo: 'https://github.com/lokeshpahal/aws-gdrive-sync',
    year: '2022',
  },
  {
    name: 'NaviTouch',
    blurb:
      'A touch-navigation product split across two repositories: the device layer in C, and the PHP API it reported to. My one sustained detour into hardware.',
    tags: ['C', 'PHP', 'Embedded'],
    repo: 'https://github.com/lokeshpahal/navitouch',
    year: '2016',
  },
  {
    name: 'lokeshpahal.com',
    blurb:
      'This site. A single static page built with Astro and hand-written CSS — no framework runtime, and the only client-side JavaScript is a theme toggle and two scroll observers. Ships in about 50 KB.',
    tags: ['Astro', 'CSS'],
    repo: 'https://github.com/lokeshpahal/lokeshpahal.github.io',
    year: '2026',
  },
];

/**
 * Hidden — nothing about your education is public, and I would rather show
 * nothing than invent a degree. Add an entry to make the panel appear:
 *   { school: '…', credential: 'B.Tech, Computer Science', years: '2008 – 2012' }
 */
export const education: { school: string; credential: string; years: string }[] = [];
