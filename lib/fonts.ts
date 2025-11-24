import { Space_Mono, Josefin_Slab, Titillium_Web } from 'next/font/google';

// Space Mono - monospace font
export const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

// Josefin Slab - serif font
export const josefinSlab = Josefin_Slab({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-slab',
});

// Titillium Web - sans-serif font
export const titilliumWeb = Titillium_Web({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium-web',
});
