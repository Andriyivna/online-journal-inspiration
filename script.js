document.addEventListener('DOMContentLoaded', function() {
	let textElement = document.querySelector('#main-text');
	let Text = textElement.innerHTML;

	textElement.innerHTML = '';
	
	console.log(textElement);
	let six = 0;


 function repeatingFunc() {		
 	if (six==Text.length){
 		return;
 	}	    
		textElement.innerHTML += Text[six]; 
		six++;
		
	    setTimeout(repeatingFunc, 250); 		
		
	} 
	setTimeout(repeatingFunc, 250);

});