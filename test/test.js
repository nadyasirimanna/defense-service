const supertest = require("supertest");
const should = require("should");
const chai = require('chai');
const expect = chai.expect;
const helper = require('../utils/helper')
const server = supertest.agent("http://35.226.17.192");

describe("Defense Service", function () {
  let token = ''
  it('makes a call to API', async () => {
    // request is through Supertest, which makes the http request
    token = await helper.loginSuperAdmin();
    console.log(token)
  });

  it("check existing location", (done) => {
    // check if it returns 200 & data
    server
      .get('/defense-service/100.0/100.0')
      .set('auth', token)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.equal(1);
        done();
      });
  });

  // check for a fresh location
  it("check fresh location", function (done) {
    // make a test location
    // check if it returns 200 & data
    server
      .get('/defense-service/0.0/0.0')
      .set('auth', token)
      .expect(200)
      .end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.length).to.equal(0);

        done();
      });
  });
});