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
        primary1: "#CBFB45",
        primary2: "#161617",
        neutralDarker: "#000000",
        neutralDark: "#151517",
        neutral: "#232325",
        neutralLight: "#898990",
        neutralLighter: "#F3F3F3",
        darkGreen: "#70833C",
      },
      fontFamily: {
        // Neue Machina fonts
        "neue-machina-light": "Neue Machina Light",
        "neue-machina": "Neue Machina",
        "neue-machina-bold": "Neue Machina Bold",

        // Euclid fonts
        "euclid-bold-italic": "Euclid Bold Italic",
        "euclid-bold": "Euclid Bold",
        "euclid-italic": "Euclid Italic",
        "euclid-light-italic": "Euclid Light Italic",
        "euclid-light": "Euclid Light",
        "euclid-medium-italic": "Euclid Medium Italic",
        "euclid-medium": "Euclid Medium",
        euclid: "Euclid",
        "euclid-semibold-italic": "Euclid Semibold Italic",
        "euclid-semibold": "Euclid Semibold",

        // PP neue plain fonts
        "pp-neue-light": "PP Neue Light",
        "pp-neue-light-italic": "PP Neue Light Italic",
        "pp-neue-regular": "PP Neue Regular",
        "pp-neue-regular-italic": "PP Neue Regular Italic",
        "pp-neue-bold": "PP Neue Bold",
        "pp-neue-bold-italic": "PP Neue Bold Italic",

        // Helvetica fonts
        "helvetica-medium": "Helvetica Medium",
      },
    },
  },
  plugins: [],
};
