module.exports = {
  roots: ["<rootDir>/contests"],
  testMatch: ["**/test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
