module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#576170",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
};

// background-color: #7f5a83;
// background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
