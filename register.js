document.getElementById("register_button").addEventListener("click", setToVisible);
let mouseclicks = 0;

document.addEventListener("click", () => {
    mouseclicks++;
});

let inputs = document.querySelectorAll("input, textarea, select");
let inputData = {};
for(let input of inputs) {
    inputData[input.name] = {
        keyPresses: 0,
        charactersTyped: 0,
        lastCharacterLength: 0
    };
    input.addEventListener("keydown", () => {
        inputData[input.name].keyPresses++;
    });
    input.addEventListener("input", (event) => {
        let change = 0;
        if(event.target.value.length - inputData[input.name].lastCharacterLength > 0) {
            change = event.target.value.length - inputData[input.name].lastCharacterLength;
        }
        inputData[input.name].lastCharacterLength = event.target.value.length;
        inputData[input.name].charactersTyped += change;
    });
}


function setToVisible() {
    document.querySelector(".behavioral_tracking").style.visibility = 'visible';
    document.getElementById("mouseClicks").innerHTML = 'Number of mouseclicks: ' + mouseclicks + ' clicks';
    document.getElementById("timeSpentOnPage").innerHTML = 'Time spent on webpage: ' + Math.floor(performance.now()/1000/60) + 'minutes and ' + Math.floor(performance.now()/1000%60) + ' seconds';
    let keyPressString = "";
    let charactersTypedString = "";
    for(let input in inputData) {
        keyPressString += 'Amount of keypresses in ' + input + ' is ' + inputData[input].keyPresses + '<br>';
        charactersTypedString += 'Amount of characters typed in ' + input + ' is ' + inputData[input].charactersTyped + '<br>';
    }
    document.getElementById('keyPresses').innerHTML = keyPressString;
    document.getElementById("totalCharactersTyped").innerHTML = charactersTypedString;
};