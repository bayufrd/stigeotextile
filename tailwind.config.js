// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // or wherever your JSX/TSX files are located
      './public/index.html',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      function({ addComponents }) {
        addComponents({
          '.text-title': {
            fontSize: '1.875rem', /* text-3xl */
            fontWeight: '700',
            '@screen sm': {
              fontSize: '2.25rem', /* text-4xl */
            },
            '@screen md': {
              fontSize: '3rem', /* text-5xl */
            },
            '@screen lg': {
              fontSize: '2.25rem', /* text-4xl */
            },
            '@screen xl': {
              fontSize: '3rem', /* text-5xl */
            },
          },
          '.text-subtitle': {
            fontSize: '1rem', /* text-base */
            fontWeight: '600',
            '@screen sm': {
              fontSize: '1.125rem', /* text-lg */
            },
            '@screen md': {
              fontSize: '1.25rem', /* text-xl */
            },
            '@screen lg': {
              fontSize: '1.125rem', /* text-lg */
            },
            '@screen xl': {
              fontSize: '1.25rem', /* text-xl */
            },
          },
          '.text-body': {
            fontSize: '0.875rem', /* text-sm */
            '@screen sm': {
              fontSize: '0.875rem', /* text-sm */
            },
            '@screen md': {
              fontSize: '1rem', /* text-base */
            },
            '@screen lg': {
              fontSize: '0.875rem', /* text-sm */
            },
            '@screen xl': {
              fontSize: '1rem', /* text-base */
            },
          },
        })
      }
    ],
  }
  