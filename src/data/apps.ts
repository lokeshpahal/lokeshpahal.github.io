/**
 * Content for the app pages under /apps/. One object per app.
 * Like profile.ts: edit here, the page lays it out.
 */

export type Feature = { name: string; summary: string; points: string[] };
export type Shot = { src: string; alt: string; caption: string };
export type Milestone = { label: string; title: string; detail: string };

export const spruce = {
  slug: 'spruce',
  name: 'Spruce',
  icon: '/apps/spruce/icon.svg',
  tagline: 'Keep Ubuntu clean, fast and safe.',
  summary:
    'A native desktop app that finds and removes junk, shows exactly what fills your drive, uninstalls apps without leaving a trace, keeps every kind of software up to date, and checks your security settings — all from one window, and all without ever deleting something you did not confirm.',
  version: '0.6.4',
  download: 'https://github.com/PahalSoft/spruce/releases/latest/download/spruce_all.deb',
  repo: 'https://github.com/PahalSoft/spruce',
  year: '2026',
  license: 'GPL-3.0-or-later',
  platform: 'Ubuntu 24.04 or newer with GNOME',
  badges: ['Ubuntu 24.04+', 'GTK 4 · libadwaita', 'Python', 'Free & open source', '.deb package'],
  metaDescription:
    'Spruce — a native Ubuntu app by Lokesh Pahal that cleans junk, maps disk usage, finds duplicates and similar photos, uninstalls apps completely, unifies updates, checks security and scans for viruses. Free and open source.',

  /** Checkable numbers from the project itself. */
  stats: [
    { value: '10', label: 'Tools in one window' },
    { value: '107', label: 'Automated tests' },
    { value: '48 KB', label: 'The free app’s whole .deb' },
    { value: '0', label: 'Extra libraries — only what Ubuntu ships' },
  ],

  /** The main modules, in sidebar order. */
  features: [
    {
      name: 'Smart Scan',
      summary: 'One button measures everything and tells you what is worth doing.',
      points: [
        'Junk, available updates and security issues in a single pass',
        '“Clean recommended” only touches items that are always safe',
        'Drive usage at a glance before and after',
      ],
    },
    {
      name: 'Cleanup',
      summary: 'Every cleanable item, with its size and a plain-English explanation.',
      points: [
        'Caches, thumbnails, developer downloads (npm, pip, Gradle), logs, crash reports, old Snap versions, unused Docker images, leftover packages',
        'Browser and Android Studio caches stay locked until those apps are closed',
        '14 cleanup rules defined as data — adding one needs no code',
      ],
    },
    {
      name: 'Space Map',
      summary: 'A clickable treemap of any folder or the whole drive.',
      points: [
        'Big folders are big tiles; click a tile to look inside',
        'Home folder, whole drive, or any folder you choose',
        'Stays on one drive and groups small files, so even huge folders stay readable',
      ],
    },
    {
      name: 'My Files',
      summary: 'Large, forgotten, duplicate and look-alike files.',
      points: [
        'Large & Old: filter by size and by how long since a file was opened',
        'Duplicates: compared by content, never by name — one copy is always kept',
        'Similar Photos: finds resized and re-saved copies by how they look, and keeps the sharpest',
      ],
    },
    {
      name: 'Applications',
      summary: 'Uninstall apps completely — and clean up after ones already gone.',
      points: [
        'apt, Snap and Flatpak apps in one list, with sizes',
        'Shows exactly which packages go with an app before removing it',
        'Finds leftover settings folders; caches are ticked, profiles are not',
      ],
    },
    {
      name: 'Updates',
      summary: 'Ubuntu packages, Snaps, Flatpaks and device firmware in one place.',
      points: [
        'Update one source or everything at once',
        'Firmware hands off to Ubuntu’s Firmware Updater rather than flashing directly',
      ],
    },
    {
      name: 'Performance',
      summary: 'What is using your memory and processor, and why startup is slow.',
      points: [
        'Running apps grouped by program, with Quit and Force Quit',
        'Startup apps switched on or off per user',
        'Startup time broken down by stage, the slowest services, and SSD TRIM on demand',
      ],
    },
    {
      name: 'Protection',
      summary: 'Eleven security checks and a ClamAV virus scanner.',
      points: [
        'Firewall, automatic security updates, screen lock, SSH, Livepatch, encryption, Secure Boot and more',
        'One-click fixes only where a fix is safe — turning on the firewall keeps SSH allowed',
        'Quick or full virus scans, with a locked quarantine you can restore from',
      ],
    },
    {
      name: 'Cloud',
      summary: 'What fills your Google Drive or OneDrive.',
      points: [
        'Largest files in the cloud, read through GNOME Online Accounts or rclone',
        'Finds files you also keep on this computer',
        'Read-only: nothing in the cloud is ever changed',
      ],
    },
    {
      name: 'Weekly check & top-bar monitor',
      summary: 'Spruce keeps an eye on things when it is closed.',
      points: [
        'A weekly background check that only measures, and notifies you when something needs a look',
        'A GNOME Shell extension showing free space, memory and processor in the top bar',
        'Warns once when the drive passes 90% full',
      ],
    },
  ] satisfies Feature[],

  /** Promises the app keeps. Shown as their own section because they are the point. */
  safety: [
    { title: 'Nothing happens without a yes', detail: 'Every clean, uninstall and update shows what it will do and waits for confirmation.' },
    { title: 'Your files go to the Trash', detail: 'Large files, duplicates, similar photos and leftovers are moved to the Trash, never deleted outright.' },
    { title: 'Ubuntu’s own parts are protected', detail: 'Core packages can’t be uninstalled, and an uninstall that would drag one along is refused.' },
    { title: 'A root helper that can’t be talked into things', detail: 'System work runs in a small root-owned helper with a fixed list of actions. It never takes paths or commands from the app, and re-checks every request itself.' },
    { title: 'One copy always stays', detail: 'Duplicate and similar-photo groups can never be emptied completely.' },
    { title: 'Settings are not caches', detail: 'When cleaning up after an app, caches are pre-selected; profiles, logins and documents are not.' },
  ],

  shots: [
    { src: '/apps/spruce/smart-scan.webp', alt: 'Spruce Smart Scan showing 12.3 GB that can be freed, 89 updates and 3 security issues', caption: 'Smart Scan — one button, one summary' },
    { src: '/apps/spruce/cleanup.webp', alt: 'Spruce Cleanup list with sizes and explanations for each item', caption: 'Cleanup — every item explained' },
    { src: '/apps/spruce/space-map.webp', alt: 'Spruce Space Map treemap of an example home folder', caption: 'Space Map — click a tile to look inside' },
    { src: '/apps/spruce/duplicates.webp', alt: 'Spruce Duplicates: sets of identical files, with the copy to keep marked', caption: 'Duplicates — one copy of each is always kept' },
    { src: '/apps/spruce/applications.webp', alt: 'Spruce Applications list with app icons, sizes and Uninstall buttons', caption: 'Applications — apt, Snap and Flatpak together' },
    { src: '/apps/spruce/updates.webp', alt: 'Spruce Updates page listing Ubuntu package and Snap updates', caption: 'Updates — every source in one list' },
    { src: '/apps/spruce/boot.webp', alt: 'Spruce Boot and Maintenance view breaking down a 43.8 second startup', caption: 'Performance — where startup time goes' },
    { src: '/apps/spruce/preferences.webp', alt: 'Spruce Preferences with the weekly check and top-bar monitor switches', caption: 'Preferences — weekly check and top-bar monitor' },
  ] satisfies Shot[],

  /** How it is put together. */
  stack: [
    { title: 'Native, not a web view', detail: 'Python with GTK 4 and libadwaita, so it looks and behaves like the rest of GNOME — light and dark mode, keyboard navigation, the lot.' },
    { title: 'polkit, the proper way', detail: 'The admin helper ships root-owned in /usr/libexec with its own polkit action, so the password prompt says exactly what Spruce is asking for.' },
    { title: 'Rules, not code', detail: 'Cleanup targets live in a TOML file: path, explanation, whether it is recommended, which apps must be closed first.' },
    { title: 'Perceptual hashing', detail: 'Similar photos are matched with a 64-bit difference hash, grouped around the best copy so look-alikes never chain together, and cached so re-scans take a second.' },
    { title: 'A treemap from scratch', detail: 'Space Map uses a squarified treemap drawn with GTK 4 snapshots, with a scanner that stays on one filesystem and groups small files.' },
    { title: 'Desktop integration', detail: 'A systemd user timer for the weekly check, a GNOME Shell extension for the top bar, AppStream metadata for the App Center, and a single .deb for all of it.' },
  ],

  tech: ['Python 3', 'GTK 4', 'libadwaita', 'PyGObject', 'polkit', 'systemd', 'GNOME Shell (GJS)', 'ClamAV', 'apt · Snap · Flatpak · fwupd', 'Debian packaging'],

  /** Spruce is free; supporters can buy the developer a coffee. */
  support: {
    url: 'https://buymeacoffee.com/lokeshpahal',
    intro:
      'Every part of Spruce is free and open source — no ads, no tracking, no account and nothing locked. If it saved you some time or a few gigabytes, a coffee helps keep it going: new cleanup rules, fixes for new Ubuntu releases, and new tools.',
    note: 'Entirely optional. Spruce works the same either way.',
  },

  milestones: [
    { label: 'Phase 1', title: 'Clean', detail: 'Smart Scan, Cleanup, Space Map and the root helper.' },
    { label: 'Phase 2', title: 'Files & apps', detail: 'Large and duplicate files, the complete uninstaller, unified updates.' },
    { label: 'Phase 3', title: 'Health', detail: 'Running and startup apps, boot time, security checks, virus scanning.' },
    { label: 'Phase 4', title: 'Always on', detail: 'Similar photos, cloud storage, the weekly check and the top-bar monitor.' },
    { label: 'Release', title: 'Packaged', detail: 'A root-owned helper with its own polkit policy, an icon, and a single .deb.' },
    { label: '0.6', title: 'All free', detail: 'Every feature free and open source under the GPL, supported by people who buy a coffee.' },
  ] satisfies Milestone[],
};
