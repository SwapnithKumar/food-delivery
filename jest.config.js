// jest.config.js
module.exports = {
  // other Jest configurations...
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
