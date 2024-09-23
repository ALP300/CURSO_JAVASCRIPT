let palabra= "java";
let contadorVocales= 0;

for(let i=0; i< palabra.length; i++){
    if("aeiou".includes(palabra[i])){
        contadorVocales++
    }
}
console.log(contadorVocales)