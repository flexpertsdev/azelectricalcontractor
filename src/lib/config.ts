/**
 * Site Configuration
 *
 * Central place for site-wide settings.
 * AI agents: Modify these values, don't hunt through components.
 */

export const siteConfig = {
  name: 'Your Site Name',
  description: 'A modern website built with Astro',
  url: 'https://example.com',
  locale: 'en_GB',
  twitter: '@yourhandle',
  themeColor: '#4f46e5',
  defaultOgImage: '/og-default.jpg',

  author: {
    name: 'Your Name',
    email: 'hello@example.com',
    url: 'https://example.com',
  },

  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  footerLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
