export default {
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  resolver: undefined,
};

// module.exports = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Ensure Jest transforms modern JS/TS
//   },
//   moduleNameMapper: {
//     "\\.(css|scss|less)$": "identity-obj-proxy", // Mock CSS imports
//   },
// };
