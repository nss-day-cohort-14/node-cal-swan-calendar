let assert = require('chai').assert
let zeller = require("../lib/zeller")

describe("zeller",()=>{
	it("should return a number representing day of the week",()=>{
		assert.strictEqual(zeller(8,30,2016), 2)
	})
})
