// pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi 
// chiedere un numero all'utente e comunicargli se è pari o dispari.

function numeroParioDispari (numero) {
    
    if (numero % 2 == 0) {
        // ATTENZIONE! Se abbiamo un if, bisogna mettere un return per ogni risultato possibile.
        // Se non è legato ad una variabile, il return può essere associato alla stringa di risultato.
        // Bisognerà avere cura di non scrivere le parentesi, bensì solo la stringa.
        return "pari";
    } else {
        return "dispari";
    }
}

let numero = parseInt(prompt("Scrivi un numero"));

// Ora invochiamo la funzione:
console.log(numeroParioDispari(numero));

// Invochiamo la funzione stampando un risultato più "elaborato":
if(numeroParioDispari(numero) == "pari") {
    document.getElementById("box").innerHTML = `${numero} è pari`;
} else {
    document.getElementById("box").innerHTML = `${numero} è dispari`;
}