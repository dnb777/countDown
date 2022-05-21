"use strict"

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");

function countdown(){
	const currentYear = new Date();
	const nextYear = new Date(new Date().getFullYear(), 0, 1);
	nextYear.setFullYear(nextYear.getFullYear()+1);

	const diff = Math.abs(nextYear - currentYear);

	const totalSeconds = diff / 1000;

	sec.textContent = Math.floor(totalSeconds % 60)
	mins.textContent = Math.floor((totalSeconds / 60) % 60)
	hours.textContent = Math.floor((totalSeconds / 3600) % 24)
	days.textContent = Math.floor(totalSeconds / (3600 * 24))

}
countdown();


setInterval(countdown, 1000)
