const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const formatPrettierCommand = (filenames) =>
  `prettier --write --ignore-path .gitignore ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  './**/*.{js,ts,tsx,json}': [formatPrettierCommand],
}
