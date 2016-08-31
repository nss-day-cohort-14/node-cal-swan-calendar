'use strict';

let getToday=()=>{
	let date = new Date();
	let today={}
	today.day= date.getDate();
	today.month=date.getMonth();
	today.year=date.getFullYear();
	return today;
}
module.exports=getToday;
