const chai = require("chai");
const expect = chai.expect;
const should = chai.expect;
const fs = require("fs");
const path = require("path");


const configCheck = require("../utils/checkEnvironment.js");
const { base } = require("mocha/lib/reporters");
const header = require("../utils/header.js");


const config = configCheck();


let log4js = require("log4js");
let log = require("../utils/logger.js")
log4js.configure(log.logging());
let logger = log4js.getLogger();

const baseUrl = config.url;
const requestToSend = require("supertest")(baseUrl);

let bodyData = {
    "email": "michael.lawson@reqres.in",
    "password": "password123"
};


describe("POST request adds new user to users list", () => {
    let hedaers = header.requestHeader();
    let date = new Date();

    it("should register user", async function () {
        logger.info("POST register user");

        const postResponse = await requestToSend
            .post(`/api/register`)
            .set(hedaers)
            .send(bodyData);
        expect(postResponse.status).to.eql(201);

        let expectedData = JSON.parse(postResponse.text)

        expect(expectedData.email).to.eql("michael.lawson@reqres.in");
        expect(expectedData.password).to.eql("password123");
        expect(expectedData.id).to.exist;
        expect(expectedData.createdAt).to.exist;

        logger.info(JSON.parse(postResponse.text)); //Parsing is enough and dont need to convert it to a string

        //This is what I was doing wrong
        //After parsing I was converting it to a string
        //logger.info(JSON.parse(JSON.stringify(postResponse)));

    


    });
});