/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        "dark-1": "#252728",
        "dark-2": "#1E1E20",
        "dark-3": "#171717",
        "light-1": "#FFFFFF",
        "light-2": "#F3F3F3",
        "light-3": "#EEEEEE",
      },
      backgroundImage: () => ({}),
    },
  },
  plugins: [],
};
