
/**
 * Design Tokens for Food Delivery Platform
 * These tokens establish the foundation for consistent visual design across all applications
 */

// Color Palette
export const colors = {
  // Primary brand colors
  primary: {
    50: 'hsl(30, 100%, 97%)',
    100: 'hsl(30, 100%, 95%)',
    200: 'hsl(30, 100%, 90%)',
    300: 'hsl(30, 100%, 80%)',
    400: 'hsl(30, 100%, 70%)',
    500: 'hsl(30, 100%, 50%)', // Primary brand color
    600: 'hsl(30, 100%, 45%)',
    700: 'hsl(30, 100%, 35%)',
    800: 'hsl(30, 100%, 25%)',
    900: 'hsl(30, 100%, 15%)',
  },
  
  // Secondary brand colors
  secondary: {
    50: 'hsl(39, 100%, 97%)',
    100: 'hsl(39, 100%, 95%)',
    200: 'hsl(39, 100%, 90%)',
    300: 'hsl(39, 100%, 80%)',
    400: 'hsl(39, 100%, 70%)',
    500: 'hsl(39, 100%, 50%)', // Secondary brand color
    600: 'hsl(39, 100%, 45%)',
    700: 'hsl(39, 100%, 35%)',
    800: 'hsl(39, 100%, 25%)',
    900: 'hsl(39, 100%, 15%)',
  },
  
  // UI colors for status indicators
  success: {
    light: '#E6F4EA',
    main: '#4CAF50',
    dark: '#2E7D32',
  },
  warning: {
    light: '#FFF8E1',
    main: '#FF9800',
    dark: '#F57C00',
  },
  error: {
    light: '#FDEDED',
    main: '#F44336',
    dark: '#D32F2F',
  },
  info: {
    light: '#E8F4FD',
    main: '#2196F3',
    dark: '#0D47A1',
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    black: '#000000',
  }
};

// Typography
export const typography = {
  fontFamily: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Spacing system
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
};

// Shadows for soft UI / neumorphism
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  // Soft UI / Neumorphism specific shadows
  soft: '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
  'soft-inner': 'inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff',
  'soft-pressed': 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
  // For dark mode
  'soft-dark': '5px 5px 10px #151515, -5px -5px 10px #333333',
  'soft-inner-dark': 'inset 2px 2px 5px #151515, inset -2px -2px 5px #333333',
  'soft-pressed-dark': 'inset 5px 5px 10px #151515, inset -5px -5px 10px #333333',
  none: 'none',
};

// Transition presets
export const transitions = {
  default: 'all 0.3s ease',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
};

// Z-index scale
export const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50, // Default
  modal: 100,
  tooltip: 500,
  toast: 1000,
  max: 9999,
};

// Animation presets
export const animations = {
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s infinite',
  fadeIn: 'fadeIn 0.5s ease-out forwards',
  slideIn: 'slideIn 0.3s ease-out forwards',
  scaleIn: 'scaleIn 0.3s ease-out forwards',
};

// Gradient presets
export const gradients = {
  primaryToSecondary: 'linear-gradient(90deg, hsl(30, 100%, 50%) 0%, hsl(39, 100%, 50%) 100%)',
  lightToSecondary: 'linear-gradient(90deg, hsl(39, 100%, 95%) 0%, hsl(39, 100%, 80%) 100%)',
  darkPrimary: 'linear-gradient(90deg, hsl(30, 100%, 35%) 0%, hsl(30, 100%, 45%) 100%)',
  food: 'linear-gradient(to right, #ff9966, #ff5e62)',
  loyalty: 'linear-gradient(to right, #c471f5, #fa71cd)',
  eco: 'linear-gradient(to right, #43e97b, #38f9d7)',
};

// Media breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Grid system
export const grid = {
  columns: 12,
  gutter: spacing[6], // 24px
  margin: spacing[4],  // 16px
};
