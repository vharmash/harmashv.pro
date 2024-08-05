// eslint.config.js
import { includeIgnoreFile } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pluginVue from 'eslint-plugin-vue'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  ...pluginVue.configs['flat/recommended'],
  includeIgnoreFile(gitignorePath),
  {
    // your overrides
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.vue',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.cts',
      '**/*.mts'
    ]

    // any additional configuration for these file types here
    // .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts
  }
]
