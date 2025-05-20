
# Project Files Structure

This document provides an overview of all files in the project, their purpose, and their complexity based on imports.

Legend:
- 🟢 (0-5 imports): Simple file with few dependencies
- 🟡 (6-10 imports): Moderate complexity
- 🔴 (11+ imports): Complex file with many dependencies

## Root Files

- `README.md` 🟢 - Project overview, setup instructions, and contribution guidelines
- `package.json` 🟢 - Project dependencies and scripts
- `tsconfig.json` 🟢 - TypeScript configuration
- `tailwind.config.ts` 🟢 - Tailwind CSS configuration
- `postcss.config.js` 🟢 - PostCSS configuration
- `vite.config.ts` 🟢 - Vite bundler configuration
- `eslint.config.js` 🟢 - ESLint configuration
- `index.html` 🟢 - HTML entry point for the application

## /src

### Core Files

- `main.tsx` 🟢 - Application entry point that renders the root component
- `App.tsx` 🔴 - Main application component with routing setup
- `index.css` 🟢 - Global CSS styles
- `vite-env.d.ts` 🟢 - Vite environment type definitions

### /components

#### /layout
- `AppHeader.tsx` 🟡 - Header component for the application
- `AppLayout.tsx` 🟡 - Main layout wrapper for application pages
- `AuthLayout.tsx` 🟡 - Layout for authentication pages

#### /ui
- `accordion.tsx` 🟢 - Accordion UI component
- `alert-dialog.tsx` 🟡 - Alert dialog UI component
- `alert.tsx` 🟢 - Alert UI component
- `aspect-ratio.tsx` 🟢 - Aspect ratio UI component
- `avatar.tsx` 🟢 - Avatar UI component
- `badge.tsx` 🟢 - Badge UI component
- `breadcrumb.tsx` 🟢 - Breadcrumb UI component
- `button.tsx` 🟢 - Button UI component
- `calendar.tsx` 🟡 - Calendar UI component
- `card.tsx` 🟢 - Card UI component
- `carousel.tsx` 🟡 - Carousel UI component
- `chart.tsx` 🟢 - Chart UI component
- `checkbox.tsx` 🟢 - Checkbox UI component
- `collapsible.tsx` 🟢 - Collapsible UI component
- `command.tsx` 🟡 - Command UI component
- `context-menu.tsx` 🟡 - Context menu UI component
- `dialog.tsx` 🟡 - Dialog UI component
- `drawer.tsx` 🟡 - Drawer UI component
- `dropdown-menu.tsx` 🟡 - Dropdown menu UI component
- `form.tsx` 🟡 - Form UI component
- `hover-card.tsx` 🟢 - Hover card UI component
- `input-otp.tsx` 🟢 - One-time password input UI component
- `input.tsx` 🟢 - Input UI component
- `label.tsx` 🟢 - Label UI component
- `menubar.tsx` 🟡 - Menubar UI component
- `navigation-menu.tsx` 🟡 - Navigation menu UI component
- `pagination.tsx` 🟢 - Pagination UI component
- `popover.tsx` 🟢 - Popover UI component
- `progress.tsx` 🟢 - Progress UI component
- `radio-group.tsx` 🟢 - Radio group UI component
- `resizable.tsx` 🟢 - Resizable UI component
- `scroll-area.tsx` 🟢 - Scroll area UI component
- `select.tsx` 🟡 - Select UI component
- `separator.tsx` 🟢 - Separator UI component
- `sheet.tsx` 🟡 - Sheet UI component
- `sidebar.tsx` 🟡 - Sidebar UI component
- `skeleton.tsx` 🟢 - Skeleton UI component
- `slider.tsx` 🟢 - Slider UI component
- `sonner.tsx` 🟡 - Sonner toast notification component
- `switch.tsx` 🟢 - Switch UI component
- `table.tsx` 🟢 - Table UI component
- `tabs.tsx` 🟢 - Tabs UI component
- `textarea.tsx` 🟢 - Textarea UI component
- `toast.tsx` 🟡 - Toast notification UI component
- `toaster.tsx` 🟢 - Toaster UI component that renders toast notifications
- `toggle-group.tsx` 🟢 - Toggle group UI component
- `toggle.tsx` 🟢 - Toggle UI component
- `tooltip.tsx` 🟢 - Tooltip UI component
- `use-toast.ts` 🟢 - Re-export of toast hook

### /context
- `CartContext.tsx` 🟡 - Context for managing shopping cart state

### /hooks
- `use-mobile.tsx` 🟢 - Hook for detecting mobile devices
- `use-toast.ts` 🟡 - Hook for managing toast notifications
- `useOrders.ts` 🔴 - Hook for order-related API operations
- `useRestaurants.ts` 🟡 - Hook for restaurant-related API operations
- `useReviews.ts` 🟡 - Hook for review-related API operations

### /lib
- `utils.ts` 🟢 - Utility functions used throughout the application

### /pages

#### Root Pages
- `Index.tsx` 🟢 - Index page component
- `LandingPage.tsx` 🟡 - Landing page component
- `NotFound.tsx` 🟢 - 404 Not Found page component

#### /admin
- `AdminDashboard.tsx` 🟡 - Admin dashboard page
- `AdminLogin.tsx` 🟡 - Admin login page

#### /customer
- `CustomerApp.tsx` 🟡 - Main customer application page
- `CustomerLogin.tsx` 🟡 - Customer login page
- `CustomerSignup.tsx` 🟡 - Customer signup page

#### /driver
- `DriverApp.tsx` 🟡 - Main driver application page
- `DriverLogin.tsx` 🟡 - Driver login page
- `DriverSignup.tsx` 🟡 - Driver signup page

#### /vendor
- `VendorApp.tsx` 🟡 - Main vendor application page
- `VendorLogin.tsx` 🟡 - Vendor login page
- `VendorSignup.tsx` 🟡 - Vendor signup page

### /services
- `api.ts` 🟢 - Axios instance and interceptors for API requests
- `mockApi.ts` 🟡 - Mock API implementations for development
- `orderService.ts` 🟡 - Service for order-related API operations
- `restaurantService.ts` 🟡 - Service for restaurant-related API operations
- `reviewService.ts` 🟡 - Service for review-related API operations

### /types
- `index.ts` 🟢 - Type definitions for the application
