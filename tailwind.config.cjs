/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        'black-100': 'var(--color-black-100)',
        'black-200': 'var(--color-black-200)',
        'white-100': 'var(--color-white-100)',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'hero-pattern-white': "url('/src/assets/herowhitebg.png')",
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
      },
    },
  },
  plugins: [],
};
