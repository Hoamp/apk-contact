// mengambil argument dari command line
console.log(process.argv);






// menggunakan require untuk bisa menggunakan function di contacts.js
// const {tulisPertanyaan, simpanContact} = require('./contacts.js');
const contacts = require('./contacts.js');

// main function
const main = async () => {
    // menangkap pertanyaan
    const nama = await contacts.tulisPertanyaan("Masukkan nama anda : ");
    const email = await contacts.tulisPertanyaan("Masukkan email anda : ");
    const noHp = await contacts.tulisPertanyaan("Masukkan noHp anda : ");

    // simpan inputan user
    contacts.simpanContact(nama, email, noHp);
    
};

// menjalankan main function
main();
