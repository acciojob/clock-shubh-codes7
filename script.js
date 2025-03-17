//your JS code here. If required.
let ptag = document.querySelector("#timer")

let currentTime = new Date()

setInterval(
	function(){
		currentTime = new Date()
		ptag.innerText = currentTime.toLocaleString();
		
	}, 1000)

