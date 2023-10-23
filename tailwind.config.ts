import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)']
    },
    extend: {
      colors: {
        bgblue: '#0B1044',
        cartPink: '#D41062',
        buttonSoftPink: '#DF9BB7',
        productCardBg: '#D9D9D9'
      }
    }
  },
  plugins: []
}
export default config
