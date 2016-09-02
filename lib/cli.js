'use strict'

// functions that need to be separated into their own module
const dayLine = () => {
	let str = ' '
	getDays().forEach( v => {
		str += `${dayTrimmer(v)} `
	})
	return str
}

const monthLine = () => {
	let str = null
	str = `${monthString} ${year.toString()}`
	return str
}

const addPaddingToDays = () => {
	let arr = daysInMonthArray
							.map(v => v.toString())
							.map(v => {
								if(v.length < 2) {
									return ` ${v},`
								}
								return v+','
							})
	return arr
}
/////////////////////////////////////////////////////////

/*** MODULES ***/
const {
				getMonths, getMonth,
				getDays, getDay,
				getDaysInMonth, dayTrimmer,
				centerString,
				addPadding, getRange
			}                     = require('./stringFormat')
	,                  zeller = require('./zeller')
	,   {getToday,today,date} = require('./getToday')

/*** VARS ***/
// new Date(), month is indexed at 0
const {year, month, day} = getToday()
	,          daysPerWeek = 7
	,			        calWidth = 21
	,          monthString = getMonth(month - 1)
	,     daysInMonthArray = getRange(getDaysInMonth(monthString))
	,			  daysInMonthStr = addPaddingToDays().join(' ')
	,     calMonthTitleStr = monthLine()


const lineBreaks = (str) => {
	let    arr =str.split(',')
		, newStr = ''
		for(let i=0;i<zeller(month,1,year);i++){
			arr.unshift("   ")
		}
	arr.forEach((v, i) => {
		if(i===0){
			newStr+=" "+v
		}
		else if(i % daysPerWeek !==0) {
			newStr += v
		} else {
			newStr += `\n`+ v
		}
	})
	return newStr
}



console.log(centerString(calMonthTitleStr,calWidth+1))
console.log(dayLine())
console.log(lineBreaks(daysInMonthStr))
