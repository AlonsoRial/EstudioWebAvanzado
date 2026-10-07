
var canvas = null;
var ctx = null; // contexto del canvas


class Shape{

    constructor(x,y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    toString(){
       // return "[x: " + this.x + ", y: " + this.y + "]";   forma antigua de concatenar strings
        return '[x:${this.x}, y:${this.y}, color:${this.color}]' //forma nueva de concatenar strings
    }

    Draw(ctx){
        ctx.fillStyle = this.color;
    }

}

class Rectangle extends Shape{

    constructor(x,y,width,height,color){
        super(x,y,color); //Llamada al constructor de la clase padre
        this.width = width;
        this.height = height;
    }


    Draw(ctx){
        super.Draw(ctx); //Llama al método Draw de la clase padre para establecer el color de relleno
        ctx.fillRect(this.x, this.y, this.width, this.height); //Dibuja un rectángulo relleno en el contexto
    }

    toString(){
        return `[x:${this.x}, y:${this.y}, width:${this.width}, height:${this.height}, color:${this.color}]`;
    }

}


class Circle extends Shape{

    constructor(x,y,radius,color){
        super(x,y,color); //Llamada al constructor de la clase padre
        this.radius = radius;
    }

    Draw(ctx){
        super.Draw(ctx); //Llama al método Draw de la clase padre para establecer el color de relleno

        ctx.beginPath(); //Inicia un nuevo camino de dibujo
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false); //Dibuja un círculo en el contexto

        ctx.fill(); //Rellena el círculo en el contexto
        ctx.closePath(); //Cierra el camino de dibujo

    }
}

function InitCanvas() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.fillRect(10, 20, 200, 100); //Dibuja un rectángulo relleno en el contexto

    let rectA = new Rectangle(0,0,200,100, "blue");
    rectA.Draw(ctx); //Dibuja el rectángulo en el contexto

    let circleA = new Circle(300,300,120, "yellow");
    circleA.Draw(ctx); //Dibuja el círculo en el contexto
    
}

window.onload = InitCanvas; //Cuando se cargue la ventana, se ejecuta la función InitCanvas
//Para que se ejecute la función InitCanvas, antes que el html

//Si fuera window.onload = InitCanvas(); //Se ejecuta la función InitCanvas, pero no cuando se cargue la ventana, sino en el momento de la ejecución del script

//InitCanvas(); //Ejecuta la funcion InitCanvas 
