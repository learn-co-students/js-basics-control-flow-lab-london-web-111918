// Write your code in this file!
function scuberGreetingForFeet(ride){
  let response;
  if (ride <= 400){
  response = 'This one is on me!';
}
  else if (ride > 2000 && ride <2499){
  response = 'I will gladly take your thirty bucks.'
}
  else if (ride > 2500){
  response = 'No can do.'
}
  return response
}


function ternaryCheckCity(city){
let result;
city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.")
return result
}

function switchOnCharmFromTip(tipType){

let response;

switch (tipType) {
    case "generous":
    response = "Thank you so much.";
    break;
    case "not as generous":
    response = 'Thank you.';
    break;
    default: response = "Bye.";
  }
  return response;
}
