/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // root HTML file
    "./public/index.html",         // entry point if using frameworks
    "./src/**/*.{html,js,jsx,ts,tsx}", // all source files
    "./components/**/*.{html,js,jsx,ts,tsx}", // reusable components
    "./pages/**/*.{html,js,jsx,ts,tsx}"       // page-level files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
