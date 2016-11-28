var chai= require('chai');
var assert= chai.assert;
var expect= require('expect');
var myApp= require('../app/library.js');


describe("Test if generated numbbers are prime numbers", function(){
	it("should return an array",function(){
		assert.isArray(myApp.getPrimes(3));
	})
	it("should return '[2,3]' for 3",function(){
		assert.deepEqual(myApp.getPrimes(3), [2,3]);
	})
	it("should return '[2,3,5,7,11,13]' for 15",function(){
		assert.deepEqual(myApp.getPrimes(15), [2,3,5,7,11,13]);
	})
	it("should return '[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]' for 15",function(){
		assert.deepEqual(myApp.getPrimes(60), [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]);
	})
	it("it should return 'invalid' for negative values", function(){
		assert.equal(myApp.getPrimes(-1), 'invalid input');
	})
})