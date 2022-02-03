const chai = require("chai");
const expect = chai.expect;
const should = chai.expect;
const fs = require("fs");
const path = require("path");


const configCheck = require("../utils/checkEnvironment.js");
const { base } = require("mocha/lib/reporters");

const config = configCheck();

let log4js = require("log4js");
let log = require("../utils/logger.js")
log4js.configure(log.logging());
let logger = log4js.getLogger();

const baseUrl = config.url;
const requestToSend = require("supertest")(baseUrl);

xdescribe("Non Existing User", () => {

    it("should GET 404 error code for non-existing user",  async function (){
        logger.info("GET Request for Non Existing User 23");

        const getResponse = await requestToSend
        .get(`/users/23`);
      expect(getResponse.status).to.eql(404);
      expect(getResponse.error).to.eql("cannot GET /api/users/23");
      //logger.info(getResponse)

    })
    it("should GET 404 error code for non-existing user",  async function (){
        logger.info("GET Request for Non Existing User 23");

        const getResponse = await requestToSend
        .get(`/users/23`);
      expect(getResponse.status).to.eql(404);
      expect(getResponse.error).to.eql("cannot GET /api/users/23");
      //logger.info(getResponse)

    })
    it("should GET 404 error code for non-existing user",  async function (){
        logger.info("GET Request for Non Existing User 23");

        const getResponse = await requestToSend
        .get(`/users/23`);
      expect(getResponse.status).to.eql(404);
      expect(getResponse.error).to.eql("cannot GET /api/users/23");
      //logger.info(getResponse)

    })
    it("should GET 404 error code for non-existing user",  async function (){
        logger.info("GET Request for Non Existing User 23");

        const getResponse = await requestToSend
        .get(`/users/23`);
      expect(getResponse.status).to.eql(404);
      expect(getResponse.error).to.eql("cannot GET /api/users/23");
      //logger.info(getResponse)

    })
})