import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    plugins: {
      cypress: cypressPlugin
    },
    languageOptions: {
      globals: {
        ...cypressPlugin.environments.globals.globals
      }
    },
    rules: {
      'no-unused-vars': 'warn' // Example rule
    }
  }
];
