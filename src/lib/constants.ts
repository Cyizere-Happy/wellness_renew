/**
 * constants.ts
 * Application-wide constants. Import from here to avoid magic strings/numbers.
 */

// ---------------------------------------------------------------------------
// App metadata
// ---------------------------------------------------------------------------
export const APP_NAME = "Wellness Renew";
export const APP_DESCRIPTION =
  "Your journey to a healthier, renewed you starts here.";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const REVALIDATE_SECONDS = 60;

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------
export const DEFAULT_PAGE_SIZE = 10;
