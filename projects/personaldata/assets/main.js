let body = document.body;
let time = document.querySelector(".time");
let one = document.querySelector("#one");

function showTime() {
	body.classList.toggle("time");
}

one.addEventListener("click", showActions();