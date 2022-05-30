import { promises as fs } from "fs";
import { system, filesystem } from "gluegun";

const src = filesystem.path(__dirname, "..");

const cli = async (cmd: string) =>
  system.run(
    "node " + filesystem.path(src, "bin", "h5p-generate-configs") + ` ${cmd}`,
  );

test("generates semantics.json", async () => {
  const tempDir = await fs.mkdtemp("semantics-test_");
  await fs.copyFile("demo/semantics.ts", `${tempDir}/semantics.ts`);
  await fs.copyFile(
    "demo/semantics-helper.ts",
    `${tempDir}/semantics-helper.ts`,
  );

  try {
    await cli(
      `s -s ${tempDir}/semantics.ts --semanticsOut ${tempDir}/semantics.json -t ${tempDir}/TranslationKey.ts`,
    );

    const expected = (await fs.readFile("demo/semantics.json")).toString(
      "utf-8",
    );
    const actual = (await fs.readFile(`${tempDir}/semantics.json`)).toString(
      "utf-8",
    );

    expect(actual).toBe(expected);
  } finally {
    await fs.rm(tempDir, { recursive: true });
  }
});

// test("generates file", async () => {
//   const output = await cli("generate foo");

//   expect(output).toContain("Generated file at models/foo-model.ts");
//   const foomodel = filesystem.read("models/foo-model.ts");

//   expect(foomodel).toContain(`module.exports = {`);
//   expect(foomodel).toContain(`name: 'foo'`);

//   // cleanup artifact
//   filesystem.remove("models");
// });
