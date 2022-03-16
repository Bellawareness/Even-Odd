//decided I wanted to include in HTML so created a function 
function evenOdd() {
  
//Given code declares the input//
let number = prompt ("Choose a number");

//A code to determine if a number is even
//Any number divisible by 2 is even 
  
 if(number % 2 == 0){
console.log(number + " it is even");
 }

//else statement to print what happens if number is odd
  else {
  console.log(number + " it is odd");
 }
}
//add the function to the button 
document.getElementById("myBtn").onclick = evenOdd;

//code to take log answers to html 
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
      logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();







 /*  
trying to determine if blank..
else if (number == null) {
  console.log("Please enter a number example 1 2 3");
   }
/*



  

  
  



//code to change prompt box it doesnt let me enter the number, why? 
function closepromptBox(){
    promptBox = document.getElementById("promptBox");
    promptClose = document.getElementById("promptClose");
    promptBox.style.visibility = "hidden";
    promptClose.style.visibility = "hidden";
}
window.prompt = function(msg){
    var id = "promptBox", promptBox, closeId = "promptClose", promptClose;
    promptBox = document.createElement("div");
    document.body.appendChild(promptBox);
    promptBox.id = id;
    promptBox.innerHTML = msg;
    promptClose = document.createElement("div");
    promptClose.id = closeId;
    promptClose.innerHTML = "x";
    promptBox.appendChild(promptClose);
    promptBox.style.visibility = "visible";
    promptClose.style.visibility = "visible";
    promptClose.onclick = closepromptBox;
};

*/