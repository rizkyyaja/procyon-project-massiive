/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralUngu: "#937DC2",
        neutralBlack: "#000000",
        neutralPink: "#EBD4EB",
        neutralPink: "#EBD4EB",
        neutralPink1: "#C689C6",
        backgroundColor: "#FFFFFF",
        colortext: "#8638E5",
      },
    },

    animation: {
      'bounce-slow' : 'bounce 3s linear infinite',
      goyang: 'goyang 1s ease-in-out infinite',
    },
    keyframes: {
      goyang: {

        '0%, 100%' : {transform: 'rotate (-3deg)'},
        '50%' : {transform: 'rotate(3deg)'},
      },
    },
  },
  plugins: [],
}