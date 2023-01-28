/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},oom
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  fontFamily:{
    regular:['RobotoRegular'],
    medium:['RobotoMedium'],
    bold:['RobotoBold'],
    black:['RobotoBlack']
  }
}
