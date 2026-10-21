var canvas = /** @type {HTMLCanvasElement} */(null);
var ctx = /** @type {CanvasRenderingContext2D} */(null);

function Init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    Draw();
}

function Draw() {
    ctx.fillRect(10, 10, 100, 50);
}

window.onload = Init;