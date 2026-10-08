const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kata/kalimat: ", (kalimat) => {
    let hasil = kalimat.split("").reverse().join("");

    console.log("Hasil dibalik: " + hasil);

    rl.close();
});