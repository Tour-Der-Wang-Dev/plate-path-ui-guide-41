
/**
 * Design System Implementation for FoodDash
 * 
 * This file exports ready-to-use design system elements that are built on top of
 * the raw design tokens. It provides utilities and helpers for consistent styling.
 */

import { gradients, colors, typography, spacing, shadows, animations, borderRadius } from './design-tokens';

/**
 * Text variants for consistent typography
 */
export const textVariants = {
  h1: "font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight",
  h2: "font-heading font-bold text-3xl md:text-4xl leading-tight",
  h3: "font-heading font-semibold text-2xl md:text-3xl leading-snug",
  h4: "font-heading font-semibold text-xl md:text-2xl leading-snug",
  h5: "font-heading font-medium text-lg md:text-xl leading-snug",
  h6: "font-heading font-medium text-base md:text-lg leading-normal",
  body: "font-sans text-base leading-normal",
  bodyLarge: "font-sans text-lg leading-relaxed",
  bodySmall: "font-sans text-sm leading-normal",
  caption: "font-sans text-xs leading-normal",
  button: "font-sans font-medium text-sm md:text-base",
  overline: "font-sans text-xs uppercase tracking-wider font-medium"
};

/**
 * Card variants for consistent card styling
 */
export const cardVariants = {
  default: "bg-card border border-border rounded-lg p-6 shadow-sm",
  interactive: "bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
  elevated: "bg-card border border-border rounded-lg p-6 shadow-md",
  minimal: "bg-card rounded-lg p-6",
  neumorphic: "bg-card rounded-lg p-6 shadow-soft",
  glass: "bg-white/80 backdrop-blur-md border border-white/20 rounded-lg p-6",
};

/**
 * Container variants for layout containers
 */
export const containerVariants = {
  default: "container mx-auto px-4",
  narrow: "container mx-auto px-4 max-w-4xl",
  wide: "container mx-auto px-4 max-w-7xl",
  full: "w-full px-4",
};

/**
 * Grid layouts for common patterns
 */
export const gridLayouts = {
  // 2-column grid responsive
  cols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  
  // 3-column grid responsive
  cols3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  
  // 4-column grid responsive
  cols4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // Sidebar layout (fixed sidebar + main content)
  sidebar: "grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6",
  
  // Dashboard layout (sidebar + main with potential header areas)
  dashboard: "grid grid-cols-1 lg:grid-cols-[250px_1fr] min-h-screen",
};

/**
 * Badge variants for status indicators
 */
export const badgeVariants = {
  default: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  success: "bg-success-light text-success-main border-success-main/20",
  error: "bg-error-light text-error-main border-error-main/20",
  warning: "bg-warning-light text-warning-main border-warning-main/20",
  info: "bg-info-light text-info-main border-info-main/20",
  outline: "bg-transparent border-current",
};

/**
 * Animation presets using our animation tokens
 */
export const animationPresets = {
  fadeIn: "animate-fade-in",
  scaleIn: "animate-scale-in",
  slideIn: "animate-slide-in-right",
  fadeInUp: "animate-fade-in animate-slide-in-up",
  pulseOnce: "animate-pulse",
};

/**
 * Responsive spacing helpers
 */
export const responsiveSpacing = {
  section: "py-10 md:py-16 lg:py-20",
  sectionSmall: "py-8 md:py-12",
  sectionLarge: "py-16 md:py-24 lg:py-32",
  pageTop: "pt-16 md:pt-24", 
  pageBottom: "pb-16 md:pb-24",
};

/**
 * Pattern generators for common UI patterns
 */
export const patterns = {
  /**
   * Creates a gradient text style
   * @param from - Starting color of gradient
   * @param to - Ending color of gradient
   * @returns Tailwind classes for gradient text
   */
  gradientText: (from = "primary", to = "secondary") => 
    `bg-gradient-to-r from-${from} to-${to} bg-clip-text text-transparent`,
  
  /**
   * Creates a gradient background style
   * @param from - Starting color of gradient
   * @param to - Ending color of gradient
   * @returns Tailwind classes for gradient background
   */
  gradientBg: (from = "primary", to = "secondary") => 
    `bg-gradient-to-r from-${from} to-${to}`,
    
  /**
   * Creates overlay for image backgrounds with text
   * @param color - Base color for the overlay
   * @param opacity - Opacity level (0-100)
   * @returns Tailwind classes for overlay
   */
  imageOverlay: (color = "black", opacity = 60) => 
    `bg-${color}/${opacity}`,
};

/**
 * Common focus styles for interactive elements
 */
export const focusStyles = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";
