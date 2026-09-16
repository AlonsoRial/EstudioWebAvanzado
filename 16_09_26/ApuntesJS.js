var objecto = {}
typeof (objecto) 
'object'

objeto = new Object()
{}

function Dog(name, age)
{
    this.name = name;
    this.age = age;
}

var dog1 = new Dog('Fido', 3);
console.log(dog1); 

//Los arrays no tienen tipos, pueden meter de todo
var arr = new Array();

arr.push(8);
arr.push('Hola');

arr.forEach

for(let i = 0; i < arr.length; i++)
{
    console.log(i, arr[i]);
}



//Tipos de funciones
//funcion tradiciones
function nombre (a){
    return a + 100;
}

//1. Elimina la palabra "funtion" y coloca la fecha
(a) => {
    return a + 100;
}


//clases
class Shape{
    constructor(id,x,y){
        this.id = id;
        this.move(x,y);
    }

    move(x,y){
        this.x = x;
        this.y = y;
    }

}


//Herencia multiple
class Rectangle extends Shape{
    constructor(id,x,y,width,height){
        super(id,x,y); //Llamada al constructor de la clase padre
        this.width = width; //Propiedades propias de la clase Rectangle
        this.height = height; //Propiedades propias de la clase Rectangle
    }
}

class Circle extends Shape{
    constructor(id,x,y,radius){
        super(id,x,y); //Llamada al constructor de la clase padre
        this.radius = radius; //Propiedad propia de la clase Circle
    }
}


//Getters y Setters
class Rectangle{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }

    set width (width) {this._width = width;}
    set height (height) {this._height = height;}

    get width () {return this._width;}
    get height () {return this._height;}

    get area () {return this._width * this._height;}

}

var r = new Rectangle(10,20);
console.log(r.area);
