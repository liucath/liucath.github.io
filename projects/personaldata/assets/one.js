console.log("hello");

let onesection = document.querySelector("#one");
let oneImg = document.querySelector(".oneimg");
let time = document.querySelector(".time");

let twosection = document.querySelector("#two");
let twoImg = document.querySelector(".twoimg");
let timeTwo = document.querySelector(".timetwo");

let threesection = document.querySelector("#three");
let threeImg = document.querySelector(".threeimg");
let timeThree = document.querySelector(".timethree");

let foursection = document.querySelector("#four");
let fourImg = document.querySelector(".fourimg");
let timeFour = document.querySelector(".timefour");

let fivesection = document.querySelector("#five");
let fiveImg = document.querySelector(".fiveimg");
let timeFive = document.querySelector(".timefive");

let sixsection = document.querySelector("#six");
let sixImg = document.querySelector(".siximg");
let timeSix = document.querySelector(".timesix");

let sevensection = document.querySelector("#seven");
let sevenImg = document.querySelector(".sevenimg");
let timeSeven = document.querySelector(".timeseven");

let eightsection = document.querySelector("#eight");
let eightImg = document.querySelector(".eightimg");
let timeEight = document.querySelector(".timeeight");

let ninesection = document.querySelector("#nine");
let nineImg = document.querySelector(".nineimg");
let timeNine = document.querySelector(".timenine");

let tensection = document.querySelector("#ten");
let tenImg = document.querySelector(".tenimg");
let timeTen = document.querySelector(".timeten");

let elevensection = document.querySelector("#eleven");
let elevenImg = document.querySelector(".elevenimg");
let timeEleven = document.querySelector(".timeeleven");

function showImgOne() {
	oneImg.classList.toggle("show");
}
function showTime() {
	if (time.style.display === "block") {
		time.style.display = "none";
	}else {
		time.style.display = "block";
	}
}

function showImgTwo() {
	twoImg.classList.toggle("show");
}
function showTimeTwo() {
	if (timeTwo.style.display === "block") {
		timeTwo.style.display = "none";
	}else {
		timeTwo.style.display = "block";
	}
}

function showImgThree() {
	threeImg.classList.toggle("show");
}
function showTimeThree() {
	if (timeThree.style.display === "block") {
		timeThree.style.display = "none";
	}else {
		timeThree.style.display = "block";
	}
}

function showImgFour() {
	fourImg.classList.toggle("show");
}
function showTimeFour() {
	if (timeFour.style.display === "block") {
		timeFour.style.display = "none";
	}else {
		timeFour.style.display = "block";
	}
}

function showImgFive() {
	fiveImg.classList.toggle("show");
}
function showTimeFive() {
	if (timeFive.style.display === "block") {
		timeFive.style.display = "none";
	}else {
		timeFive.style.display = "block";
	}
}

function showImgSix() {
	sixImg.classList.toggle("show");
}
function showTimeSix() {
	if (timeSix.style.display === "block") {
		timeSix.style.display = "none";
	}else {
		timeSix.style.display = "block";
	}
}

function showImgSeven() {
	sevenImg.classList.toggle("show");
}
function showTimeSeven() {
	if (timeSeven.style.display === "block") {
		timeSeven.style.display = "none";
	}else {
		timeSeven.style.display = "block";
	}
}

function showImgEight() {
	eightImg.classList.toggle("show");
}
function showTimeEight() {
	if (timeEight.style.display === "block") {
		timeEight.style.display = "none";
	}else {
		timeEight.style.display = "block";
	}
}

function showImgNine() {
	nineImg.classList.toggle("show");
}
function showTimeNine() {
	if (timeNine.style.display === "block") {
		timeNine.style.display = "none";
	}else {
		timeNine.style.display = "block";
	}
}

function showImgTen() {
	tenImg.classList.toggle("show");
}
function showTimeTen() {
	if (timeTen.style.display === "block") {
		timeTen.style.display = "none";
	}else {
		timeTen.style.display = "block";
	}
}

function showImgEleven() {
	elevenImg.classList.toggle("show");
}
function showTimeEleven() {
	if (timeEleven.style.display === "block") {
		timeEleven.style.display = "none";
	}else {
		timeEleven.style.display = "block";
	}
}

onesection.addEventListener("click", showImgOne);
onesection.addEventListener("click", showTime);

twosection.addEventListener("click", showImgTwo);
twosection.addEventListener("click", showTimeTwo);

threesection.addEventListener("click", showImgThree);
threesection.addEventListener("click", showTimeThree);

foursection.addEventListener("click", showImgFour);
foursection.addEventListener("click", showTimeFour);

fivesection.addEventListener("click", showImgFive);
fivesection.addEventListener("click", showTimeFive);

sixsection.addEventListener("click", showImgSix);
sixsection.addEventListener("click", showTimeSix);

sevensection.addEventListener("click", showImgSeven);
sevensection.addEventListener("click", showTimeSeven);

eightsection.addEventListener("click", showImgEight);
eightsection.addEventListener("click", showTimeEight);

ninesection.addEventListener("click", showImgNine);
ninesection.addEventListener("click", showTimeNine);

tensection.addEventListener("click", showImgTen);
tensection.addEventListener("click", showTimeTen);

elevensection.addEventListener("click", showImgEleven);
elevensection.addEventListener("click", showTimeEleven);