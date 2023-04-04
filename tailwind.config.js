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

        "zx9-speaker-mobile":
          "url(../assets/home/desktop/image-speaker-zx9.png)",
        "zx9-speaker-tablet":
          "url(../assets/home/tablet/image-speaker-zx9.png)",
        "zx9-speaker-desktop":
          "url(../assets/home/desktop/image-speaker-zx9.png)",

        "zx7-speaker-mobile":
          "url('../assets/home/mobile/image-speaker-zx7.jpg')",
        "zx7-speaker-tablet":
          "url('../assets/home/tablet/image-speaker-zx7.jpg')",
        "zx7-speaker-desktop":
          "url('../assets/home/desktop/image-speaker-zx7.jpg')",

        "yx1-earphones-mobile":
          "url('../assets/home/mobile/image-earphones-yx1.jpg')",
        "yx1-earphones-tablet":
          "url('../assets/home/tablet/image-earphones-yx1.jpg')",
        "yx1-earphones-desktop":
          "url('../assets/home/desktop/image-earphones-yx1.jpg')",

        "best-gear-mobile":
          "url('../assets/shared/mobile/image-best-gear.jpg')",
        "best-gear-tablet":
          "url('../assets/shared/tablet/image-best-gear.jpg')",
        "best-gear-mobile":
          "url('../assets/shared/desktop/image-best-gear.jpg')",
      },
    },
  },
  plugins: [],
};
