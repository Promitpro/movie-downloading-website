/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {

          primary: "#0F0F0F",

          secondary: "#333333",
                                        
          accent: "#ffd700",

          neutral: "#1B1B1B",

          "base-100": "152121",
          //"base-100": "#ffffff",

          
        },
        
        
      },
      
      
    ],

    
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

