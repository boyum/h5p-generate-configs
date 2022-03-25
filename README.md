# h5p-generate-configs

A tool for creating common H5P config files out of a TypeScript definition.

## Generate semantics

To run the program that generates semantics, run `h5p-generate-configs generate-semantics` or `h5p-generate-configs s`.

To generate `semantics.json` from `semantics.ts`, provide the path to `semantics.ts`. The JSON will by default be outputted to the current directory:

```shell
$ h5p-generate-configs s --semantics src/semantics.ts
```

The tool can also create a TypeScript `type` file for the translation keys found in `semantics.ts`. Provide an output path as such:

```shell
$ h5p-generate-configs s -s src/semantics.ts -t src/TranslationKey.ts
```

### Options

| Name             | Alias | Description                                                                | Required | Default          |
| ---------------- | ----- | -------------------------------------------------------------------------- | -------- | ---------------- |
| `--semantics`    | `-s`  | Path to the TypeScript definition of semantics                             | `true`   | -                |
| `--semanticsOut` | -     | Path to JSON output                                                        | `false`  | `semantics.json` |
| `--translations` | `-t`  | Path to translation type output. The file won't be created if not provided | `false`  | -                |

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm test

$ npm run build

$ npm publish
```
