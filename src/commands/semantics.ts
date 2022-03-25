import { GluegunCommand, GluegunToolbox } from "gluegun";
import { generateSemantics } from "../utils/semantics.utils";

const command: GluegunCommand = {
  name: "generate-semantics",
  description: "Create semantics.json out of a TypeScript definition",
  alias: ["s"],
  run: async (toolbox: GluegunToolbox): Promise<number> => {
    const { print, parameters } = toolbox;
    const { options } = parameters;

    const semanticsOutputPath = options.semanticsOut;
    const semanticsTsPath = options.s || options.semantics;
    const translationKeyOutputPath = options.t || options.translations;

    if (!semanticsTsPath) {
      print.error(
        "Missing path to TypeScript definition of semantics. Please provide one with the `semantics` flag (-s|--semantics 'path/to/semantics.ts')",
      );

      return 1;
    }

    generateSemantics(
      semanticsTsPath,
      semanticsOutputPath,
      translationKeyOutputPath,
      print,
    );

    return 0;
  },
};

export default command;
