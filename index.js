// Write your code in this file!
const scuberGreetingForFeet = (feet) => {
    if (feet < 400) {
        return "This one is on me!";
    } else if (feet > 2000 && feet < 2500){
        return 'I will gladly take your thirty bucks.';
    } else if (feet > 2500) {
        return 'No can do.';
    } else {
        return 'some cab fare';
    }
};


const ternaryCheckCity = (destination) => {
    return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


const switchOnCharmFromTip = (tip) => {
    switch (tip) {
        case 'generous':
            return  "Thank you so much.";
        case 'not as generous':
            return  "Thank you.";
        default:
            return  "Bye.";
        }    
}
