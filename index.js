const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (daftarNama, tipeUrutan) => {  
  const hasilTanpaNomor= tipeUrutan(daftarNama);
  const hasilDenganNomor= [];
  for (
    let data = 0;
    data < hasilTanpaNomor.length;
    data++
    ) {
    hasilDenganNomor.push(`${data + 1}. ${hasilTanpaNomor[data]}`);
  }
  return hasilDenganNomor;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (daftarNama) => {
  return daftarNama.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (daftarNama) => {
  return daftarNama.reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
