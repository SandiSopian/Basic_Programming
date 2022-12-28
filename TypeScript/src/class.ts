// class
// class pada typescript akan di compile menjadi sebuah prototype pada javascript maka dari itu untuk pembuatan class pada typescript hanya bisa dilakukan di sisi typescript saja
// ada 2 jenis penulisan class
// cara 1
export class User1 {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}
let user1 = new User1("Kaka", 26);
console.log(user1.name, user1.age);
// cara 2
export class User2 {
  constructor(public name: string) {}
}
let user2 = new User2("Pen");
console.log(user2.name);
// Note:
// public = bisa di akses di semua class / dari luar class
// private = hanya bisa di akses dari class tersebut dan kelas turunannya
// protected = hanya bisa di akses dari class tersebut dan kelas turunannya

// inheritance
// pewarisan class dari parent class lain ke class turunannya
// 1. Membuat parent class user terlebih dahulu
export class User {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}
// 2. Membuat class inherintance dari parent class user sebelumnya
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";

  //  menambahkan super construtor pada inherintace class
  constructor(phone: string, name: string, age: number) {
    // super ini mengambil parameter dari parent class
    super(name, age);
    this.phone = phone;
  }
  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }

  //   setter : untuk mementukan value dari suatu parameter dan tidak menghasilkan suatu return
  set email(value: string) {
    if (value.length < 5) {
      this._email = "masukkan email yang valid";
    } else {
      this._email = value;
    }
  }

  // getter : mengambil hasil value dari getter sebelumnya
  get email(): string {
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
