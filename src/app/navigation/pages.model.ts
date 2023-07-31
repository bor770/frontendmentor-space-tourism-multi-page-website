export const pages = [`home`, `destination`, `crew`, `technology`] as const;

export type Page = (typeof pages)[number];
