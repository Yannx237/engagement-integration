/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf4',
          100: '#e1f6e6',
          200: '#c4eccf',
          300: '#97dca9',
          400: '#62c27c',
          500: '#3ba758',
          600: '#2b8644',
          700: '#246b38',
          800: '#205530',
          900: '#144324',
          950: '#0a2613',
          deep: '#0b2e1b',
          forest: '#0f3922'
        },
        limeAccent: {
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f'
        },
        sand: {
          50: '#fbfbfa',
          100: '#f5f5f1',
          200: '#ebebe4',
          300: '#ddddd2',
          400: '#b8b8a5'
        },
        primary: {
          10: '#ACAA00',
          20: '#0F5E1D',
          30: '#56B9B4',
          40: '#F4643F',
          50: '#F0C24A',
          55: '#ff00230d',
          60: '#F9FAFB',
          70: '#5F710E',
          'text-0': '#667085',
          'text-10': '#344054',
          'text-20': '#252525',
          'text-30': '#959595',
          'text-40': '#939393',
          'text-50': '#98A2B3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0,0,0,0.03), 0 10px 30px rgba(0,0,0,0.04)',
        'elevated': '0 20px 40px -15px rgba(15, 57, 34, 0.08)',
        'glow': '0 0 35px -5px rgba(132, 204, 22, 0.35)'
      }
    }
  },
  plugins: [],
};
