const sm = require("prompt-sync");
const prompt = sm();

function speedmonitor(){
    //ask user for input
    let speed = prompt("Speed: ")
    
    // evaluate the speed
    if(speed <= 70){
        console.log("Ok")
    }else if(speed >= 70 && speed <= 130){
        let points = (speed - 70) / 5;
        console.log(`Points: ${points}`)
    }else if(speed >= 130){
        console.log("License suspended")
    }else{
        console.log("Enter correct speed!");
    }
}
speedmonitor();