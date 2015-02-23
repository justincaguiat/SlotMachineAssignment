﻿// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;

//GUI
var game;
var background;
var spinButton;
var betOne;
var betTen;

var tiles = [];
var turn = 0;

//reel array
var reels = ["sonic", "tails", "yellowGuy", "robotnic", "bar", "knuckles", "ring", "blank"];

//stats
var spins = 0;
var win = 0;
var loss = 0;
var jackpot = 0;
var playerBet = 1;
var winnings = 0;

//texts
var betText;
var winningsText;

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
    //slot machine gui
    background = new createjs.Bitmap("assets/images/slot-machine.png");
    game.addChild(background);

    //spin button
    spinButton = new createjs.Bitmap("assets/images/SpinButton.png");
    spinButton.x = 400;
    spinButton.y = 450;
    game.addChild(spinButton);

    //bet ten button gui
    betTen = new createjs.Bitmap("assets/images/Bet10Button.png");
    betTen.x = 323;
    betTen.y = 423;
    game.addChild(betTen);

    //bet one button gui
    betOne = new createjs.Bitmap("assets/images/BetOneButton.png");
    betOne.x = 323;
    betOne.y = 480;
    game.addChild(betOne);

    //bet counter text--left
    betText = new createjs.Text(playerBet.toString(), "Arial", "#ff0000");
    betText.x = 100;
    betText.y = 325;
    game.addChild(betText);

    //winnings text--center
    winningsText = new createjs.Text(winnings.toString(), "Arial", "#ff0000");
    winningsText.x = 220;
    winningsText.y = 325;
    game.addChild(winningsText);

    //button listeners
    betOne.addEventListener("click", BetOneButton);
    betTen.addEventListener("click", BetTenButton);
    spinButton.addEventListener("click", SpinButton);
}
function BetOneButton() {
    playerBet = 1;
    betText.text = playerBet.toString();
    console.log("Bet Changed to: " + playerBet);
}
function BetTenButton() {
    playerBet = 10;
    betText.text = playerBet.toString();
    console.log("Bet Changed to: " + playerBet);
}

function SpinButton() {
    //Getting Random Elements from each slot
    var outCome = Math.floor((Math.random() * 65) + 1);
    var results = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        var outCome = Math.floor((Math.random() * 65) + 1);

        if (outCome >= 1 && outCome <= 27)
            results[spin] = 7; //blanks
        if (outCome >= 28 && outCome <= 37)
            results[spin] = 0; //sonic
        if (outCome >= 38 && outCome <= 46)
            results[spin] = 1; //tails
        if (outCome >= 47 && outCome <= 54)
            results[spin] = 2; //yellowGuy
        if (outCome >= 55 && outCome <= 59)
            results[spin] = 3; //robotnic
        if (outCome >= 60 && outCome <= 62)
            results[spin] = 4; //bars
        if (outCome >= 63 && outCome <= 64)
            results[spin] = 5; //knuckles
        if (outCome == 65)
            results[spin] = 6; //rings
    }

    for (var tile = 0; tile < 3; tile++) {
        if (turn > 0) {
            game.removeChild(tiles[tile]);
            turn++;
        }
        tiles[tile] = new createjs.Bitmap("assets/images/" + reels[results[tile]] + ".png");
        tiles[tile].x = 90 + (123 * tile);
        tiles[tile].y = 205;

        game.addChild(tiles[tile]);
    }

    //printing results to console.
    console.log("Reel One: " + reels[results[0]]);
    console.log("Reel Two: " + reels[results[1]]);
    console.log("Reel Three: " + reels[results[2]]);

    payoutCheck(reels[results[0]], reels[results[1]], reels[results[2]]);
}

//checks payout and displays stats
function payoutCheck(spotOne, spotTwo, spotThree) {
    var allSlots = [spotOne, spotTwo, spotThree];

    var sonic = 0;
    var tails = 0;
    var yellowGuy = 0;
    var robotnic = 0;
    var bars = 0;
    var knuckles = 0;
    var rings = 0;
    var blanks = 0;

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

    //winnings calculations
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
        winningsText.text = winnings.toString();
        // win message to follow
    } else {
        loss++;
        console.log("Spin Again");
        winnings = 0;
        winningsText.text = winnings.toString();
        //loss message to follow
    }

    //console stats
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
