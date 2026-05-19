/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lifeline: {
          blue: "#2877A7",
          blueDark: "#0E446A",
          blueLight: "#DCEFF8",
          orange: "#F04A18",
          orangeSoft: "#FFE7DE",
          ink: "#13202A",
          muted: "#5B6875",
          sand: "#F7F4EF"
        }
      },
      fontFamily: {
        sans: ["Aptos", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Aptos Display", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 18px 50px rgba(14, 68, 106, 0.12)" }
    }
  },
  plugins: []
};
