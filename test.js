global.self = global;

const { compile } = require("./dist");

async function main() {
  const result = await compile({
    htmlInput: '<div class="p-4"></div>',
    cssInput: `@tailwind base; @tailwind components; @tailwind utilities;`,
    config: {
      content: ["/html.html"],
    },
  });
  console.log(result.css);
}

main();
