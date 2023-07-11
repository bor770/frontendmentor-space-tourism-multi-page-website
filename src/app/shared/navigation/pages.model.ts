export const pages = [`home`, `destination`, `crew`, `technology`] as const;

export type Page = (typeof pages)[number];

export const translatePage = (page: Page): string =>
  page === `home` ? `` : `${page}/1`;
