/**
 * @type {import("jest").Config}
 */
export default {
  cache: true,
  verbose: true,
  cacheDirectory: "/tmp/jest",
  testMatch: ["**/*.test.ts"],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
