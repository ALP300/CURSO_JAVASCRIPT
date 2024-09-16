/*Calculadora simple: 
Declara tres variables: a (un número), operador (un operador aritmético como 
cadena), y b (otro número). Utiliza condicionales para realizar la operación */
let a=10;
let operador="+";
let b=5;
let resultado;

if (operador=="+"){
    resultado=a+b;
} else if(operador=="-"){
    resultado=a-b;
} else if(operador=="*"){
    resultado=a*b;
} else if(operador=="/"){
    resultado=a/b;
} else{
    console.log("Operador inválido")
}

console.log(`Resultado: ${resultado}`)

