"use strict"

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");

function getTimeLeft(){
	const currentDate = new Date();
	const nextYear = new Date(new Date().getFullYear(), 0, 1);
	nextYear.setFullYear(nextYear.getFullYear()+1);

	const diff = Math.abs(nextYear - currentDate);

	return diff
}
setCount();