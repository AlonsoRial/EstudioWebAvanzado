var canvas = /** @type {HTMLCanvasElement} */(null);
var ctx = /** @type {CanvasRenderingContext2D} */(null);

var time = 0;
var deltaTime = 0;
var timeSinceStart = 0;

var keys = {};

var graphicAssets = {
    witch: {
        img: null,
        path: "./assets/Player_La_Bruga_Piruga.png"
    },
    background: {
        img: null,
        path: "./assets/Fondo.png"
    },
    broom: {
        img: null,
        path: "./assets/broom.png"
    },
    bullet:{
        img: null,
        path: "./assets/Bala-Escopeta.png"
    },
    enemy:{
        img: null,
        path: "./assets/Cazador de brujas.png"
    }
};

var audioHit = null;

var witch = null;

var enemies = [];
var enemiesCount = 1;

function LoadImages(onloaded) {
    let imagesToLoad = 0;

    const onload = function () {
        --imagesToLoad;
        if (imagesToLoad === 0) {
            onloaded();
        }
    }

    for (let asset in graphicAssets) {
        imagesToLoad++;

        const img = graphicAssets[asset].img = new Image;
        img.src = graphicAssets[asset].path;
        img.onload = onload;
    }
}

function Init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;

    // initialize input
    document.onkeydown = (evt) => {
        keys[evt.code] = true;
    }

    document.onkeyup = (evt) => {
        keys[evt.code] = false;
    }

    //load audio assets
    audioHit = document.getElementById("audio_hit");

    LoadImages(Start);
}

function Start() {
    time = Date.now();

    // initialize game logic
    witch = new Witch(canvas.width / 2, canvas.height - 100, 100, graphicAssets.witch.img);

    //create the enemies
    for (let i = 0; i < enemiesCount; i++) {
        const enemy = new Enemy(50,50,100, graphicAssets.enemy.img);
        enemies.push(enemy);
    }

    Loop();
}

function Loop() {
    requestAnimationFrame(Loop);

    // compute delta time
    let now = Date.now();
    deltaTime = (now - time) / 1000;
    timeSinceStart += deltaTime;
    time = now;

    Update(deltaTime);
    Draw();
}

function Update(deltaTime) {
    witch.Update(deltaTime);

    enemies.forEach(enemy => enemy.Update(deltaTime));
}

function Draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the background
    ctx.drawImage(graphicAssets.background.img, 0, 0);
    
    // draw the Witch
    witch.Draw();

    enemies.forEach(enemy => enemy.Draw());
    // deltaTime
    ctx.fillStyle = "black";
    ctx.font = "normal 12px Comic Sans MS";
    ctx.textBaseline = "top";
    ctx.fillText(timeSinceStart.toFixed(2), 10, 10);
    ctx.fillText(`fps: ${(1 / deltaTime).toFixed(2)}`, 10, 26);
    ctx.fillText(`dt: ${deltaTime.toFixed(4)}`, 10, 42);
}

window.onload = Init;