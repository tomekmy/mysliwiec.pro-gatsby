/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        buzz: {
          "50%": {
            transform: "translateX(3px) rotate(2deg)",
          },
          "100%": {
            transform: "translateX(-3px) rotate(-2deg)",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(20px)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(20px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        buzz: "buzz 0.15s linear infinite",
        slideRight:
          "slideRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        slideLeft:
          "slideLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
    },
  },
  plugins: [],
};
