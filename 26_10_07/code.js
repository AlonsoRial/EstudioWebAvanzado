var canvas = /** @type {HTMLCanvasElement} */ (null);
var ctx = /**  @type {CanvasRenderingContext2D} */ (null);

var linkImage = null;


let actualFrame  = 0;
let actualRow = 0;
let totalFrames = [8, 8, 8, 8, 8, 8, 8 ,8];

function Init()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");


    ctx.imageSmoothingEnabled = false;

    document.onkeydown = KeyDown;

    linkImage = new Image();
    linkImage.src = 'pictures/Walk-Anim.png';
    linkImage.onload = () =>{
        setInterval(Draw, 1000/6);
    }
}


function Draw(){
        ctx.clearRect(0,0, canvas.width, canvas.height);

        const scale = 4;
        const frameWidth = 32;
        const frameHeigh = 48;


        ctx.drawImage(
            linkImage,  //Fuente imagen
            
            frameWidth * actualFrame, //posición X
            frameHeigh * actualRow,  //posición Y
            frameWidth, //Su anchura 
            frameHeigh, //su altura

            0,
            0,
            frameWidth * scale,
            frameHeigh * scale
        );
 
        //Versión1
/*         actualFrame++;
         
        if(actualFrame >= totalFrames[actualRow]){
            actualFrame  =0;
            actualRow++;

            if(actualRow >= totalFrames.length){
                actualRow = 0;
            }
        } */


        //Versión 2
        actualFrame++;
        if(actualFrame >= totalFrames[actualRow]){
            actualFrame = 0;
        }

}

function KeyDown(evt){
    console.log(evt.key);
    if(evt.key ==="w"){    
        actualRow = 4;
        actualFrame =  0 ;
    }

    if(evt.key ==="d"){
        actualRow = 2;
        actualFrame =  0 ;
    }

    if(evt.key ==="a"){
        actualRow = 6;
        actualFrame =  0 ;
    }

    if(evt.key ==="s"){
        actualRow = 0;
        actualFrame =  0 ;
    }
}

window.onload = Init;