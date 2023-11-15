function getElement() {
	const element = document.getElementById("title");
	element.innerText = "Elementos modificados recuperados por id."
};
function addElement() {
	const element = document.createElement("p");
	element.innerText = "JavaScript is a programming language";

	const parentElement = document.getElementsByTagName("div")[0];
	const target = document.getElementsByTagName("p")[0];
	parentElement.insertBefore(element, target);
	parentElement.removeChild(target);
	console.log(element);
}
function addLink() {
	const element = document.createElement("a");
	element.setAttribute("href", "https://www.google.com");
	element.innerText = "Google";
	const parentElement = document.getElementsByTagName("div")[0];
	parentElement.appendChild(element);
}

function showLink() {
	const link = document.getElementsByTagName("a")[0];
	const url = link.getAttribute("href");
	console.log(url);
}

function removeLink() {
	const link = document.getElementsByTagName("a")[0];
	link.removeAttribute("href");
}

function operateCSS() {
	const element = document.getElementsByTagName("h1")[0];

	element.addEventListener("click", function () {
		this.classList.toggle("background_pink");
	})
};

function clickBtn() {
	const button = document.getElementById("btn");
	const parent = document.getElementById("parent");

	button.onclick = function(e) {
		e.preventDefault();
		console.log("Button pressed!");

	}
}

function alertClick(event) {
	event.target.style.backgroundColor = "red";
}

window.onload = clickBtn;