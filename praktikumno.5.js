const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", function(angka) {
    angka = parseInt(angka);
    
    if (angka % 2 === 0) {
        console.log("Angka tersebut adalah bilangan genap.");
    } else {
        console.log("Angka tersebut adalah bilangan ganjil.");
    }

    rl.close();
});