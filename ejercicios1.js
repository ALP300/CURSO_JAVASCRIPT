/*  

Declara tres variables a, b y c con valores numéricos y utiliza condicionales
para determinar cuál de ellos es el mayor.

*/
let a = parseInt(prompt("Ingresa el número entero(a): "));
let b = parseInt(prompt("Ingresa el número entero(b): "));
let c = parseInt(prompt("Ingresa el número entero(c): "));
if (a > b && a > c) {
  console.log(`${a} que es a es el mayor`);
} else if (b > a && b > c) {
  console.log(`${b} que es b es el mayor`);
} else {
  console.log(`${c} que es c es el mayor`);
}
