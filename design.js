import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["src/assets/design/tokens.json"], // <-- make sure to have this match your token files!!!
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"], // <-- add a token name transform for generating token names, default is camel
      buildPath: "src/assets/design/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
