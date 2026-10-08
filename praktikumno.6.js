const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Nama Mahasiswa: ", function(nama) {
    rl.question("Masukkan Nilai Tugas (0-100): ", function(tugas) {
        rl.question("Masukkan Nilai UTS (0-100): ", function(uts) {
            rl.question("Masukkan Nilai UAS (0-100): ", function(uas) {
                
                // Konversi input ke tipe data angka (float/integer)
                let nTugas = parseFloat(tugas);
                let nUts = parseFloat(uts);
                let nUas = parseFloat(uas);

                // Hitung Nilai Akhir sesuai rumus bobot
                let nilaiAkhir = (nTugas * 0.3) + (nUts * 0.3) + (nUas * 0.4);

                console.log("\n==============================");
                console.log("      HASIL NILAI AKHIR       ");
                console.log("==============================");
                console.log("Nama Mahasiswa :", nama);
                console.log("Nilai Tugas    :", nTugas);
                console.log("Nilai UTS      :", nUts);
                console.log("Nilai UAS      :", nUas);
                console.log("Nilai Akhir    :", nilaiAkhir.toFixed(2));
                console.log("==============================");

                rl.close();
            });
        });
    });
});