// ===Variable pada Typescript harus diinisiasi dulu type data nya agar jelas kegunaanya===
// string
let nama: string = "Casandra";
nama = "Rom";

// number
let umur: number = 25;
umur = 30;
umur = 12;

// boolean
let isValid: boolean;
isValid: true;
isValid: false;

// any
// Type data unik dari typescript dimana bisa di gunakan untuk jenis tope data apa saja
let animal: any = "monkey";
animal = 12;
animal = {};
animal = [];
animal = true || false || "string";

// union
//  Type data union dimana inputan bisa diisi oleh 2 jenis type data
let phone: number | string;
phone = 628544474;
phone = "085475775";
