
confirm("Bienvenido al juego")
let numero_sistema = Math.round(Math.random()*10); 
let intentos = 3;
let contador = 1;
while (contador <= intentos){
let numero_lanzado = parseInt(prompt("Introduzca un numero entre 0-10"));
if (numero_sistema ==numero_lanzado){
    alert("Acertaste, en el intento numero " +intentos);
    break;
} else {
    alert("Lo siento, perdiste vuelve a intentarlo");
}
contador++;
}
if(numero_sistema==numero_lanzado){
imprimir("Usted acerto en el intento numero " +contador)
} else {
imprimir("Lo siento, usted fallo. El numero era " +numero_sistema);
} 


