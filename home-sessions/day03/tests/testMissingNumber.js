var chai= require('chai');
var expect= chai.expect;
var findMissing= require('../app/library.js').findMissing;

describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(findMissing([], [])).to.equal(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(findMissing([2], [2])).to.equal(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(findMissing([4], [4])).to.equal(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(findMissing([7], [7])).to.equal(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(findMissing([1, 2], [1, 2, 5])).to.equal(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(findMissing([4, 6, 8], [4, 6, 8, 10])).to.equal(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).to.equal(1);
    });

  });

});

