/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1820px',
      // => @media (min-width: 1920px) { ... }
      '4xl': '2560px',
      // => @media (min-width: 1920px) { ... }
    },container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl':'14rem',
        '4xl':'32rem',

      },
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        quicksand:["Quicksand", "sans-serif"]
      },
      colors:{
        bgGrey:"#F6F6F9",
        darkBlue:"#002F68",
        lightBlue:"#60AFF0",
        blue: "#4e92c1",
        blue2: "#1a75bb",
        blue3: "#14395b",
        red: "#D6001C",
        white: "#fff",
        black: "#000",
        darkGrey:"#6C727F",
        darkGreen:"#19D176",
        lightGreen:"#CCF5E1",
      }
    },
  },
  plugins: [],
}

