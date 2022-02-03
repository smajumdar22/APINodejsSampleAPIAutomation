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

let expectedData = {
    "data":{
       "id":2,
       "email":"janet.weaver@reqres.in",
       "first_name":"Janet",
       "last_name":"Weaver",
       "avatar":"https://reqres.in/img/faces/2-image.jpg"
    },
    "support":{
       "url":"https://reqres.in/#support-heading",
       "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
    }
 };

describe("Single User", () => {
  let hedaers = header.requestHeader();

    it("should GET 200 status code for user 2",  async function (){
        logger.info("GET Request for Existing User 2");

        const getResponse = await requestToSend
        //.set(headers)
        .get(`/users/2`);
      expect(getResponse.status).to.eql(200);

      logger.info(getResponse.text.data);
    });

    it("should contain data for only user 2",  async function (){
        logger.info("GET Request data for User 2");

        const getResponse = await requestToSend
        .set('Content-Type',  'application/json')
        .get(`/users/2`);
      //expect(getResponse.text.data.length).to.eql(1);
      
      expect(responseBody.data.id).to.eql(2);
      expect(getResponse.text.data.id).to.eql(2);
      expect(getResponse.text.data.email).to.eql("janet.weaver@reqres.in");
      expect(getResponse.text.data.last_name).to.eql("Janet");
      expect(getResponse.text.data.first_name).to.eql("Weaver");
      expect(getResponse.text.data.avatar).to.eql("https://reqres.in/img/faces/2-image.jpg");
    });
    xit("should contain data for single users",  async function (){
        logger.info("GET Request data for User 2");

        const getResponse = await requestToSend
        .set('Content-Type',  'application/json')
        .get(`/users/2`);
        let obj = Objeck.keys(getResponse.text)
        logger.info("Object is ", obj);
      expect(getResponse.text).to.eql(expectedData);

      
      fs.appendFileSync(
        path.join(__dirname, "./resultsDataForSingleUser.txt"),
        `Data for all single are ${getResponse.text}`,
         (err) => {
          if (err) {
            logger.info(`Error writing file: ${err}`);
          } else {
            logger.info(`File is written successfully!`);
          }
        }
      );

    }).timeout(24000);
    
});