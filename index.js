// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let greeting
  if (distance < 401) {
    greeting = "This one is on me!";
  }
  else if (distance > 2500) {
    greeting = "No can do."
  }
  else if (distance > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  }
  return greeting
}

function ternaryCheckCity (city) {
 return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
 switch (tip) {
   case "generous":
     return "Thank you so much."
     break;
   case "not as generous":
     return "Thank you."
     break;
   default:
     return "Bye."
     break;
 }
}
