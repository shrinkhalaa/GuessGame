let a=Math.floor((Math.random()*100)+1);
let b=prompt("Try to guess the number, if the number is between 1 and 100:");
while(b!==a){
  if(b<a){
    prompt("The number is greater than the number you entered")
  }
  else if(b>a){
    prompt("The number if lesser that the number you entered")
  }
  else{
    prompt("Congratulations! you have entered the correct number!")
  }
}



