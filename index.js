function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue < 401) {
    greeting = "This one is on me!";
  }
  else if (someValue > 2500) {
    greeting = "No can do."
  }
  else if (someValue > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  }
  return greeting
}

function ternaryCheckCity(someCity) {
  let greeting
  if (someCity == "NYC") {
    greeting = "Ok, sounds good.";
  }
  else {
    greeting = "No go.";
  }
  return greeting
}

function switchOnCharmFromTip(someValue) {
  let greeting
  if (someValue == "generous") {
    greeting = "Thank you so much.";
  }
  else if (someValue == "not as generous") {
    greeting = "Thank you.";
  }
  else {
    greeting = "Bye.";
  }
  return greeting
}
