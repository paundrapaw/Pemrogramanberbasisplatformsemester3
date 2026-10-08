const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function program() {

    console.log("==========================================");
    console.log("       PROGRAM MENGHITUNG DISKON");
    console.log("==========================================");

    console.log("Daftar Barang:");
    console.log("1. Keyboard  = Rp120.000");
    console.log("2. Mouse     = Rp80.000");
    console.log("3. Headset   = Rp175.000");
    console.log("4. Flashdisk = Rp75.000");
    console.log("5. Speaker   = Rp250.000");
    console.log("6. Selesai");
    console.log("==========================================");

    let totalBelanja = 0;
    let jumlahItem = 0;
    let selesai = false;

    while (jumlahItem < 3 || !selesai) {

        console.log(`\nItem ke-${jumlahItem + 1}`);

        let pilihan = parseInt(
            await tanya("Pilih nomor barang (1-6): ")
        );

        let namaBarang = "";
        let harga = 0;

        // SWITCH CASE
        switch (pilihan) {

            case 1:
                namaBarang = "Keyboard";
                harga = 120000;
                break;

            case 2:
                namaBarang = "Mouse";
                harga = 80000;
                break;

            case 3:
                namaBarang = "Headset";
                harga = 175000;
                break;

            case 4:
                namaBarang = "Flashdisk";
                harga = 75000;
                break;

            case 5:
                namaBarang = "Speaker";
                harga = 250000;
                break;

            // CASE UNTUK MENUTUP / SELESAI
            case 6:
                if (jumlahItem < 3) {
                    console.log("Minimal harus membeli 3 jenis barang!");
                    continue;
                }

                selesai = true;
                console.log("Input barang selesai.");
                break;

            default:
                console.log("Pilihan barang tidak tersedia!");
                continue;
        }

        // Jika memilih case 6, keluar dari perulangan
        if (pilihan === 6 && selesai) {
            break;
        }

        // Jika pilihan bukan barang
        if (harga === 0) {
            continue;
        }

        let jumlah = parseInt(
            await tanya(`Jumlah ${namaBarang} yang dibeli: `)
        );

        if (isNaN(jumlah) || jumlah <= 0) {
            console.log("Jumlah harus lebih dari 0!");
            continue;
        }

        // Menghitung subtotal
        let subtotal = harga * jumlah;

        // Menambahkan subtotal ke total belanja
        totalBelanja += subtotal;

        jumlahItem++;

        console.log("------------------------------------------");
        console.log(`Barang   : ${namaBarang}`);
        console.log(`Harga    : Rp${harga.toLocaleString("id-ID")}`);
        console.log(`Jumlah   : ${jumlah}`);
        console.log(`Subtotal : Rp${subtotal.toLocaleString("id-ID")}`);
        console.log("------------------------------------------");

        // Setelah minimal 3 barang, beri pilihan untuk selesai A
        if (jumlahItem >= 3) {
            console.log("\nMinimal 3 barang sudah terpenuhi.");
            console.log("Pilih barang lagi atau pilih 6 untuk selesai.");
        }
    }

    // ==========================================
    // MENGHITUNG DISKON
    // ==========================================

    let diskonPersen = 0;

    if (totalBelanja >= 300000) {
        diskonPersen = 10;
    } else if (totalBelanja >= 100000) {
        diskonPersen = 5;
    } else if (totalBelanja >= 50000) {
        diskonPersen = 3;
    }

    // Menghitung total diskon
    let totalDiskon = totalBelanja * diskonPersen / 100;

    // Menghitung total bayar
    let totalBayar = totalBelanja - totalDiskon;

    // ==========================================
    // HASIL AKHIR
    // ==========================================

    console.log("\n==========================================");
    console.log("              HASIL BELANJA");
    console.log("==========================================");

    console.log(
        `Total Belanja : Rp${totalBelanja.toLocaleString("id-ID")}`
    );

    if (diskonPersen > 0) {

        console.log(
            `Diskon ${diskonPersen}%    : Rp${totalDiskon.toLocaleString("id-ID")}`
        );

        console.log(
            `Total Bayar    : Rp${totalBayar.toLocaleString("id-ID")}`
        );

    } else {

        console.log(
            "Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan"
        );

        console.log(
            `Total Bayar    : Rp${totalBayar.toLocaleString("id-ID")}`
        );
    }

    console.log("==========================================");
    console.log("       TERIMA KASIH SUDAH BERBELANJA");
    console.log("==========================================");

    rl.close();
}

program();