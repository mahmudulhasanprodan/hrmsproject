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
        SideVarColorTwo: "var(--SideVarColorTwo)",
        HoverColor: "var(--HoverColor)",
        DropDownColor: "var(--DropDownColor)",
        BtnColorOne: "var(--BtnColorOne)",
        BtnColorTwo: "var(--BtnColorTwo)",
        CommonColor: "var(--CommonColor)",
        HoverDropdown: "var(--HoverDropdown)",
      },

      dropShadow: {
        boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        inputshadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", 
      }
    },
  },
  plugins: [],
}