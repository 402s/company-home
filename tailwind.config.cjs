// tailwind.config.cjs
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Oskari G2', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'off-white' : '#EFF4F5'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};