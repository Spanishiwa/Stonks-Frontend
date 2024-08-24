/* eslint-disable sort-keys */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: {
      buttonPrimary: '#9147FF',
      primary: '#0e0e10',
      secondary: '#18181b',
      transparent: 'transparent',
    },
    borderColor: {
      primary: 'rgba(83, 83, 95, 0.48)',
    },
    caretColor: {
      primary: '#ADADB8',
    },
    colors: {
      blueViolet: '#8A2BE2',
      dodgerBlue: '#1E90FF',
      firebrick: '#B22222',
      green: '#008000',
      primary: '#EFEFF1',
      status: '#53535f',
      timestamp: '#adadb8',
    },
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.{js, jsx, ts, tsx}'],
};
