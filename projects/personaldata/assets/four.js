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