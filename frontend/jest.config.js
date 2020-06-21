const {defaults} = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.tsx"
  ],
  collectCoverageFrom: [
    "src/*.{tsx, ts, js, jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
};