// Arrow function untuk operasi dasar dengan spread operator
const tambah = (...nums) => nums.reduce((acc, num) => acc + num, 0);
const kurang = (a, b) => a - b;
const kali = (...nums) => nums.reduce((acc, num) => acc * num, 1);
const bagi = (a, b) => b !== 0 ? a / b : "Error (bagi 0)";
const modulus = (a, b) => b !== 0 ? a % b : "Error (bagi 0)";

// Fungsi untuk menangani input dan operasi
const hitung = (operator) => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let hasil = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    switch (operator) {
        case '+': hasil = tambah(num1, num2); break;
        case '-': hasil = kurang(num1, num2); break;
        case '*': hasil = kali(num1, num2); break;
        case '/': hasil = bagi(num1, num2); break;
        case '%': hasil = modulus(num1, num2); break;
        default: hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").textContent = hasil;
};
