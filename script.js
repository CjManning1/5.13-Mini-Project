let button=document.querySelector("button");
let input = document.querySelector('.Rainbow_six_siege')
let paragraph=document.querySelector("p")

button.onclick=function() {
// Write your .value statement here!
  let userInput = input.value 
  console.log(userInput)
  if (userInput == 'yes') {
    paragraph.innerHTML = 'Good you on my good side'
  }
  else if (userInput == 'Maybe'){
    paragraph.inerrHTML = 'You can try it and come back later'
  }
    
else{   
  paragraph.innerHTML = 'Your not on my good side'
}


};