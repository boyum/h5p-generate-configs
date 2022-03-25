import { GluegunToolbox } from "gluegun";

export default {
  name: "generate-library",
  description: "Create library.json out of a TypeScript definition",
  alias: ["l"],
  run: async (toolbox: GluegunToolbox): Promise<number> => {
    toolbox.print.warning("This command is not implemented yet.");
    return 1;
  },
};
