// https://github.com/michael-ciniawsky/postcss-load-config

const path = require("path");
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
    ? 375
    : 750;
  return {
    plugins: {
      "postcss-import": {},
      "postcss-url": {},
      // to edit target browsers: use "browserslist" field in package.json
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 5,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 1334
      }
    }
  };
};
