// Import an assertion library - in this case chai.
const assert = require("chai").assert;

// Import functions we are testing from the app.js file.

// const getcontacts=  require('../app');
const hi = require('../practice');

// describe("App", function () {
//   it("app should return contacts", function () {
//     assert.equal(getcontacts(), "Contacts have been got.");
//   });
// });

describe("practice", function () {
    it("practice should return Hi there..", function () {
      assert.equal(hi(), "Hi there.");
    });
  });
  