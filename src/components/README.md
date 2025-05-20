
# Component Directory Structure

This directory contains all the React components used across our food delivery platform's four applications: Customer App, Vendor App, Driver App, and Admin Dashboard.

## Directory Structure Overview

```
components/
├── common/            # Shared components used across multiple apps
│   ├── layout/        # Layout components (headers, footers, sidebars)
│   ├── forms/         # Form components and elements
│   ├── feedback/      # Loading states, error messages, toasts, etc.
│   └── ui/            # Base UI components from shadcn/ui
│
├── customer/          # Components specific to the Customer app
│   ├── cart/          # Cart-related components
│   ├── checkout/      # Checkout flow components
│   ├── restaurants/   # Restaurant listing and details
│   └── orders/        # Order tracking and history
│
├── vendor/            # Components specific to the Restaurant Vendor app
│   ├── menu/          # Menu management components
│   ├── orders/        # Order management components
│   ├── analytics/     # Analytics and reporting components
│   └── settings/      # Restaurant profile and settings
│
├── driver/            # Components specific to the Driver app
│   ├── delivery/      # Active delivery components
│   ├── earnings/      # Earnings and payment history
│   ├── schedule/      # Scheduling components
│   └── map/           # Map and navigation components
│
├── admin/             # Components specific to the Admin dashboard
│   ├── users/         # User management components
│   ├── restaurants/   # Restaurant management components
│   ├── analytics/     # System-wide analytics
│   └── settings/      # Platform configuration
│
└── landing/           # Components for the marketing/landing pages
```

## Component Design Guidelines

1. **Component Size**: Keep components focused and small (under 150 lines of code when possible)
2. **Naming Convention**: Use PascalCase for component names (e.g., `OrderCard.tsx`)
3. **Component Structure**: Follow this structure within component files:
   - Import statements
   - Type definitions / interfaces
   - Helper functions / hooks
   - Component definition
   - Export statement
4. **Props**: Define prop interfaces with descriptive names
5. **Styling**: Use Tailwind CSS classes for styling

## Reusable Component Patterns

1. **Card Components**: Consistent card designs for items, restaurants, orders
2. **List Components**: Standard list views with consistent spacing
3. **Form Components**: Consistent form layouts and validation styles
4. **Button Variants**: Use the shadcn/ui button component with appropriate variants
5. **Modal Patterns**: Consistent modal/dialog implementations

## Performance Considerations

1. **Memoization**: Use React.memo() for components that render frequently but with the same props
2. **List Virtualization**: For long lists, consider virtualization to improve performance
3. **Lazy Loading**: Use React.lazy() for code splitting larger components
4. **Image Optimization**: Use optimized images with proper sizing and loading attributes

## Accessibility Guidelines

1. Use semantic HTML elements
2. Ensure proper contrast ratios for text
3. Add appropriate aria attributes
4. Ensure keyboard navigation works
5. Test with screen readers

## Documentation

All components should have:
1. A brief comment describing their purpose
2. PropTypes or TypeScript interfaces defining their props
3. Examples of usage in comments for complex components
