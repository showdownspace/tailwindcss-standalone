import preflight from "!!raw-loader!tailwindcss/lib/css/preflight.css";

export class Stat {
  constructor(props) {
    Object.assign(this, props);
  }
  isSymbolicLink() {
    return false;
  }
}

const fsStore = new Map();
fsStore.set("/css/preflight.css", {
  content: preflight,
  stat: new Stat({ mtimeMs: 1 }),
});

export { fsStore };
