/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary_blue: '#0015FF',
        primary_blue_light: '#3D6EF5',
        primary_blue_dark: '#16219C',
        primary_white: '#F0F0F0',
        primary_red: '#FF0303',
        primary_black: '#131415',
        disable_gray: '#CCCCCC',
      },
      fontFamily: {
        'any-body': "'Anybody', cursive",
      },
    },
  },
  plugins: [],
};
