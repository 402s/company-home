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
    screens: {
      'xsm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'off-white': '#EFF4F5',
        'deep-purple': '#210631'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};