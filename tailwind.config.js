module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        secondary: '"Open Sans"',
        logo: 'Montserrat',
      },
      colors: {
        zblack: '#0A090B',
        zpurple: '#5666FF',
        zwhite: '#FBFBFB',
        zsmoke: '#AAA7AC',
        zdarkblue: '#1C314F',
        zfooterdarkblue: '#35445A',
      },
      backgroundImage: {
        'banner-img': 'url(/src/images/peek1.png)',
      },
      fontSize: {
        xxs: '0.625rem',
        '3xs': '0.5rem',
      },
    },
  },
  plugins: [],
};
