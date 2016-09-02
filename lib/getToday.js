'use strict';
let today={}
let date = new Date();
let getToday=()=>{
	today.day= date.getDate();
	today.month=date.getMonth();
	today.month+=1;
	today.year=date.getFullYear();
	return today;
}
module.exports={getToday,today,date};
