export default {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line no-undef
        require('tailwindcss'),
        // eslint-disable-next-line no-undef
        require('autoprefixer'),
      ],
    },
  },
};