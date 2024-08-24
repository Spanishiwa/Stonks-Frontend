module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: {
      primary: '#0e0e10',
      secondary: '#18181b',
    },
    borderColor: {
      primary: 'rgba(83, 83, 95, 0.48)',
    },
    colors: {
      primary: '#EFEFF1',
    },
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.{js, jsx, ts, tsx}'],
};
