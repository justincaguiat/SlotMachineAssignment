// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;
var helloText;
var buttonBitmap;

var game;
var background;
var spinButton;
var reels = ["Sonic", "Tails", "YellowGuy", "Robotnic", "Bars", "Knuckles", "Rings", "blanks"];
var firstOutcome;
var secondOutcome;
var thirdOutcome;

var spins = 0;
var win = 0;
var loss = 0;
var jackpot = 0;
var playerBet = 0;
var winnings = 0;

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
    firstOutcome = Math.floor(Math.random() * reels.length);
    console.log("Slot One: " + reels[firstOutcome]);

    secondOutcome = Math.floor(Math.random() * reels.length);
    console.log("Slot Two: " + reels[secondOutcome]);

    thirdOutcome = Math.floor(Math.random() * reels.length);
    console.log("Slot Three: " + reels[thirdOutcome]);

    payoutCheck(reels[firstOutcome], reels[secondOutcome], reels[thirdOutcome]);
}

function payoutCheck(spotOne, spotTwo, SpotThree) {
    var allSlots = [spotOne, spotTwo, SpotThree];

    var sonic = 0;
    var tails = 0;
    var yellowGuy = 0;
    var robotnic = 0;
    var bars = 0;
    var knuckles = 0;
    var rings = 0;
    var blanks = 0;

    playerBet = 1;

    for (var i = 0; i < reels.length; i++) {
        for (var r = 0; r < allSlots.length; r++) {
            switch (reels[i]) {
                case reels[0]:
                    if (reels[0] == allSlots[r]) {
                        sonic++;
                    }
                    break;
                case reels[1]:
                    if (reels[1] == allSlots[r]) {
                        tails++;
                    }
                    break;
                case reels[2]:
                    if (reels[2] == allSlots[r]) {
                        yellowGuy++;
                    }
                    break;
                case reels[3]:
                    if (reels[3] == allSlots[r]) {
                        robotnic++;
                    }
                    break;
                case reels[4]:
                    if (reels[4] == allSlots[r]) {
                        bars++;
                    }
                    break;
                case reels[5]:
                    if (reels[5] == allSlots[r]) {
                        knuckles++;
                    }
                    break;
                case reels[6]:
                    if (reels[6] == allSlots[r]) {
                        rings++;
                    }
                    break;
                case reels[7]:
                    if (reels[7] == allSlots[r]) {
                        blanks++;
                    }
                    break;
            }
        }
    }
    console.log("");

    if (blanks == 0) {
        if (sonic == 3) {
            winnings = playerBet * 10;
            console.log("Win on Sonic: " + winnings);
        } else if (tails == 3) {
            winnings = playerBet * 20;
            console.log("Win on Tails: " + winnings);
        } else if (yellowGuy == 3) {
            winnings = playerBet * 30;
            console.log("Win on yellowGuy: " + winnings);
        } else if (robotnic == 3) {
            winnings = playerBet * 40;
            console.log("Win on robotnic: " + winnings);
        } else if (bars == 3) {
            winnings = playerBet * 50;
            console.log("Win on bars: " + winnings);
        } else if (knuckles == 3) {
            winnings = playerBet * 75;
            console.log("Win on knuckles: " + winnings);
        } else if (rings == 3) {
            winnings = playerBet * 100;
            console.log("Win on rings: " + winnings);
        } else if (sonic == 2) {
            winnings = playerBet * 2;
            console.log("Win on Sonic: " + winnings);
        } else if (tails == 2) {
            winnings = playerBet * 2;
            console.log("Win on tails:" + winnings);
        } else if (yellowGuy == 2) {
            winnings = playerBet * 3;
            console.log("Win on yellowguy: " + winnings);
        } else if (robotnic == 2) {
            winnings = playerBet * 4;
            console.log("Win on robotnic: " + winnings);
        } else if (bars == 2) {
            winnings = playerBet * 5;
            console.log("Win on bars: " + winnings);
        } else if (knuckles == 2) {
            winnings = playerBet * 10;
            console.log("Win on knuckles: " + winnings);
        } else if (rings == 2) {
            winnings = playerBet * 20;
            console.log("Win on rings: " + winnings);
        } else {
            winnings = playerBet * 1;
            console.log("No blanks! Take your money!: " + winnings);
        }

        win++;
        // showWinMessage();
    } else {
        loss++;
        console.log("Spin Again");
        //  showLossMessage();
    }

    console.log("");
    spins++;
    console.log("Number is spins " + spins);
    console.log("Number is wins " + win);
    console.log("Number is losses " + loss);
    console.log("Number of Jackpots " + jackpot);
    console.log("jackPot Percentage " + Math.floor(jackpot / spins * 100) + " %");
    console.log("Win percentage : " + Math.floor(win / spins * 100) + " %");
    console.log("");
}

function main() {
    // instantiate my game container
    game = new createjs.Container();

    // Create Slotmachine User Interface
    createUI();

    stage.addChild(game);
}
//# sourceMappingURL=game.js.map
