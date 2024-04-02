// @ts-check
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { Stat, fsStore } from "./fsStore";

let nextId = 1;

export async function compile({ config, htmlInput, cssInput, htmlFilename }) {
  const fileId = nextId++;
  htmlFilename = htmlFilename || `/html${fileId}.html`;
  config = {
    ...(config || {}),
    content: [htmlFilename],
  };
  fsStore.set(htmlFilename, {
    content: htmlInput,
    stat: new Stat({ mtimeMs: fileId }),
  });
  try {
    const css = (
      await postcss([tailwindcss(config), autoprefixer()]).process(cssInput, {
        from: htmlFilename,
      })
    ).css;
    return { css };
  } finally {
    fsStore.delete(htmlFilename);
  }
}

export { fsStore };
