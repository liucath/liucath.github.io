let body = document.body;
let sunny = document.querySelector(".sunny");
let cloudy = document.querySelector(".cloudy");
let rainy = document.querySelector(".rainy");
let snowy = document.querySelector(".snowy");

function changeSunnyBgColor() {
	body.classList.toggle("sunnyBg");
	img.classList.toggle("imgChosen");
}

function changeCloudyBgColor() {
	body.classList.toggle("cloudyBg");
	img.classList.toggle("imgChosen");
}

function changeRainyBgColor() {
	body.classList.toggle("rainyBg");
	img.classList.toggle("imgChosen");
}

function changeSnowyBgColor() {
	body.classList.toggle("snowyBg");
	img.classList.toggle("imgChosen");
}

sunny.addEventListener("click", changeSunnyBgColor);
cloudy.addEventListener("click", changeCloudyBgColor);
rainy.addEventListener("click", changeRainyBgColor);
snowy.addEventListener("click", changeSnowyBgColor);