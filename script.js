document.addEventListener('DOMContentLoaded', function() {
	let textElement = document.querySelector('#main-text');
	if(!textElement){
		return;
	}
	let Text = textElement.innerHTML;

	textElement.innerHTML = '';
	
	console.log(textElement);
	let size = 0;


	 function repeatingFunc() {		
	 	if (size==Text.length){
	 		return;
	 	}	    
		textElement.innerHTML += Text[size]; 
		size++;
		
	    setTimeout(repeatingFunc, 250); 		
			
	} 
	setTimeout(repeatingFunc, 250);

});




let sheryl = document.querySelector('#sheryl');
let sandberg = document.querySelector('#sandberg');

function setColorBlack(){
      sheryl.style.color = 'black';
	  sandberg.style.color ='black';
	 setTimeout(setColorBlue,300);
}

function setColorBlue(){

      sheryl.style.color = 'rgb(140, 163, 150)';
	  sandberg.style.color =  'rgb(140, 163, 150)';
	  setTimeout(setColorBlack,300);

}
if (sheryl && sandberg) {
	setColorBlack();
}
