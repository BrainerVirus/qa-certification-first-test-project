function ConvertHandler() {
  this.getNum = function (input) {
    const regex = /^\d+$|^\d+\.\d+$/;
    const regexString = /[a-zA-Z]+/g;
    const regexFraction = /\//g;
    const result = input.replace(regexString, "");
    if (result === "") return 1;
    if (regexFraction.test(result)) {
      const fraction = result.split("/");
      if (fraction.length > 2) return "invalid number";
      if (!regex.test(fraction[0]) || !regex.test(fraction[1]))
        return "invalid number";
      return fraction[0] / fraction[1];
    }
    if (!regex.test(result)) return "invalid number";
    return result;
  };

  this.getUnit = function (input) {
    const regex = /[a-zA-Z]+/;
    const result = input.match(regex);
    // console.log("RESULT GETunit", result);
    switch (result.toString().toLowerCase()) {
      case "gal":
        return "gal";
      case "l":
        return "L";
      case "mi":
        return "mi";
      case "km":
        return "km";
      case "lbs":
        return "lbs";
      case "kg":
        return "kg";
      default:
        return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
      default:
        return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "invalid unit";
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const number = parseFloat(initNum);
    const unit = initUnit.toLowerCase();
    switch (initUnit) {
      case "gal":
        console.log("retrun in gal: ", (number * galToL).toFixed(5));
        return (number * galToL).toFixed(5);
      case "L":
        return (number / galToL).toFixed(5);
      case "lbs":
        return (number * lbsToKg).toFixed(5);
      case "kg":
        return (number / lbsToKg).toFixed(5);
      case "mi":
        return (number * miToKm).toFixed(5);
      case "km":
        return (number / miToKm).toFixed(5);
      default:
        return "invalid unit";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
