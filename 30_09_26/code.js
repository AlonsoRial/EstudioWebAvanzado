var canvas = /** @type {HTMLCanvasElement} */ (null);
var ctx = /**  @type {CanvasRenderingContext2D} */ (null);


var mouse = {x:0, y:0}

function Init()
{
    canvas= document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    document.onmousemove = (evt) =>{
        let rect = canvas.getBoundingClientRect();
        mouse.x = evt.clientX - rect.left;
        mouse.y = evt.clientY - rect.top;
    }

/*     setInterval(Draw, 1000/60);
    Draw(); */

    setInterval(Ejercicio, 1000/60);
    Ejercicio();
}


function Ejercicio()
{
    //Cuadrado
    let deCua = ctx.createLinearGradient(0,0,canvas.width, canvas.height);
    deCua.addColorStop(0, "white");
    deCua.addColorStop(0.5, "green");
    deCua.addColorStop(1, "red");


    ctx.fillStyle = deCua;
    ctx.fillRect(0,0,canvas.width, canvas.height);


    //Circulo
     ctx.arc(100,100,150,0, Math.PI * 2, false);
    ctx.closePath(); 


    let deCir = ctx.createRadialGradient(150, 140 , 50, 150, 130 , 10);
    deCir.addColorStop(0, "black");
    deCir.addColorStop(1, "white");
    
    ctx.fillStyle = deCir;
    ctx.fill();


/*     let deCir = ctx.createRadialGradient(0, 0 , 100, 0, 0 , 10);
    deCir.addColorStop(0, "black");
    deCir.addColorStop(1, "white");


    ctx.fillStyle = deCir;
    ctx.fillRect(0,0,canvas.width, canvas.height); */


}




function Draw(){

    //Degradado
    ctx.fillRect(10,10,100,50);

/*     let grd = ctx.createLinearGradient(0,0,canvas.width, mouse.y);
    grd.addColorStop(0,"rgba(255, 112, 184, 0.87)");
    grd.addColorStop( Math.max( mouse.x / canvas.width), "#3dd");
    grd.addColorStop(1, "rgb(31, 92, 54)"); */

//Eje degradado
/* 
    let grd = ctx.createLinearGradient(0,0,canvas.width, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.3, "white");
    grd.addColorStop(0.4, "lime");
    grd.addColorStop(0.6, "red");
    grd.addColorStop(1, "white");


    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canvas.width, canvas.height); 
 */



//Degradado circular
  //  let radialGrd = ctx.createRadialGradient(canvas.width/2, canvas.height/2 , 10, canvas.width/2, canvas.height/2 , 100 );
    
    let radialGrd = ctx.createRadialGradient(canvas.width/2, canvas.height/2 , 10, canvas.width/2, canvas.height/2 , mouse.x );
    

    radialGrd.addColorStop(0 , "lime");
    radialGrd.addColorStop(1, "yellow");

    ctx.fillStyle = radialGrd;
    ctx.fillRect(0,0,canvas.width, canvas.height);

}

window.onload = Init;