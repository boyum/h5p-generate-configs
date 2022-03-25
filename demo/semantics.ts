import { H5PField, H5PBehaviour, H5PL10n } from "h5p-types";

export const semantics: Readonly<Array<H5PField | H5PBehaviour | H5PL10n>> = [
  {
    label: "Position",
    name: "position",
    type: "group",
    fields: [
      {
        label: "X",
        name: "x",
        type: "number",
        min: 0,
        max: 100,
        decimals: 3,
      },
      {
        label: "Y",
        name: "y",
        type: "number",
        min: 0,
        max: 100,
        decimals: 3,
      },
    ],
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    widget: "html",
    tags: ["a", "p", "br"],
  },
  {
    label: "Image",
    name: "image",
    type: "image",
  },
  {
    label: "Behaviour",
    name: "behaviour",
    type: "group",
    fields: [
      {
        label: "Theme color",
        name: "themeColor",
        type: "text",
        default: "#22bbff",
      },
    ],
  },
  {
    label: "L10n",
    name: "l10n",
    type: "group",
    fields: [
      {
        label: "Open",
        name: "open",
        type: "text",
        default: "Open",
      },
      {
        label: "Close",
        name: "close",
        type: "text",
        default: "Close",
      },
    ],
  },
];
