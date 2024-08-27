/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F38266",
        secondary: "#002E40",
        matlightblue: "#A9BFE2",
        lightbrown: "#EAD7B8",
        lightcream: "#faf6ee",
      },

      fontFamily: {
        montserrat: ["'Montserrat', sans-serif"],
        quattrocento: ["'Quattrocento', serif"],
        barlow: ["'Barlow' ,serif"],
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Custom screen sizes
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};
