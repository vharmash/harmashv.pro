// eslint.config.js
import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginVue from 'eslint-plugin-vue'
import tseslint from '@vue/eslint-config-typescript'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')
const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  {
    // .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts
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
  },
  includeIgnoreFile(gitignorePath),
  ...pluginVue.configs['flat/recommended'],
  ...tseslint(),
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting')
]
