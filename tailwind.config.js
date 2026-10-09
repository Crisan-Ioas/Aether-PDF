/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aether: {
          dark: 'var(--color-bg)',
          darker: 'var(--color-darker)',
          panel: 'var(--color-panel)',
          sidebar: 'var(--color-sidebar)',
          hover: 'var(--color-hover)',
          active: 'var(--color-active)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          textBright: 'var(--color-text-bright)',
          textMuted: 'var(--color-text-muted)',
          viewport: 'var(--color-viewport)',
          red: '#e5252a',
          redHover: '#cc1e23'
        },
        acrobat: {
          dark: 'var(--color-bg)',
          darker: 'var(--color-darker)',
          panel: 'var(--color-panel)',
          sidebar: 'var(--color-sidebar)',
          hover: 'var(--color-hover)',
          active: 'var(--color-active)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          textBright: 'var(--color-text-bright)',
          textMuted: 'var(--color-text-muted)',
          red: '#e5252a',
          redHover: '#cc1e23'
        }
      }
    },
  },
  plugins: [],
}
