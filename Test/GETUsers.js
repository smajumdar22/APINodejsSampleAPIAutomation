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

let expectedData ={
    "page":1,
    "per_page":6,
    "total":12,
    "total_pages":2,
    "data":[
       {
          "id":1,
          "email":"george.bluth@reqres.in",
          "first_name":"George",
          "last_name":"Bluth",
          "avatar":"https://reqres.in/img/faces/1-image.jpg"
       },
       {
          "id":2,
          "email":"janet.weaver@reqres.in",
          "first_name":"Janet",
          "last_name":"Weaver",
          "avatar":"https://reqres.in/img/faces/2-image.jpg"
       },
       {
          "id":3,
          "email":"emma.wong@reqres.in",
          "first_name":"Emma",
          "last_name":"Wong",
          "avatar":"https://reqres.in/img/faces/3-image.jpg"
       },
       {
          "id":4,
          "email":"eve.holt@reqres.in",
          "first_name":"Eve",
          "last_name":"Holt",
          "avatar":"https://reqres.in/img/faces/4-image.jpg"
       }
    ]
 };

xdescribe("All Uers", () => {

    it("should GET 200 code for all users",  async function (){
        logger.info("GET Request for all Users");

        const getResponse = await requestToSend
        .get(`/users`);
      expect(getResponse.status).to.eql(200);
      logger.info(getResponse.text)

    });
    it("should contain data for 4 users",  async function (){
        logger.info("GET Request data for all Users");

        const getResponse = await requestToSend
        .get(`/users`);
      expect(getResponse.body.data.length).to.eql(4);
    });
    it("should contain data for all users",  async function (){
        logger.info("GET Request data for all Users");

        const getResponse = await requestToSend
        .get(`/users`);
      expect(getResponse.body).to.eql(expectedData);

    });
});