/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "subheader-desktop": "url('../assets/home/desktop/image-hero.jpg')",
        "subheader-tablet": "url('../assets/home/tablet/image-header.jpg')",
        "subheader-mobile": "url('../assets/home/mobile/image-header.jpg')",

        "pattern-circles": "url('../assets/home/desktop/pattern-circles.svg')",

        "best-gear-mobile":
          "url('../assets/shared/mobile/image-best-gear.jpg')",

        // testing bg-image for product images
        "zx7-speaker-mobile":
          "url('../assets/home/mobile/image-speaker-zx7.jpg')",
        "yx1-earphones-mobile":
          "url('../assets/home/mobile/image-earphones-yx1.jpg')",
      },
    },
  },
  plugins: [],
};
