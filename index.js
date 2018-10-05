const container = document.querySelector(".container");

let size = 16;
let solid = true;
let random = false;
let isColor=false;

createGrid(size);

function newGrid() {
	size = prompt("New grid size: ", "16");
  	createGrid(size);
}

function createGrid(size) {
	while(container.hasChildNodes())
  		container.removeChild(container.lastChild);

  	let gridModel = "auto ".repeat(size);
  	container.setAttribute("display",'grid');
  	container.setAttribute("style", `grid-template-rows: ${gridModel}; grid-template-columns: ${gridModel};`);
    
	for(i = 0; i < size; i++) {
		for(j = 0; j < size; j++) {
  		var box = document.createElement("div");
    	box.className = "box";
    	container.appendChild(box);
  		}
	}
	colorSquares();
}

/*
function reset() {
	createGrid(size);
}
*/

function setRainbow(){
	
	var mode=document.getElementById('colors');
	if (mode.textContent=='Rainbow On'){
		mode.textContent="Rainbow Off";
		isColor=false;
	}
	else{
	mode.textContent='Rainbow On';
	isColor=true;	
}
}

function colorSquares() {
	let box = document.querySelectorAll(".box");
	let touchSquare = function(e) {
		if (isColor) {
			let r = Math.round(255 * Math.random());
			let g = Math.round(255 * Math.random());
			let b = Math.round(255 * Math.random());
			let color = `rgb(${r}, ${g}, ${b})`;
			console.log(color);
			e.target.style.background = color;
		} else {
			e.target.style.background = "black";
		}
	};
	box.forEach(box => {
		box.addEventListener("mouseenter", touchSquare);
		box.addEventListener("touchstart", touchSquare);
	});
}