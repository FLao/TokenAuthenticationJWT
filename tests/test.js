var chai = require("chai");
var sut = function getNameLength(length) {
	if(length >= 6)
		return "success";
	else
		return "name needs to be at least six characters long";
};

var expect = chai.expect;

describe("Login test cases", function() {
	it("should let the user enter their name with a minimum length of 6", function () {
		// Arrange
		var expected = "success"
		var length = 7;

		// Act
		var actual = sut(length);

		// Assert
		expect(actual).equals(expected);
	});
});