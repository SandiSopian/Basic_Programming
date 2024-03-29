// interface
// interface itu sebagai blueprint sebuah class, setiap class yang menggunakan interface class tertentu harus mempunya property yang sama seperti class interface yang digunakan

interface Laptop {
  name: string;
  seri: number;
}

class Asus implements Laptop {
  name: string;
  seri: number;
  isGaming: boolean;

  constructor(name: string, seri: number, isGaming: boolean) {
    this.name = name;
    this.seri = seri;
    this.isGaming = isGaming;
  }
}

class Macbook implements Laptop {
  name: string;
  seri: number;
  isGaming: boolean;

  constructor(name: string, seri: number, isGaming: boolean) {
    this.name = name;
    this.seri = seri;
    this.isGaming = isGaming;
  }
}

let asus = new Asus("Asus", 55478, true);
console.log(asus.name);
console.log(asus.seri);
console.log(asus.isGaming);

let mac = new Macbook("Macbook", 78554, false);
console.log(mac.name);
console.log(mac.seri);
console.log(mac.isGaming);
