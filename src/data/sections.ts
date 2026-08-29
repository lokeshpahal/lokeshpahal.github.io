/**
 * Which sections the page shows, in order.
 *
 * A section drops out automatically when it has no content — the nav link
 * goes with it, and the `01 //` markers renumber so they never skip. Nothing
 * needs editing here to hide or restore a section; fill its data in
 * profile.ts and it comes back.
 */
import { experience, projects, skills, about } from './profile';

export type Section = { id: string; label: string; title: string };

const candidates: (Section & { show: boolean })[] = [
  { id: 'about', label: 'about', title: 'About', show: about.length > 0 },
  { id: 'experience', label: 'experience', title: 'Experience', show: experience.length > 0 },
  { id: 'skills', label: 'skills', title: 'Toolkit', show: skills.length > 0 },
  { id: 'work', label: 'work', title: 'Selected work', show: projects.length > 0 },
  { id: 'contact', label: 'contact', title: 'Get in touch', show: true },
];

export const sections: Section[] = candidates.filter((s) => s.show).map(({ show, ...s }) => s);

export const isVisible = (id: string): boolean => sections.some((s) => s.id === id);

/** `02 //` for the second visible section, and so on. */
export const marker = (id: string): string => {
  const i = sections.findIndex((s) => s.id === id);
  return i < 0 ? '' : `${String(i + 1).padStart(2, '0')} //`;
};
