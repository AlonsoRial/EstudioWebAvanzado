class Witch{
    constructor(x,y,life, img){

        this.x = x;
        this.y = y;
        this.life = life;
        this.img = img;

        this.brooms = [];
    }


    Update(deltaTime){

        this.rotation = Math.cos(timeSinceStart * 4) * 0.2;

        this.brooms.forEach(broom =>{
            broom.Update(deltaTime);
        });

        const move = {x:0, y:0};
        if(keys["KeyA"]){
            move.x -=1;
        }
        if(keys["KeyD"]){
            move.x +=1;
        }

        this.x += move.x * this.speed;
        deltaTime;

        this.x = Math.min(this.x, canvas.width -20);
        
        this.x = Math.max(this.x, 20);

        if(keys["Space"])
        {

        }

    }

    Draw(){
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(0);
        ctx.scale(2,2);

        ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);

        ctx.restore();



    }

    Shot(){

    }

}

