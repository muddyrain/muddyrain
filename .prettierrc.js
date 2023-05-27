module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
  printWidth: 80,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: 'auto',
  semi: true,
  // true: Put > on the last line instead of at a new line
  jsxBracketSameLine: false,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: true,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: 'es5',
  parser: 'typescript',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
