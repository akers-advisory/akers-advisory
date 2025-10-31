import localFont from 'next/font/local';

export const moglanDemo = localFont({
  src: './MoglanDemo.woff2',
  display: 'swap',
  variable: '--font-moglan-demo',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

export const athelas = localFont({
  src: './Athelas-Regular.woff2',
  display: 'swap',
  variable: '--font-athelas',
  preload: true,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
});
