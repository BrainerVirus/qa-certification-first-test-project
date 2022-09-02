const chai = require("chai");
const assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

const convertHandler = new ConvertHandler();

suite("#Unit Tests", function () {
  suite("#getNum(input)", function () {
    test("Whole number input", function () {
      const input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
    });
  });
  suite("#getNum(input)", function () {
    test("Decimal input", function () {
      const input = "2.2mi";
      assert.equal(convertHandler.getNum(input), 2.2);
    });
  });
  suite("#getNum(input)", function () {
    test("Fractional input", function () {
      const input = "1/2km";
      assert.equal(convertHandler.getNum(input), 0.5);
    });
  });
  suite("#getNum()", function () {
    test("Fracional input with decimal", function () {
      const input = "1.1/2.2km";
      assert.equal(convertHandler.getNum(input), 0.5);
    });
  });
  suite("#getNum()", function () {
    test("Catch err on double fraction", function () {
      const input = "3/2/3km";
      assert.equal(convertHandler.getNum(input), "invalid number");
    });
  });
  suite("#getNum()", function () {
    test("Default to numerial input 1 when no numerical input is given", function () {
      const input = "gal";
      assert.equal(convertHandler.getNum(input), 1);
    });
  });
  suite("#getUnit()", function () {
    test("Read unit", function () {
      const input = "32L";
      assert.equal(convertHandler.getUnit(input), "L");
    });
  });
  suite("#getUnit()", function () {
    test("Catch err on wrong unit", function () {
      const input = "32gg";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
    });
  });
  suite("#getRetrunUnit()", function () {
    test("Return unit for each unit", function () {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      let c = 0;
      input.forEach((unit) => {
        assert.equal(convertHandler.getReturnUnit(unit), expect[c]);
        c++;
      });
    });
  });
  suite("#getString()", function () {
    test("Return splled-out string unit", function () {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      let c = 0;
      input.forEach((unit) => {
        assert.equal(convertHandler.spellOutUnit(unit), expect[c]);
        c++;
      });
    });
  });
  suite("#convert()", function () {
    test("Convert gal to L", function () {
      const input = [25, "gal"];
      const expected = 94.63525;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
  suite("#convert()", function () {
    test("Convert L to gal", function () {
      const input = [25, "L"];
      const expected = 6.6043;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
  suite("#convert()", function () {
    test("Convert mi to km", function () {
      const input = [25, "mi"];
      const expected = 40.2335;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
  suite("#convert()", function () {
    test("Convert km to mi", function () {
      const input = [25, "km"];
      const expected = 15.53432;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
  suite("#convert()", function () {
    test("Convert lbs to kg", function () {
      const input = [25, "lbs"];
      const expected = 11.3398;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
  suite("#convert()", function () {
    test("Convert kg to lbs", function () {
      const input = [25, "kg"];
      const expected = 55.11561;
      assert.equal(convertHandler.convert(input[0], input[1]), expected);
    });
  });
});
