let {isFunction,strictEqual,isArray} = require('chai').assert
let {getMonths,getMonth,getDays,
	getDay,getMonthLengths,getDaysInMonth,
	dayTrimmer,addPadding}=require('../lib/stringFormat');

describe('getMonths',()=>{
	it("should be a function",()=>{
	   isFunction(getMonths)
	})
	it("should return an array of month names",()=>{
		isArray(getMonths())
	})
})
describe('getMonth',()=>{
	it("should be a function",()=>{
		isFunction(getMonths)
	})
	it("should return a month name based on the number",()=>{
		strictEqual(getMonth(0),"January");
	})
})

describe('getDays',()=>{
	it("should be a function",()=>{
		isFunction(getDays)
	})
	it("should return an array of day names",()=>{
		isArray(getDays())
	})
})
describe('getDay',()=>{
	it("should be a function",()=>{
		isFunction(getDay)
	})
	it("should return a day name based on the number",()=>{
		strictEqual(getDay(0),"Sunday");
	})
})

describe('getDaysInMonth',()=>{
	it("should be a function",()=>{
		isFunction(getDaysInMonth)
	})
	it("should return the amount of days for the month passed",()=>{
		strictEqual(getDaysInMonth(getMonth(0)),31)
	})
})

describe('dayTrimmer',()=>{
	it("should be a function",()=>{
		isFunction(dayTrimmer)
	})
	it("should return the first two letters of a passed string",()=>{
		strictEqual(dayTrimmer("Monday"),"Mo")
	})
})

describe('addPadding',()=>{
	it("should be a function",()=>{
		isFunction(addPadding)
	})
	it("should add padding to a string based on width",()=>{
		strictEqual(addPadding("foo",5)," foo ");
	})
	it("should be left Leaning",()=>{
		strictEqual(addPadding("foo",6)," foo  ");
	})
})
