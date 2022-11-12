// memanggil core module dari node js
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// membuat folder data
const dirPath = "./data"; // membuat folder data
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// pertanyaan readline
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama)=>{
            resolve(nama);
        });
    });
};

// proses untuk menyimpan ke dalam contacts.json
const simpanContact = (nama, email, noHp) => {
    // melakukan proses
    const contact = {nama, email, noHp};
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("terima kasih sudah memasukkan data");

    console.log(contacts);
    rl.close();
}

// mengeksport untuk digunakan di app.js
module.exports = {tulisPertanyaan, simpanContact};