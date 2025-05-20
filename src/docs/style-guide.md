
# FoodDash UI Style Guide

This document outlines the design principles, components, and visual elements that make up the FoodDash design system. It ensures consistency across all our applications and helps maintainers and contributors understand our design decisions.

## Brand Values

Our design language reflects our brand values:
- **Reliable**: Solid, trustworthy, consistent
- **Fast**: Efficient, responsive, streamlined
- **Friendly**: Approachable, simple, human
- **Fresh**: Modern, clean, appetizing

## Design Tokens

### Color Palette

#### Primary Colors
- Primary Orange: `#FF7A00` (hsl(30, 100%, 50%))
  - Used for main CTAs, important UI elements, and branding

#### Secondary Colors
- Secondary Yellow: `#FFB800` (hsl(39, 100%, 50%))
  - Used for supporting elements, highlights, and secondary actions

#### UI Status Colors
- Success: `#4CAF50`
- Warning: `#FF9800`
- Error: `#F44336`
- Info: `#2196F3`

#### Neutrals
- White: `#FFFFFF`
- Grey 50: `#F9FAFB`
- Grey 100: `#F3F4F6`
- Grey 200: `#E5E7EB`
- Grey 300: `#D1D5DB`
- Grey 400: `#9CA3AF`
- Grey 500: `#6B7280`
- Grey 600: `#4B5563`
- Grey 700: `#374151`
- Grey 800: `#1F2937`
- Grey 900: `#111827`
- Black: `#000000`

### Typography

#### Font Families
- Headings: Poppins, sans-serif
- Body: Inter, sans-serif

#### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

#### Font Sizes
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)
- 6xl: 3.75rem (60px)

#### Line Heights
- tight: 1.25
- snug: 1.375
- normal: 1.5
- relaxed: 1.625
- loose: 2

### Spacing

Our spacing scale is based on multiples of 4px:
- 0: 0px
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 2: 0.5rem (8px)
- 3: 0.75rem (12px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)
- 32: 8rem (128px)
- 40: 10rem (160px)
- 64: 16rem (256px)
- 80: 20rem (320px)

### Border Radius
- none: 0px
- sm: 0.125rem (2px)
- DEFAULT: 0.25rem (4px)
- md: 0.375rem (6px)
- lg: 0.5rem (8px)
- xl: 0.75rem (12px)
- 2xl: 1rem (16px)
- 3xl: 1.5rem (24px)
- full: 9999px (fully rounded)

### Shadows
- sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- DEFAULT: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
- 2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
- inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)
- soft: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff (neumorphic style)

## Component Patterns

### Buttons

#### Primary Button
- Background: Primary orange
- Text: White
- Hover: Slightly darker orange
- Usage: Main calls to action

#### Secondary Button
- Background: Secondary yellow
- Text: Dark gray/black
- Hover: Slightly darker yellow
- Usage: Supporting actions

#### Outlined Button
- Background: Transparent
- Border: Current color or gray
- Text: Current color or gray
- Hover: Light background
- Usage: Less prominent actions

#### Ghost Button
- Background: Transparent
- Text: Current color
- Hover: Very light background
- Usage: Subtle actions, menu items

### Cards

#### Standard Card
- Background: White
- Border: Light gray or none
- Shadow: sm or none
- Padding: 16-24px
- Border Radius: lg (8px)
- Usage: Content containers

#### Interactive Card
- Extends Standard Card
- Hover: Slight shadow increase or scale
- Cursor: pointer
- Usage: Clickable content like restaurant items

#### Elevated Card
- Extends Standard Card
- Shadow: md or lg
- Usage: Prominent content, modals

### Forms

#### Form Layout
- Label Position: Above input
- Label Size: sm (14px)
- Label Weight: medium
- Spacing Between Fields: 24px

#### Inputs
- Height: 40-44px
- Padding: 8-12px horizontal
- Border: 1px solid light gray
- Border Radius: md (6px)
- Focus: Outline ring in primary color

#### Validation States
- Error: Red border and text
- Success: Green border (optional)
- Disabled: Reduced opacity, no interaction

### Navigation

#### Tabs
- Alignment: Top or left
- Active: Primary color underline or background
- Inactive: Gray
- Hover: Lighter primary color

#### Breadcrumbs
- Separator: / or >
- Current Page: Bold or primary color
- Previous Pages: Gray, hover primary

#### Pagination
- Current Page: Primary background
- Other Pages: Ghost button style
- Hover: Light primary background

## App-Specific Patterns

### Customer App
- Focus on food imagery
- Prominent search and filters
- Easy-to-scan restaurant and menu lists
- Clear call-to-actions for adding to cart

### Vendor App
- Dashboard-focused with key metrics
- Efficient order management views
- Space-efficient menu management
- Analytical charts and reports

### Driver App
- Map-centric UI
- Large tap targets for use while on the move
- High contrast for outdoor visibility
- Minimal interaction required for essential tasks

### Admin Dashboard
- Data-dense tables and lists
- Comprehensive filtering and search
- Detailed user and restaurant information
- System configuration panels

## Accessibility Guidelines

- Color contrast: Minimum 4.5:1 for normal text, 3:1 for large text
- Focus states: Visible focus indicators on all interactive elements
- Text sizing: Minimum 16px for body text
- Touch targets: Minimum 44x44px for mobile touch targets
- Screen reader support: Proper ARIA labels and semantic HTML

## Animation & Transitions

- Duration: 200-300ms for most UI transitions
- Easing: ease-out for most transitions
- Usage: Use animation purposefully for feedback and direction

## Dark Mode

- Background: Very dark gray (#111827) instead of pure black
- Text: Light gray (#F9FAFB) instead of pure white
- Primary Color: Same as light mode (maintain brand recognition)
- Contrast: Ensure sufficient contrast in dark mode
