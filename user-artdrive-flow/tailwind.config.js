/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(315deg, hsla(117, 88%, 47%, 1) 0%, hsla(142, 74%, 58%, 1) 50%, hsla(184, 86%, 56%, 1) 100%)',
        'text-gradient': 'linear-gradient(90deg, #818cf8, #21E342)',
        // 'gradient-button': 'linear-gradient(315deg, #818cf8 0%, #21E342 100%)',
        'gradient-button': 'linear-gradient(315deg, #fd7b4f, #e13db3, #47affc)',
        'bg-image': "url('/images/Main.svg')",
        'bg-about': "url('/images/BGabout.svg')",
        'bg-how': "url('/images/howBg.svg')",
      },      
      fontFamily: {
        dinround: ['dinround', 'sans-serif'],
        dinroundbold: ['dinroundbold', 'sans-serif'],
        dinroundmedium: ['dinroundmedium', 'sans-serif'],
        custom: ['italiana', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        particiana: ['particiana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
