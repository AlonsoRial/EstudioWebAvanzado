var canvas = /** @type {HTMLCanvasElement} */ (null);

var ctx = /** @type {CanvasRenderingContext2D} */ (null);

var mouse = {x:0, y:0}


function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    document.onmousemove = function(evt){
        let rect = canvas.getBoundingClientRect();
        mouse.x = evt.clientX - rect.left;
        mouse.y = evt.clientY - rect.top;
    }

    setInterval(Draw, 1000/30);
    Draw();
}


function Draw(){

    ctx.clearRect(0,0, canvas.width, canvas.height);


    //TODO ESTO ES PARA PONER TIPOS DE COLORES
     ctx.fillStyle = 'red';
    // ctx.fillStyle = 'rgb(255,0,0)';
    // ctx.fillStyle = 'rgba(155,0,0,1)'
    // ctx.fillStyle = '#c22c5e'
    ctx.fillRect(10,10,100,50);


    //Crea un cuadrado sin relleno
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 4;
    ctx.strokeRect(120,10,100,50);

    
    //Semitransperete azul rectangulo
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    ctx.fillRect(60,40,100,50);
 
    
    //orange rectangle with blue stroke
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'lightBlue';
    ctx.beginPath();
    ctx.rect(300, 100, 200,200); //rect es una orden de dibujo, pero no lo dibuja, solo lo prepara
    ctx.rect(400, 400, 20,20); // 
    ctx.fill(); //ejecuta toda las ordendes guardadas, en este caso de dibujo
    ctx.stroke(); //el stroke es el borde


    //eliminar zona
    ctx.clearRect(350, 50,100,100);

    //ctx.clearRect(0,0, canvas.width, canvas.height); //ELIMINA TODO EL DIBUJO



    // a yellow circle
    ctx.fillStyle = 'yellow';
    ctx.beginPath(); // Indica camino nuevo
    ctx.arc(100,300,50,0, Math.PI * 2, false);
    ctx.closePath(); //Cierra el camino nuevo, plan, es para no cerrar la linea
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.fill();


    //pink line path
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.lineTo(canvas.width, 0);

    ctx.closePath();
    ctx.stroke();

    //a quadratic curve
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(550,450);
    ctx.quadraticCurveTo(mouse.x, mouse.y,620,400); //el movimiento de la curva
    ctx.stroke();


    //move red circle
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 4,0, Math.PI *2, false);
    ctx.fill();
}


window.onload = init;