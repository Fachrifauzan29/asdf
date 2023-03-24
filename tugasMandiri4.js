// 1. Judul algoritma: Menghitung Luas dan Keliling Lingkaran dengan JavaScript

// 2. Input yang diperlukan:
const r = prompt("Masukkan panjang jari-jari lingkaran:");

// 3. Langkah kalkulasi:
const phi = 3.14;
const K = 2 * phi * r;
const L = phi * Math.pow(r, 2);

// 4. Instruksi untuk menampilkan hasil kalkulasi:
console.log("Keliling lingkaran adalah " + K);
console.log("Luas lingkaran adalah " + L);
