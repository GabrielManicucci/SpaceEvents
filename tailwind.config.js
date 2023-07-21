/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBlue: '#1818AA',
        secondaryBlue: '#5762D5',
        hoverBlue: '#0039CA',
        hoverGreen: '#1EEA51',
        backgroundCard: '#F9FAFF',
        gradientColorBlue: '#0000ff',
      },
      keyframes: {
        openDropdown: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: '264px', opacity: '1' },
        },
        closeDropdown: {
          '0%': { height: '224px', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
        doubtsDropdown: {
          '0%': { height: '0', },
          '100%': { height: '80px', },
        },
      },
      animation: {
        menuOpenDropdown: 'openDropdown 1s',
        menuCloseDropdown: 'closeDropdown 1s',
        doubtsDropdown: 'doubtsDropdown 0.8s',
      },
    },
  },
  plugins: [],
}
