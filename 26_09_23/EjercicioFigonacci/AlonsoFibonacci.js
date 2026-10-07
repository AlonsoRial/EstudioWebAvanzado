
//Mi version
function Fibo( numeroPedir){

    let numeroAnterior = 0;
    let numeroActual = 1;
   let numeroSiguiente;

    if(numeroPedir >1){

        for (let index = 0; index < numeroPedir; index++) {
            console.log(numeroActual);
            
            numeroSiguiente = numeroAnterior + numeroActual;

            numeroAnterior = numeroActual;
            numeroActual = numeroSiguiente;
        }

    }

}

/* 4-1 + 4-2
3 + 2 =5 

3-1 + 2-2
2+0=2 */


//Version profe
function Fibonacci(n)
{

    if(n===0){
        return 0;
    }
    else if (n ===1)
        return 1;
    else
        return Fibonacci(n-1) + Fibonacci(n-2);
}

