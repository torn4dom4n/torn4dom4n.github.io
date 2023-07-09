module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};
