const secuencia = new Array();

function Fibo( numeroPedir){

    numero = numeroPedir;

   

    if(numeroPedir >1){

        while(numero >1){

            numeroF = (numero -1) + (numero -2);

            console.log("f(" +numero + ") ==" + numeroF )

            numero--;
        }

    }

}




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