
# Package.json Scripts Documentation

This document explains the available npm scripts in the project and how to use them.

## Available Scripts

### `npm run dev`

**Purpose:** Starts the development server with hot reloading.

**Usage:**
```bash
npm run dev
```

This command launches the Vite development server, which provides fast refresh capabilities. The application will be available at http://localhost:5173 by default.

**Example scenario:** Use this during active development to see immediate changes as you edit code.

### `npm run build`

**Purpose:** Creates a production-ready build of the application.

**Usage:**
```bash
npm run build
```

This command compiles and optimizes the application for production deployment. The output is placed in the `dist` directory.

**Example scenario:** Run this script when preparing to deploy the application to a production environment.

### `npm run preview`

**Purpose:** Serves the production build locally for preview.

**Usage:**
```bash
npm run build
npm run preview
```

This command starts a local server to preview the production build. Use this to verify the production build works as expected before deployment.

**Example scenario:** After building the app, use this to test the production version locally.

### `npm run lint`

**Purpose:** Runs ESLint to check for code quality issues.

**Usage:**
```bash
npm run lint
```

This command analyzes your code for potential errors and style violations according to the rules defined in `eslint.config.js`.

**Example scenario:** Run before committing code to ensure it meets the project's coding standards.

### `npm run lint:fix`

**Purpose:** Automatically fixes ESLint issues where possible.

**Usage:**
```bash
npm run lint:fix
```

This command not only identifies code issues but also automatically fixes the ones that can be resolved programmatically.

**Example scenario:** Use when you want to quickly clean up formatting and minor code issues.

### `npm run type-check`

**Purpose:** Runs TypeScript compiler to check for type errors.

**Usage:**
```bash
npm run type-check
```

This command runs the TypeScript compiler to verify that all types in the codebase are correct without emitting any output files.

**Example scenario:** Use this before committing changes to ensure type safety across the application.

### `npm test`

**Purpose:** Runs the test suite.

**Usage:**
```bash
npm test
```

This command executes all tests in the project using the configured test runner.

**Example scenario:** Run after making changes to ensure you haven't broken existing functionality.

### `npm run coverage`

**Purpose:** Runs tests and generates a coverage report.

**Usage:**
```bash
npm run coverage
```

This command runs the test suite and generates a detailed report showing what percentage of the code is covered by tests.

**Example scenario:** Use periodically to identify areas of the codebase that need additional test coverage.

## CI/CD Scripts

### `npm run ci`

**Purpose:** Runs all checks needed for continuous integration.

**Usage:**
```bash
npm run ci
```

This is a combination script that typically runs linting, type checking, and tests to ensure code quality in CI environments.

**Example scenario:** This script is usually executed by CI/CD pipelines (like GitHub Actions) when code is pushed or a pull request is created.

## Additional Scripts

### `npm run format`

**Purpose:** Formats code according to project standards.

**Usage:**
```bash
npm run format
```

This command uses Prettier to automatically format all code files according to the project's style guidelines.

**Example scenario:** Run before committing code to ensure consistent formatting across the codebase.

### `npm run clean`

**Purpose:** Removes build artifacts and dependencies.

**Usage:**
```bash
npm run clean
```

This command deletes the `dist` directory, `node_modules`, and any other generated files to provide a clean slate.

**Example scenario:** Use when you want to completely reset your build environment or when switching between branches with different dependencies.

## Script Combinations

For a complete pre-deployment check, you might run:

```bash
npm run lint && npm run type-check && npm test && npm run build && npm run preview
```

This sequence will:
1. Check for code quality issues
2. Verify type safety
3. Run all tests
4. Create a production build
5. Start a local server to preview the production build
