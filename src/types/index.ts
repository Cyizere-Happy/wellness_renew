/**
 * index.ts — Global TypeScript types & interfaces.
 *
 * Keep shared, cross-feature types here. Feature-specific types live
 * inside their respective feature folder.
 */

// ---------------------------------------------------------------------------
// Generic helpers
// ---------------------------------------------------------------------------

/** Makes every property in T optional and nullable. */
export type Nullable<T> = { [K in keyof T]: T[K] | null };

/** Makes every property in T required and non-nullable. */
export type NonNullable<T> = { [K in keyof T]-?: NonNullable<T[K]> };

/** Extracts the resolved type from a Promise. */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

// ---------------------------------------------------------------------------
// API / data fetching
// ---------------------------------------------------------------------------
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------
export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}

export type PropsWithClassName<T = object> = T & WithClassName;
