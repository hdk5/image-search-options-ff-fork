import format from 'eslint-plugin-format'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['lib'],
  },
  {
    ...stylistic.configs['recommended-flat'],
  },
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { parser: 'css', tabWidth: 2 }],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { parser: 'html', tabWidth: 2 }],
    },
  },
]
