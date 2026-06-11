/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'color-blue': 'var(--color-blue)',
        'color-orange': 'var(--color-orange)',
        cream: 'var(--color-cream)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) translateX(10px) rotate(1deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) translateX(-10px) rotate(-1deg)' },
        },
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'float-delayed': 'float-delayed 12s ease-in-out infinite',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
