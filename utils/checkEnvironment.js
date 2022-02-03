require("dotenv").config();
const { config } = require("dotenv");
const testConfig = require("../config.json");


const checkEnvironment = () => {
  if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "TEST") {
    return testConfig;
  } else if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "DEV") {
    return testConfig;
  } else if (
    process.env.NODE_ENV === "UAT" ||
    process.env.NODE_ENV === "UAT"
  ) {
    return testConfig;
  } else {
    console.error("Environment not available");
  }
};
module.exports = checkEnvironment;