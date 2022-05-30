import { GluegunCommand, GluegunToolbox } from "gluegun";
import { generateSemantics } from "../utils/semantics.utils";
import { join } from "path";

const command: GluegunCommand = {
  name: "generate-semantics",
  description: "Create semantics.json out of a TypeScript definition",
  alias: ["s"],
  run: async (toolbox: GluegunToolbox): Promise<number> => {
    const { print, parameters } = toolbox;
    const { options } = parameters;

    const semanticsTsPath = join(process.cwd(), options.i || options.in);
    const outputPath = join(process.cwd(), options.o || options.out);
    const translationKeyOutputPath = join(
      process.cwd(),
      options.t || options.translations,
    );

    console.info("Creating semantics file");
    console.info(
      `
  Inputs: 
  Input: '${semanticsTsPath}'
  Output: '${outputPath}'
  ${
    translationKeyOutputPath
      ? `Translations output: '${translationKeyOutputPath}'`
      : ""
  }
`,
    );

    console.info(
      `Creating '${outputPath}'${
        translationKeyOutputPath ? ` and '${translationKeyOutputPath}'` : ""
      } based on Semantics TS from ${semanticsTsPath}`,
    );

    if (!semanticsTsPath) {
      print.error(
        "Missing path to TypeScript definition of semantics. Please provide one with the `semantics` flag (-s|--in 'path/to/semantics.ts')",
      );

      return 1;
    }

    generateSemantics(
      semanticsTsPath,
      outputPath,
      translationKeyOutputPath,
      print,
    );

    return 0;
  },
};

export default command;
