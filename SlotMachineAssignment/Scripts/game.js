// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas;
var stage;
var helloText;
var buttonBitmap;

var game;
var background;
var spinButton;

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
    //spinButton.addEventListener("click", SpinBtn);
}

function main() {
    // instantiate my game container
    game = new createjs.Container();

    // Create Slotmachine User Interface
    createUI();

    stage.addChild(game);
}
//# sourceMappingURL=game.js.map
