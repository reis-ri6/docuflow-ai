import { Status, STATUS_MAPPING, Spacing, SPACING } from '../styles/tokens';

/**
 * Utility function for composing className strings
 */
export function cx(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get styling object for a given status
 */
export function getStatusStyles(status: Status): {
  bg: string;
  border: string;
  text: string;
  icon: string;
  color: string;
} {
  return STATUS_MAPPING[status];
}

/**
 * Get primary color for a status
 */
export function getStatusColor(status: Status): string {
  return STATUS_MAPPING[status].color;
}

/**
 * Get Tailwind gap class for spacing key
 */
export function getSpacingClass(key: Spacing): string {
  const map: Record<Spacing, string> = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
    '3xl': 'gap-16',
  };
  return map[key];
}

/**
 * Get spacing value in pixels
 */
export function getSpacingValue(key: Spacing): number {
  return SPACING[key];
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
