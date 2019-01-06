// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet > 0 && feet <= 400) {
    return 'This one is on me!'
  }
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }

  else {
    return 'No can do.'
  }
}


function ternaryCheckCity(city) {
// city == 'NYC' ? "Ok, sounds good." : "No go.";
if (city == 'NYC') {
  return 'Ok, sounds good.'
}
else {
  return 'No go.'
}
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break;
    case "not as generous":
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}
