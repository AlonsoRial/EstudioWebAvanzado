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


let moon = null;
let moonRotation =0;
let moonRotationSpeed = 0.2;



function Init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");


    earth = new Image();
    earth.src = "Pictures/earth.png";
    
    sun = new Image();
    sun.src = "Pictures/sun.png";

    
    mars = new Image();
    mars.src = "Pictures/mars.png";

    moon = new Image();
    moon.src = "Pictures/moon.png";

earth.onload = () =>{
    setInterval(Draw, 1000/60);
}



}

function Draw() {


    


    sunRotation += sunRotationSpeed;
    earthRotation += earthRotationSpeed;
    marsRotation += marsRotationSpeed;
    moonRotation += moonRotationSpeed;

    ctx.clearRect(0,0,canvas.width, canvas.height);


    let grd = ctx.createLinearGradient(canvas.width,0,canvas.width, canvas.height);

    grd.addColorStop(0,"rgba(0, 0, 0, 0.87)");

    grd.addColorStop(1, "rgb(34, 32, 56)"); 

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canvas.width, canvas.height); 

    ctx.save(); //sun

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(sunRotation);
        ctx.scale(0.2, 0.2);

        ctx.drawImage(sun, -sun.width/2, -sun.height/2);
  

        ctx.save();
            ctx.rotate(earthRotation/8);
        ctx.save(); //earth
            ctx.translate(700,0);
            ctx.rotate(earthRotation);

            ctx.scale(0.35, 0.35);

            ctx.drawImage(earth, -earth.width/2, -earth.height/2);


            ctx.save(); //moon
                ctx.translate(300,300);
                ctx.rotate(moonRotation);

                ctx.scale(1, 1);

                ctx.drawImage(moon, -moon.width/2, -moon.height/2);
                ctx.restore();

        ctx.restore();
        ctx.restore();

        ctx.save(); //mars
            ctx.translate(1200,0);
            ctx.rotate(marsRotation);

            ctx.scale(0.35, 0.35);

            ctx.drawImage(mars, -mars.width/2, -mars.height/2);

        ctx.restore();


    ctx.restore();





}

window.onload = Init;