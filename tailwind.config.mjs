import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // As defined in the "The Current - Westgate" design system
        primary: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#6EE7B7',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        accent: {
          light: '#FBBF24',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Semantic colors for consistent UI feedback
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        // Using `sans` to override the default Tailwind font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // Explicitly defining heading and body for clarity, though they are the same
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Adding the custom 'display' size from the design system for large stats/counters
        display: ['4.5rem', { lineHeight: '1' }], // 72px
      },
    },
  },
  plugins: [
    // The @tailwindcss/forms plugin provides a basic reset for form styles,
    // which is a good practice for cross-browser consistency.
    require('@tailwindcss/forms'),
  ],
};