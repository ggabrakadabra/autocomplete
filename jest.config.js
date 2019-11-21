module.exports = {
  verbose: false,
  collectCoverageFrom: [
      "src/**/*.{js,}",
    ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
     }
  },
  testMatch: [
    "<rootDir>/src/**/?(*.)(test).js?(x)"
  ],
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src"
  ],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ],
  moduleFileExtensions: [
    "js",
  ],
}