module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg: '1024px', 
      xl: '1280px', 
    },
    extend: {
      colors: {
        brightRed:'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 79%)', 
        darkBlue: 'hsl(214, 27%, 17%)', 
        darkGrayishBlue: 'hsl(220, 15%, 30%)', 
        veryDarkBlue: 'hsl(218, 44%, 16%)', 
        veryPaleRed: 'hsl(0, 100%, 94%)', 
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}
