import StyleDictionary from "style-dictionary";

const options = {
  source: ["./src/assets/design/transfer.json"],
  platforms: {
    scss: {
      // transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "src/assets/design/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};

const sd = new StyleDictionary(options, {
  verbosity: "verbose",
  warnings: "warn",
});

sd.buildAllPlatforms();
