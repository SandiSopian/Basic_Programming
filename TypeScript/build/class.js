"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.User2 = exports.User1 = void 0;
// class
// class pada typescript akan di compile menjadi sebuah prototype pada javascript maka dari itu untuk pembuatan class pada typescript hanya bisa dilakukan di sisi typescript saja
// ada 2 jenis penulisan class
// cara 1
class User1 {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
exports.User1 = User1;
let user1 = new User1("Kaka", 26);
console.log(user1.name, user1.age);
// cara 2
class User2 {
    constructor(name) {
        this.name = name;
    }
}
exports.User2 = User2;
let user2 = new User2("Pen");
console.log(user2.name);
// Note:
// public = bisa di akses di semua class / dari luar class
// private = hanya bisa di akses dari class tersebut dan kelas turunannya
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya
// inheritance
// pewarisan class dari parent class lain ke class turunannya
// 1. Membuat parent class user terlebih dahulu
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
// 2. Membuat class inherintance dari parent class user sebelumnya
class Admin extends User {
    //  menambahkan super construtor pada inherintace class
    constructor(phone, name, age) {
        // super ini mengambil parameter dari parent class
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    //   setter : untuk mementukan value dari suatu parameter dan tidak menghasilkan suatu return
    set email(value) {
        if (value.length < 5) {
            this._email = "masukkan email yang valid";
        }
        else {
            this._email = value;
        }
    }
    // getter : mengambil hasil value dari getter sebelumnya
    get email() {
        return this._email;
    }
}
let admin = new Admin("08544875564", "Cardinal", 35);
admin.getName();
console.log(admin.getName());
admin.getRole();
console.log(admin.getRole());
admin.setName("Mamang");
console.log(admin.setName("Mamang"));
admin.phone;
console.log(admin.phone);
admin.email = "hheehhe@gmail.com";
// email ini bersifat public jadi bisa di tampilkan value nya, sementara _email bersifat private jadi tidak bisa di tampilkan value nya
console.log(admin.email);
