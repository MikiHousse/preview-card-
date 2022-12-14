module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': {'max': '375px'}
    },
    container: {
      padding: '20px',
      center: true,
    },
    fontFamily: {
      franc: ['Fraunces']
    },
    extend: {
      colors: {
        darkBlue: 'hsl(212, 21%, 14%)',
        grayishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)'
      },
    }
  },
  plugins: [],
}
