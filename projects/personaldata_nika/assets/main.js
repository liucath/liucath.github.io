console.log("hello");

let onesection = document.querySelector("#one");
let oneImg = document.querySelector(".imagebank");

function showImgOne() {
	oneImg.classList.toggle("show");
}

onesection.addEventListener("click", showImgOne);