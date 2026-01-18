// Design Tokens - Exported from YAML specification
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const COLORS = {
  canonical: {
    primary: '#2ECC71',
    light: '#A9DFBF',
    dark: '#1E8449',
    text: '#27AE60',
  },
  candidate: {
    primary: '#F1C40F',
    light: '#FCF3CF',
    dark: '#D68910',
    text: '#E67E22',
  },
  variant: {
    primary: '#3498DB',
    light: '#D6EAF8',
    dark: '#154360',
    text: '#2874A6',
  },
  archived: {
    primary: '#7F8C8D',
    light: '#ECF0F1',
    dark: '#34495E',
    text: '#566573',
  },
  alert: {
    primary: '#E74C3C',
    light: '#FADBD8',
    dark: '#922B21',
    text: '#C0392B',
  },
  system: {
    background: {
      primary: '#FFFFFF',
      secondary: '#F7F9FA',
      tertiary: '#F0F1F2',
    },
    surface: {
      primary: '#FFFFFF',
      elevated: '#FAFBFC',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#566573',
      tertiary: '#95A5A6',
      inverse: '#FFFFFF',
    },
    border: {
      light: '#ECF0F1',
      medium: '#BDC3C7',
      dark: '#7F8C8D',
    },
  },
} as const;

export const TYPOGRAPHY = {
  fontFamilies: {
    primary: 'Inter, system-ui, sans-serif',
    code: 'JetBrains Mono, Courier New, monospace',
  },
  fontSizes: {
    h1: 32,
    h2: 24,
    h3: 18,
    body: 14,
    caption: 12,
    code: 13,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    h1: 1.2,
    h2: 1.3,
    h3: 1.4,
    body: 1.5,
    caption: 1.4,
    code: 1.6,
  },
} as const;

export const SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
} as const;

export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const STATUS_MAPPING = {
  Canonical: {
    color: COLORS.canonical.primary,
    bg: COLORS.canonical.light,
    border: COLORS.canonical.dark,
    text: COLORS.canonical.text,
    icon: '✓',
  },
  Candidate: {
    color: COLORS.candidate.primary,
    bg: COLORS.candidate.light,
    border: COLORS.candidate.dark,
    text: COLORS.candidate.text,
    icon: '?',
  },
  Variant: {
    color: COLORS.variant.primary,
    bg: COLORS.variant.light,
    border: COLORS.variant.dark,
    text: COLORS.variant.text,
    icon: '≈',
  },
  Archived: {
    color: COLORS.archived.primary,
    bg: COLORS.archived.light,
    border: COLORS.archived.dark,
    text: COLORS.archived.text,
    icon: '⊘',
  },
} as const;

export type Status = keyof typeof STATUS_MAPPING;
export type Spacing = keyof typeof SPACING;