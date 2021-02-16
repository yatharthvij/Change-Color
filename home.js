var allButtons = document.getElementsByTagName("button");
//console.log(allButtons)

var copyAllButtons = [];
for(let i=0; i<allButtons.length;i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}
//console.log(copyAllButtons)

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === "red"){
        buttonsRed();
    }else if (buttonThingy.value === "green"){
        buttonsGreen();
    }else if (buttonThingy.value === "random"){
        buttonsRandom();
    }else if (buttonThingy.value === "reset"){
        buttonsReset();
    }
}

function buttonsRed(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function buttonsGreen(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function buttonsReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom(){
    var choices = ["btn-primary","btn-danger","btn-warning","btn-success"];
     
    for(let i=0; i<allButtons.length; i++){
        var randomNumber = Math.floor(Math.random() *4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}