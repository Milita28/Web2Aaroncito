function adivinaNumero(){
    alert("Empieza el juego");
let numMaq = Math.floor(Math.random()*(10-1) + 1);
let numUser = parseInt(prompt("ELige un número del 1-10"));
let vida = 5;
console.log("Número a adivinar: " + numMaq);
while(numMaq !== numUser && vida>1){
        vida = (vida-1);
        numUser = parseInt(prompt("Incorrecto, te quedan: "+ vida + " vida(s)."));

    if(numMaq == numUser){
        alert("Ganasteeeee!!!");
    } else if(vida == 1){
        alert("Perdiste :(");
    }
}
console.log("Fin del juego");
}
adivinaNumero();