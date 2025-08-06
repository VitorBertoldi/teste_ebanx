/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    // Other mappers if needed
  },
  moduleFileExtensions: ["js", "mjs", "json", "node"],
  transform: {
    "^.+\\.m?jsx$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
