/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'terminal': {
          'bg-main': '#0b0f14',
          'bg-panel': '#111827',
          'border': '#1f2937',
          'text-main': '#d1d5db',
          'green': '#00ff9c',
          'blue': '#38bdf8',
          'red': '#ff4d4d',
          'yellow': '#facc15',
        },
      },
      borderRadius: {
        'terminal': '0',
      },
      boxShadow: {
        'terminal-green': '0 0 10px rgba(0, 255, 156, 0.3), 0 0 20px rgba(0, 255, 156, 0.2), 0 0 30px rgba(0, 255, 156, 0.1)',
        'terminal-blue': '0 0 10px rgba(56, 189, 248, 0.3), 0 0 20px rgba(56, 189, 248, 0.2), 0 0 30px rgba(56, 189, 248, 0.1)',
        'terminal-red': '0 0 10px rgba(255, 77, 77, 0.3), 0 0 20px rgba(255, 77, 77, 0.2), 0 0 30px rgba(255, 77, 77, 0.1)',
      },
    },
  },
  plugins: [],
};
