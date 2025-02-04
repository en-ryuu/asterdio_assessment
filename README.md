# Assessment Asterdio

This is a **Next.js 15** project configured with Chakra UI, React Query, and other essential dependencies.

## Getting Started

### Install Dependencies

Run the following command to install all required dependencies:

```bash
yarn install
```

Start the Next.js development server:

```bash
yarn run dev
```

Open <http://localhost:3000> in your browser.

### Project Directory Structure for Asterdio

```sh
📦 src
┣ 📂 components         # Reusable UI components (Buttons, Modals, etc.)
┣ 📂 features           # Feature-based modules (User, Dashboard, etc.)
┣ 📂 pages              # Next.js Pages (Pages Router for individual routes)
┣ 📂 app                # App Router (Next.js 15 App Router for layout, routing, etc.)
┣ 📂 themes             # Chakra UI theme setup and customizations
┣ 📂 utils              # Helper functions (API calls, Utility functions, etc.)
┗ 📜 app/page.tsx       # Main entry point for Next.js App Router (root page)
```

### Chakra UI Type Generation

Generate types for custom chakra UI tokens (based on theme in src/themes/theme.ts)
:

```bash
yarn chakraTypegen
```

### Technologies Used

- **Next.js 15**: App Router setup for efficient routing and layouts.
- **React 19**: Latest version of React for UI rendering.
- **Chakra UI 3.6**: UI component library for fast, accessible design.
- **React Query 5**: Data fetching and caching.
- **Axios**: Used for API requests.
- **Next Themes**: Enables dark mode support.
- **ESLint**: Maintains code quality.

### Deployment

To deploy the application, refer to Next.js deployment documentation:
https://nextjs.org/docs/deployment
