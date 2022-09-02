const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("###Functional Tests###", function () {
  this.timeout(5000);
  suite("#/api/convert", function () {
    test("Convert a valid input through the api", function (done) {
      const input = "10L";
      chai
        .request(server)
        .get(`/api/convert?input=${input}`)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, "L");
          assert.equal(res.body.returnNum, 2.64172);
          assert.equal(res.body.returnUnit, "gal");
          done();
        });
    });
  });
  suite("#/api/convert", function () {
    test("Catch error while converting input through the api", function (done) {
      const input = "32g";
      chai
        .request(server)
        .get(`/api/convert?input=${input}`)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.status, 200);
          assert.equal(res.text, "invalid unit");
          done();
        });
    });
  });
  suite("#/api/convert", function () {
    test("Catch error while converting input through the api", function (done) {
      const input = "3/7.2/4kg";
      chai
        .request(server)
        .get(`/api/convert?input=${input}`)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.status, 200);
          assert.equal(res.text, "invalid number");
          done();
        });
    });
  });
  suite("#/api/convert", function () {
    test("Catch error while converting invalid number AND unitthrough the api", function (done) {
      const input = "3/7.2/4kilomegagram";
      chai
        .request(server)
        .get(`/api/convert?input=${input}`)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.status, 200);
          assert.equal(res.text, "invalid number and unit");
          done();
        });
    });
  });
  suite("#/api/convert", function () {
    test("Convert with no number input", function (done) {
      const input = "kg";
      chai
        .request(server)
        .get(`/api/convert?input=${input}`)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, "kg");
          assert.equal(res.body.returnNum, 2.20462);
          assert.equal(res.body.returnUnit, "lbs");
          done();
        });
    });
  });
});
