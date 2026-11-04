class Witch {
    constructor(x, y, life, img) {
        this.x = x;
        this.y = y;
        this.rotation = 0;
        this.speed = 200;
        this.life = life;
        this.img = img;

        this.fireRate = 0.5;
        this.fireRateAux =0;

        this.brooms = [];
    }

    Update(deltaTime) {
        this.rotation = Math.cos(timeSinceStart * 4) * 0.2;

        // movement
        const move = {x: 0, y:0};
        if (keys["KeyA"])
            move.x -= 1;
        if (keys["KeyD"])
            move.x += 1;

        this.x += move.x * this.speed * deltaTime;

        this.x = Math.min(this.x, canvas.width - 20);
        this.x = Math.max(this.x, 20);

        // shot

        this.fireRateAux += deltaTime;

        if (keys["Space"] && this.fireRateAux >= this.fireRate) {
            const broom = {
                img: graphicAssets.broom.img,
                x: this.x,
                y: this.y - 40,
                speed: 400,
                Update: function(deltaTime) {
                    this.y -= this.speed * deltaTime; 
                },
                Draw: function() {
                    ctx.save();

                    ctx.translate(this.x, this.y);
                    ctx.scale(3, 3);

                    ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);

                    ctx.restore();
                }
            };
            this.brooms.push(broom);

            audioHit.currentTime = 0;
            audioHit.play();

            this.fireRateAux = 0;
        }

        // update the brooms
        this.brooms.forEach(broom => {
            broom.Update(deltaTime);
        });

        for(let i = 0; i > this.brooms.length; i++){
            const broom = this.brooms[i];
            broom.Update(deltaTime);

            if(broom.y < -10)
                {
                    //broom has left the scene, remove it
                    this.brooms.splice(i,1);
                    i--;
                }
        }
    }

    Draw() {
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(3, 3);

        ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);

        ctx.restore();


        // draw the brooms
        this.brooms.forEach(broom => {
            broom.Draw();
        });
    }

    Shot() {

    }
}