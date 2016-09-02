'use strict'

const getMonths = () => {
	return [
		"January",
		"Febuary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
}

const getMonth = (x) => {
	return getMonths()[x]
}

const getDays = () => {
	return [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
}

const getDay = (x) => {
	return getDays()[x]
}

const getDaysInMonth = (month) => {
	let yearDictionary = {
	   January   : 31,
	   February  : 28,
	   March     : 31,
	   April     : 30,
	   May       : 31,
	   June      : 30,
	   July      : 31,
	   August    : 31,
	   September : 30,
	   October   : 31,
	   November  : 30,
	   December  : 31
	}

	return yearDictionary[month]
}



const dayTrimmer = (string) => {
	return string.slice(0,2)
}

const centerString = (string, padding) => {
	let space = ' ',
					i = 0,
	stringArr = string.split('')

	 while(i < padding - string.length) {
	 	i++
	 	(i % 2 === 0)
	 		? stringArr.unshift(space)
	 		: stringArr.push(space)
	 }
	 return stringArr.join('')

}

const addPadding = (string, padding, side) => {
	let space = ' ',
	stringArr = string.split('')

	for (var i = 0; i < padding; i++) {
		(side === 'left')
			? stringArr.unshift(space)
			: stringArr.push(space)
	}
	 return stringArr.join('')
}

const getRange = (int) => {
	let newArr = []
	for (let i = 1; i <= int; i++) {
		newArr.push(i)
	}
	return newArr
}

module.exports = {
	getMonths, getMonth,
	getDays, getDay,
	getDaysInMonth, dayTrimmer,
	centerString,
	addPadding, getRange
}
