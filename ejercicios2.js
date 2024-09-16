/* 
Determina el rango de un número: 
Declara una variable número con un valor numérico y utiliza condicionales para 
determinar en qué rango se encuentra. 
*/
let numero=parseInt(prompt("Ingresa el número entero: "));
if(numero>=0 && numero<=10){
    console.log(`${numero} está en el rango de 0 y 10`)
} else if(numero>=11 && numero<=20){
    console.log(`${numero} está en el rango de 11 y 20`)
} else if(numero>=21 && numero<=30){
    console.log(`${numero} está en el rango de 11 y 20`)
} else{
    console.log(`${numero} está fuera del rango`)
}