# Project Migration Guide: React (Vite) to Next.js (TypeScript)

This document summarizes the migration of the RentMyCar client-side application from a Vite-based React project to a Next.js (App Router) project with TypeScript.

## 🚀 Key Changes

### 1. Framework & Routing
- **Old**: React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`).
- **New**: Next.js App Router.
  - Routing is now file-system based (located in `src/app/`).
  - `Link` from `next/link` replaces `react-router-dom`.
  - `useRouter` and `usePathname` from `next/navigation` replace `useNavigate` and `useLocation`.

### 2. Language
- **Old**: JavaScript (`.jsx`).
- **New**: TypeScript (`.tsx`).
  - Added interfaces for data structures (e.g., `CarAsset`, `BenefitItem`).
  - Type-safe props and state.

### 3. Styling & Theme
- **Tailwind CSS 4**: Preserved the Tailwind 4 setup.
- **Theme**: The theme configuration is now in `src/app/globals.css` using the `@theme` block.
- **Fonts**: Switched from a `<link>` tag in HTML to `next/font/google` (Poppins) for better performance and Zero Layout Shift (CLS).

### 4. Components & Layout
- **Root Layout**: `src/app/layout.tsx` now handles the global structure, including the `Navbar` and `BottomNavbar`.
- **Client Components**: Interactive components (like those using `useState` or `useRouter`) now use the `"use client"` directive.
- **Images**: Switched to the Next.js `Image` component for automatic optimization (lazy loading, resizing).

## 📁 Folder Structure Changes

| Feature | React (Vite) Location | Next.js Location |
| :--- | :--- | :--- |
| **Pages** | `src/Pages/*.jsx` | `src/app/*/page.tsx` |
| **Admin Pages** | `src/Pages/admin/*.jsx` | `src/app/admin/*/page.tsx` |
| **Components** | `src/Components/*.jsx` | `src/components/*.tsx` |
| **Global Styles** | `src/index.css` | `src/app/globals.css` |
| **Public Assets** | `public/` | `public/` |
| **Routing Entry** | `src/App.jsx` | Handled by `app` directory structure |

## 🛠️ How to run the new project

1. Go to the new client directory:
   ```bash
   cd client-new
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## ⚠️ Important Notes
- **API Integration**: Check `// TODO: Add your API call here` comments in `Login.tsx` and `Registration.tsx` to re-implement your fetch logic.
- **Placeholders**: The Car, Service, and Contact pages currently have placeholders. You can now build them out in `src/app/[page-name]/page.tsx`.
