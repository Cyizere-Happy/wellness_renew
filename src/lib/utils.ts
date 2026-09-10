/**
 * utils.ts
 * General-purpose utility functions used across the application.
 */

type ClassValue = string | number | boolean | null | undefined | ClassValue[];

/**
 * Merges class names conditionally — no external dependencies required.
 * Mirrors the clsx API; swap for `clsx` + `tailwind-merge` when needed.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 10)
    .filter((v): v is string | number => typeof v === "string" || typeof v === "number")
    .join(" ")
    .trim();
}

/**
 * Format a Date (or ISO string) to a human-readable string.
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

/**
 * Capitalise the first letter of a string.
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Sleep for a given number of milliseconds (useful in tests / demos).
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Type-safe object keys.
 */
export function typedKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}
