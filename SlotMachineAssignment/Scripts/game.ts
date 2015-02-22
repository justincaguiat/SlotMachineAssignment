
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage: createjs.Stage; // Reference to the Stage
var helloText: createjs.Text; // Holds my Hello World! Text
var buttonBitmap: createjs.Bitmap;

var game;
var background;
var spinButton;
var slotOne = ["Sonic", "Tails", "YellowGuy", "Robotnic", "Bars", "Knuckles", "Rings", "blanks"];
var slotTwo = ["Sonic", "Tails", "YellowGuy", "Robotnic", "Bars", "Knuckles", "Rings", "blanks"];
var slotThree = ["Sonic", "Tails", "YellowGuy", "Robotnic", "Bars", "Knuckles", "Rings", "blanks"];
var firstOutcome;
var secondOutcome;
var thirdOutcome;

var spins = 0;
var win = 0;
var jackpot = 0;

// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function init() {

    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events

    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// GAMELOOP
function gameLoop() {
    stage.update();
}
function createUI() {
    background = new createjs.Bitmap("assets/images/slot-machine.png");
    game.addChild(background);

    spinButton = new createjs.Bitmap("assets/images/SpinButton.png");
    spinButton.x = 400;
    spinButton.y = 450;
    game.addChild(spinButton);


    spinButton.addEventListener("click", SpinButton);
}

function SpinButton() {
    //Getting Random Elements from each slot
    firstOutcome = Math.floor(Math.random() * slotOne.length);
    console.log("Slot One: " + slotOne[firstOutcome]);

    secondOutcome = Math.floor(Math.random() * slotTwo.length);
    console.log("Slot Two: " + slotTwo[secondOutcome]);

    thirdOutcome = Math.floor(Math.random() * slotThree.length);
    console.log("Slot Three: " + slotThree[thirdOutcome]);



    payoutCheck(slotOne[firstOutcome], slotTwo[secondOutcome], slotThree[thirdOutcome]);


}

function payoutCheck(spotOne, spotTwo, SpotThree) {
    console.log("");
    spins++;
    console.log("Number is spins " + spins);
    console.log("Number is wins " + win);
    console.log("Number of Jackpots " + jackpot);
    console.log("jackPot Percentage " + Math.floor(jackpot / spins * 100) + " %");
    console.log("Win percentage : " + Math.floor(win / spins * 100) + " %");
    var allSlots = [spotOne, spotTwo, SpotThree];
    var possibilities = ["Sonic", "Tails", "YellowGuy", "Robotnic", "Bars", "Knuckles", "Rings", "blanks"];
    var sonic = 0;
    var tails = 0;
    var yellowGuy = 0;
    var robotnic = 0;
    var bars = 0;
    var knuckles = 0;
    var rings = 0;
    var blanks = 0;

    var total = [];
    var highest = 0;
    var choice = 0;

    for (var i = 0; i < possibilities.length; i++) {
        for (var r = 0; r < allSlots.length; r++) {
            switch (possibilities[i]) {
                case possibilities[0]:
                    if (possibilities[0] == allSlots[r]) {
                        sonic++;
                    }
                    break;
                case possibilities[1]:
                    if (possibilities[1] == allSlots[r]) {
                        tails++;
                    }
                    break;
                case possibilities[2]:
                    if (possibilities[2] == allSlots[r]) {
                        yellowGuy++;
                    }
                    break;
                case possibilities[3]:
                    if (possibilities[3] == allSlots[r]) {
                        robotnic++;
                    }
                    break;
                case possibilities[4]:
                    if (possibilities[4] == allSlots[r]) {
                        bars++;
                    }
                    break;
                case possibilities[5]:
                    if (possibilities[5] == allSlots[r]) {
                        knuckles++;
                    }
                    break;
                case possibilities[6]:
                    if (possibilities[6] == allSlots[r]) {
                        rings++;
                    }
                    break;
                case possibilities[7]:
                    if (possibilities[7] == allSlots[r]) {
                        blanks++;
                    }
                    break;
            }
        }
    }
    total = [sonic, tails, yellowGuy, robotnic, bars, knuckles, rings, blanks];

    for (var t = 0; t < total.length; t++) {
        if (total[t] > highest) {
            highest = total[t];
            choice = t;
        }
    }
    console.log("");
    if (highest == 1) {
        console.log("No matches");
    }
    if (highest == 2) {
        console.log("Win on " + possibilities[choice]);
        win++;
    }
    if (highest == 3) {
        console.log("JackPot on " + possibilities[choice]);
        win++;
        jackpot++;
    }
    console.log("");

    console.log(choice);
    console.log(highest);

    switch (choice) {
        case 0:
            if (highest == 2) {
                console.log("Won 0.1 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.1 on bet");
            }
            break;
        case 1:
            if (highest == 2) {
                console.log("Won 0.2 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.2 on bet");
            }
            break;
        case 2:
            if (highest == 2) {
                console.log("Won 0.3 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.3 on bet");
            }
            break;
        case 3:
            if (highest == 2) {
                console.log("Won 0.4 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.4 on bet");
            }
            break;
        case 4:
            if (highest == 2) {
                console.log("Won 0.5 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.5 on bet");
            }
            break;
        case 5:
            if (highest == 2) {
                console.log("Won 0.6 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.6 on bet");
            }
            break;
        case 6:
            if (highest == 2) {
                console.log("Won 0.7 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.7 on bet");
            }
            break;
        case 7:
            if (highest == 2) {
                console.log("Won 0.8 on bet");
            }
            if (highest == 3) {
                console.log("Won 1.8 on bet");
            }
            break;
    }
}


function main() {

    // instantiate my game container
    game = new createjs.Container();
   

    // Create Slotmachine User Interface
    createUI();


    stage.addChild(game);
    


}



