// Tailwind config (root file). Brand colors and font live here, one place only.
// Use in HTML like: bg-brand, text-brand, bg-dark, text-dark
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: '#FFAB1A', // yellow
        dark: '#121212',  // almost black
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
};
