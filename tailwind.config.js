/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      OpenSans: "var(--OpenSans)",
    },
    extend: {
      colors: {
        HeaderColor: "var(--HeaderColor)",
        SideVarColorOne: "var(--SideVarColorOne)",
        HoverColor: "var(--HoverColor)",
        DropDownColor: "var(--DropDownColor)",
        BtnColorOne: "var(--BtnColorOne)",
        BtnColorTwo: "var(--BtnColorTwo)",
      },
    },
  },
  plugins: [],
}