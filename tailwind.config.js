/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-register": "url(/images/hero-register.jpg)",
        "hero-testimonies": "url(/images/hero-testimonies.jpg)",
        "package-design": "url(/images/bg-pattern.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purp: "#6420AA",
        sec: "#F85E95",
        yel: "#FACD49",
        light: "#E5E4E4",
        "purp-60": "rgba(234,225,243,0.6)",
        greyscale: "#718096",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        openSans: ["Open-Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
