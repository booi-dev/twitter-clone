/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976',
      xl: '1440px'
    },
    colors: {
      'pri-blue-1': '#1d9bf0',

      'pri-black-1': '#000000',
      'pri-black-2': '#000000a6',
      'pri-black-3': '#0f1419bf',

      'pri-gray-1': '#2f3336',
      'pri-gray-2': '#333639',
      'pri-gray-3': '#71767b',

      'pri-white-1': '#ffffff',
      'pri-white-2': '#eff3f4',
      'pri-white-3': '#e7e9ea',
      'pri-white-4': '#d6d9db',
    },
    fontSize: {
      'app-11': '11px',
      'app-13': '13px',
      'app-14': '14px',
      'app-15': '15px',
      'app-17': '17px',
      'app-20': '20px',
    },
    fontFamily: {
      'app-sans': ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'app-serif': ['Gerogia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
