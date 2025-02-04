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
📦 src                  # Main source directory
 ┣ 📂 app               # Next.js 15 App Router
 ┃ ┣ 📂 api             # Server-side API routes (Next.js Route Handlers)
 ┣ 📂 components        # Reusable UI components (Buttons, Modals, Inputs, etc.)
 ┣ 📂 features          # Feature-based modules (e.g., events)
 ┣ 📂 config            # Configuration files (constants)
 ┣ 📂 hooks             # shared hooks used across the entire application
 ┣ 📂 services          # API calls, data fetching, and service logic
 ┣ 📂 themes            # Chakra UI theme customization and styling
 ┣ 📂 types             # shared types
 ┗ 📂 utils             # shared utility functions
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
<https://nextjs.org/docs/deployment>
