module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7fafc", // Light mode background
        'background-dark': "#1a202c", // Dark mode background
        primary: "#4CAF50", // Main color for buttons and accents
        'primary-dark': "#388E3C", // Dark version of primary
        heading: "#1a202c", // Light mode text
        'heading-dark': "#e2e8f0", // Dark mode text color
        text: "#2d3748", // Normal text color for light mode
        'text-dark': "#edf2f7", // Dark text color
        link: "#81e6d9", // Links color
      }
    },
  },
  darkMode: 'class', // This is important to switch between dark and light mode
  plugins: [],
};
