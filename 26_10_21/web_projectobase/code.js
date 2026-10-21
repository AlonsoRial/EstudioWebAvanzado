var canvas = /** @type {HTMLCanvasElement} */(null);
var ctx = /** @type {CanvasRenderingContext2D} */(null);


let sun = null;
let sunRotation =0;
let sunRotationSpeed = 0.005;


let earth = null;
let earthRotation =0;
let earthRotationSpeed = 0.06;

let mars = null;
let marsRotation =0;
let marsRotationSpeed = 0.09;



function Init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");


    earth = new Image();
    earth.src = "Pictures/earth.png";
    
    sun = new Image();
    sun.src = "Pictures/sun.png";

    
    mars = new Image();
    mars.src = "Pictures/mars.png";

earth.onload = () =>{
    setInterval(Draw, 1000/60);
}



}

function Draw() {

    sunRotation += sunRotationSpeed;
    earthRotation += earthRotationSpeed;
    marsRotation += marsRotationSpeed;

    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.save(); //sun

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(sunRotation);
        ctx.scale(0.2, 0.2);

        ctx.drawImage(sun, -sun.width/2, -sun.height/2);
    // ctx.strokeRect(0, 0,canvas.width,canvas.height);

        ctx.save(); //earth
            ctx.translate(500,0);
            ctx.rotate(earthRotation);

            ctx.scale(0.35, 0.35);

            ctx.drawImage(earth, -earth.width/2, -earth.height/2);

        ctx.restore();


        ctx.save(); //mars
            ctx.translate(1000,0);
            ctx.rotate(marsRotation);

            ctx.scale(0.35, 0.35);

            ctx.drawImage(mars, -mars.width/2, -mars.height/2);

        ctx.restore();


    ctx.restore();
}

window.onload = Init;