const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mysrc = myImage.getAttribute("src");
	if (mysrc === "images/green-priarie.jpg") {
		myImage.setAttribute("src", "images/white-waterfalls.jpg");
	} else {
		myImage.setAttribute("src", "images/green-priarie.jpg");
	}
};
	
let myButton = document.querySelector("Button");
let myHeading = document.querySelector("h1");

function setUserName(){
const myName = 	prompt('Please enter your name.');
if (!myName) {
	setUserName();
} else {
localStorage.setItem("name", myName);
myHeading.textContent = `Nature the Teacher - Hi ${myName}`;
}
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Nature the Teacher - Hi ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
