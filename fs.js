const { fsStore } = require("./fsStore");

module.exports = {
  readFileSync: (path) => {
    if (fsStore.has(path)) {
      return fsStore.get(path).content;
    }
    throw new Error(`ENOENT: no such file or directory, open '${path}'`);
  },
  statSync: (path) => {
    if (fsStore.has(path)) {
      return fsStore.get(path).stat;
    }
    throw new Error(`ENOENT: no such file or directory, stat '${path}'`);
  },
  lstatSync: (path) => {
    if (fsStore.has(path)) {
      return fsStore.get(path).stat;
    }
    throw new Error(`ENOENT: no such file or directory, stat '${path}'`);
  },
  promises: {
    readFile: async (path) => {
      return module.exports.readFileSync(path);
    },
  },
};
