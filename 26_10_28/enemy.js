class Enemy {
    constructor(x, y, life, img) {
        this.x = x;
        this.y = y;
        this.rotation = 0;
        this.speed = 200;
        this.life = life;
        this.img = img;

        this.fireRate = 0.5;
        this.fireRateAux =0;

        this.bullets = [];
    }

    Update(deltaTime) {
        this.rotation = Math.cos(timeSinceStart * 4) * 0.2;

        // movement
        

        // shot
        // this.fireRateAux += deltaTime;

        // if (keys["Space"] && this.fireRateAux >= this.fireRate) {
        //     const bullet = {
        //         img: graphicAssets.bullet.img,
        //         x: this.x,
        //         y: this.y - 40,
        //         speed: 400,
        //         Update: function(deltaTime) {
        //             this.y -= this.speed * deltaTime; 
        //         },
        //         Draw: function() {
        //             ctx.save();

        //             ctx.translate(this.x, this.y);
        //             ctx.scale(3, 3);

        //             ctx.drawImage(this.img, -this.img.width / 2, -this.img.height / 2);

        //             ctx.restore();
        //         }
        //     };
        //     this.bullets.push(bullet);

        //     audioHit.currentTime = 0;
        //     audioHit.play();

        //     this.fireRateAux = 0;
        // }

        

        for(let i = 0; i > this.bullets.length; i++){
            const bullet = this.bullets[i];
            bullet.Update(deltaTime);

            if(bullet.y < -10)
                {
                    //bullet has left the scene, remove it
                    this.bullets.splice(i,1);
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


        // draw the bullets
        this.bullets.forEach(bullet => {
            bullet.Draw();
        });
    }

    Shot() {

    }
}