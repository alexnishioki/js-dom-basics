
var body = document.getElementsByTagName("body")[0]
for(var row = 0; row < 9; row++) {
	for(var col = 0; col < 9; col++) {
	div+=4
	if((col+row) % 2 === 0) {
		var div = makeDiv("red")
	} else {
		var div = makeDiv("black")
	}
	body.appendChild(div)
}
}


function makeDiv(color) {
	var div = document.createElement("div")
	div.style.width = "11.1%"
	div.style.paddingBottom = "11.1%"
	div.style.backgroundColor = color
	div.style.float = "left"
	return div
}






