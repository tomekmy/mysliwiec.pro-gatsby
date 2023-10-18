module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app"],
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
  }
}