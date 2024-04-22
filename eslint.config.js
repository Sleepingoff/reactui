import pluginJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import configs from './eslint-custom.config.js';

const __dirname = import.meta.dirname;

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: pluginJs.configs.recommended // optional unless you're using "eslint:recommended"
});
export default [
  pluginJs.configs.recommended,
  {
    ignores: ['design.js', 'config/*', 'eslint.config.js']
  },
  {
    files: ['**/*.ts', '**/*.tsx']
  },
  ...compat.plugins(
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'prettier'
  ),
  ...compat.config(configs)
];
