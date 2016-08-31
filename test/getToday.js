'use strict';
let assert =require('chai').assert;
let getToday = require('../lib/getToday')
describe('getToday',()=>{
	it("should be a function",()=>{
		assert.isFunction(getToday)
	})
	it("should return an object with 3 properties",()=>{
		assert.strictEqual(Object.keys(getToday()).length,3);
	})
	it("should return an object the current day of the month",()=>{
		assert.strictEqual(getToday().day,new Date().getDate());
	})
	it("should return an object with the current month",()=>{
		assert.strictEqual(getToday().month,new Date().getMonth());
	})
	it("should return an object with the current year",()=>{
		assert.strictEqual(getToday().year,new Date().getFullYear());
	})

})
