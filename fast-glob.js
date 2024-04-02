module.exports = {
  sync: (patterns) => [].concat(patterns),
  generateTasks: (patterns) => [
    {
      positive: [].concat(patterns),
      negative: [],
    },
  ],
  escapePath: (path) => path,
};
