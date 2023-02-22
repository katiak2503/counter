let count = 0; 

const CURRENT_NUMBER = document.getElementById("currentNumber");

document.getElementById("decrease").onclick = function(){
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if (count <= -1)
		currentNumber.style.color = "red";
	if (count == 0)
		currentNumber.style.color = "blue";
}

document.getElementById("reset").onclick = function(){
	count=0;
	CURRENT_NUMBER.innerHTML = count;
	if (count === 0)
	currentNumber.style.color = "blue";	
}

document.getElementById("increase").onclick = function(){
	CURRENT_NUMBER.innerHTML = count;
	count++;
	if (count >= 1)
		currentNumber.style.color = "green";
	if (count == 0)
	currentNumber.style.color = "blue";
}
