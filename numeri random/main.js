// numeri random: generare 10 numeri random (con un for o con un while) 
// attraverso una funzione e stamparli a schermo.

function random (perNumero) {
    let x = Math.floor((Math.floor(Math.random() * perNumero)));
    return x;
}

let perNumero = prompt("Inserisci il numero massimo randomico che vuoi ottenere (vuoi un numero a caso da 0 a...?)");

for (i = 0; i < 10; i++) {
    document.getElementById("numeroRandom").innerHTML += `<li>${random(perNumero)}</li>`;
}