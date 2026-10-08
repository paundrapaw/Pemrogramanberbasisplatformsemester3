let a = 20;
let b = 10;
let penjumlahan = a + b;
let pengurangan = a - b;
let perkalian = a * b;
let pembagian = a / b;
let sisaBagi = a % b;



function luasPersegi (a, b) {
    let luas = a * b;
    return luas;
}


function luasSegitiga (a, b) {
    let luas = 0.5 * a * b;
    return luas;
}


function luasLingkaran (r) {
    let luas = 3.14 * r * r;
    return luas;
}


console.log("Luas Persegi:", luasPersegi(5, 10));
console.log("Luas Segitiga:", luasSegitiga(5, 10));
console.log("Luas Lingkaran:", luasLingkaran(7));
