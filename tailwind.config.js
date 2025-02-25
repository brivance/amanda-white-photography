/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    `./src/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#f7f7f7",
        black: "#3f3d3d",
        green: "#9cc0a4",
        "light-brown": "#d6ccc2",
      },
      fontFamily: {
        encoded: ["Encode Sans Expanded", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        oswald: ["Oswald Variable"],
        sans: ["Source Sans 3"],
        bonaNova: ["Bona Nova SC"],
        gotu: ["Gotu"],
        unbounded: ["Unbounded Variable"],
      },
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: ["Fira Sans", "Source Sans 3", "Raleway"],
        },
      },
    },
  ],
};

export default config;
