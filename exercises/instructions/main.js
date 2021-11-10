let body = document.body;
let sunny = document.querySelector(".sunny");
let cloudy = document.querySelector(".cloudy");
let rainy = document.querySelector(".rainy");
let snowy = document.querySelector(".snowy");
let next = document.querySelector(".next");
let weather = document.querySelector(".wrapper");
let sunnyitem = document.querySelector(".sunnyitem");
let cloudyitem = document.querySelector(".cloudyitem");
let rainyitem = document.querySelector(".rainyitem");
let snowyitem = document.querySelector(".snowyitem");

function changeSunnyBgColor() {
	body.classList.toggle("sunnyBg");
	weather.classList.toggle("disappear");
	cloudy.classList.toggle("disappear");
	rainy.classList.toggle("disappear");
	snowy.classList.toggle("disappear");
	sunnyitem.classList.toggle("sunnyappear");
}

function changeCloudyBgColor() {
	body.classList.toggle("cloudyBg");
	weather.classList.toggle("disappear");
	sunny.classList.toggle("disappear");
	rainy.classList.toggle("disappear");
	snowy.classList.toggle("disappear");
	cloudyitem.classList.toggle("cloudyappear");
}

function changeRainyBgColor() {
	body.classList.toggle("rainyBg");
	weather.classList.toggle("disappear");
	cloudy.classList.toggle("disappear");
	sunny.classList.toggle("disappear");
	snowy.classList.toggle("disappear");
	rainyitem.classList.toggle("rainyappear");
}

function changeSnowyBgColor() {
	body.classList.toggle("snowyBg");
	weather.classList.toggle("disappear");
	cloudy.classList.toggle("disappear");
	rainy.classList.toggle("disappear");
	sunny.classList.toggle("disappear");
	snowyitem.classList.toggle("snowyappear");
}

sunny.addEventListener("click", changeSunnyBgColor);
cloudy.addEventListener("click", changeCloudyBgColor);
rainy.addEventListener("click", changeRainyBgColor);
snowy.addEventListener("click", changeSnowyBgColor);