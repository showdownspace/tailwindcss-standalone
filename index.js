// @ts-check
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { Stat, fsStore } from "./fsStore";

let mtimeMs = 1;

export async function compile({ config, htmlInput, cssInput }) {
  fsStore.set("/html.html", {
    content: htmlInput,
    stat: new Stat({ mtimeMs: mtimeMs++ }),
  });
  const css = (
    await postcss([tailwindcss(config), autoprefixer()]).process(cssInput, {
      from: "/html.html",
    })
  ).css;
  return { css };
}

export { fsStore };
