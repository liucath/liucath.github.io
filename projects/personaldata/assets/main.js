console.log("hello");

let time = document.querySelector(".time");
let onesection = document.querySelector("#one");
let oneImg = document.querySelector(".imagebank");

function showImgOne() {
	oneImg.classList.toggle("show");
}

onesection.addEventListener("click", showImgOne());