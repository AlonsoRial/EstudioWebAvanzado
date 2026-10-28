var canvas = /** @type {HTMLCanvasElement} */ (null);
var ctx = /**  @type {CanvasRenderingContext2D} */ (null);

var time = 0;
var deltaTime= 0;
var timeSinceStart = 0;

var graphicAssts = {
    witch: {
        img: null, path:"./assets/Player_La_Bruga_Piruga.png"
    }
}

var witch = null;

function LoadImages(onloaded){
    let imagesToLoad = 0;

    const onload = function()
    {
        --imagesToLoad;
        if(imagesToLoad ===0)
            {
                onloaded();
            }
    }

    for (let asset in graphicAssets)
        {
            imagesToLoad ++;

            const img = graphicAssts[asset].img = new Image;
            img.src = graphicAssets[asset].path;
            img.onload = onload;
        }
}


function Init() 
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;

    document.onkeydown = (evt) =>{
        keys[evt.code] = true;
    }

    document.onkeyup = (evt) =>{
        key[evt.code] = false;
    }


    LoadImages(Start());
}


function Start()
{
    time = Date.now();

    Loop();
}


function Loop()
{
    requestAnimationFrame(Loop); 

    let now = Date.now();
    deltaTime = (now - time) / 1000;
    timeSinceStart += deltaTime;
    time = now;

    Update(deltaTime);
    Draw();

}


function Update()
{


}

function Draw()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);    


    witch.Draw();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, Math.cos(timeSinceStart * 10) * 100 + canvas.height/2, 100, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "normal 10px Comic Sans MS ";
    ctx.textBaseline = "top";
    ctx.fillText(timeSinceStart.toFixed(2), 10, 10);

    ctx.fillText(`fps: ${(1 / deltaTime).toFixed(2)}`, 10,26);
    

}


window.onload = Init;