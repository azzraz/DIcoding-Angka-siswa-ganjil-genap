function cekNilai() {
    // Ambil nilai input dari pengguna
    var nilaiInput = document.getElementById("nilaiInput").value;

    // Validasi apakah input adalah angka
    if (isNaN(nilaiInput) || nilaiInput === "") {
        alert("Masukkan nilai dalam bentuk angka.");
        return;
    }

    // Konversi nilai input menjadi angka
    var nilaiAngka = parseFloat(nilaiInput);

    // Tentukan nilai huruf
    var nilaiHuruf;
    if (nilaiAngka >= 85 && nilaiAngka <= 100) {
        nilaiHuruf = "A";
    } else if (nilaiAngka >= 75 && nilaiAngka < 85) {
        nilaiHuruf = "B";
    } else if (nilaiAngka >= 60 && nilaiAngka < 75) {
        nilaiHuruf = "C";
    } else {
        nilaiHuruf = "D";
    }

    // Tentukan jenis bilangan
    var jenisBilangan = (nilaiAngka % 2 === 0) ? "Bilangan Genap" : "Bilangan Ganjil";

    // Tampilkan hasil di HTML
    document.getElementById("nilaiAngka").innerText = "Nilai angka: " + nilaiAngka;
    document.getElementById("nilaiHuruf").innerText = "Nilai huruf: " + nilaiHuruf;
    document.getElementById("jenisBilangan").innerText = jenisBilangan;
}